import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { supabaseAdmin } from "@/lib/supabase";
import {
  newsletterEmailConfigured,
  sendBlogNotificationEmail,
} from "@/lib/newsletter-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const REPOSITORY = "anjannajaivibe-bot/srisuprajainfracon-next";
const STATE_BUCKET = "newsletter-system";
const MAX_COMMIT_AGE_MS = 2 * 60 * 60 * 1000;

const payloadSchema = z.object({
  before: z.string().regex(/^[0-9a-f]{40}$/i),
  after: z.string().regex(/^[0-9a-f]{40}$/i),
});

type BlogPayload = {
  slug?: string;
  title?: string;
  metaDescription?: string;
  excerpt?: string;
};

type NotificationState = {
  before: string;
  after: string;
  sent: Record<string, string[]>;
  completed: string[];
  updatedAt: string;
};

const githubJson = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "Sri-Supraja-Newsletter",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
};

const cleanText = (value = "") =>
  value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&hellip;/gi, "...")
    .replace(/\s+/g, " ")
    .trim();

const pauseForEmailRateLimit = () =>
  new Promise((resolve) => setTimeout(resolve, 550));

async function ensureStateBucket() {
  const { data } = await supabaseAdmin.storage.getBucket(STATE_BUCKET);
  if (data) return;

  const { error } = await supabaseAdmin.storage.createBucket(STATE_BUCKET, {
    public: false,
    fileSizeLimit: 1024 * 1024,
  });

  if (error && !/already exists/i.test(error.message)) {
    throw new Error(`Unable to initialize newsletter state: ${error.message}`);
  }
}

async function readState(before: string, after: string) {
  await ensureStateBucket();
  const path = `blog-notifications/${after}.json`;
  const { data, error } = await supabaseAdmin.storage.from(STATE_BUCKET).download(path);

  if (error || !data) {
    return {
      before,
      after,
      sent: {},
      completed: [],
      updatedAt: new Date().toISOString(),
    } satisfies NotificationState;
  }

  try {
    return JSON.parse(await data.text()) as NotificationState;
  } catch {
    return {
      before,
      after,
      sent: {},
      completed: [],
      updatedAt: new Date().toISOString(),
    } satisfies NotificationState;
  }
}

async function writeState(state: NotificationState) {
  state.updatedAt = new Date().toISOString();
  const path = `blog-notifications/${state.after}.json`;
  const { error } = await supabaseAdmin.storage.from(STATE_BUCKET).upload(
    path,
    JSON.stringify(state, null, 2),
    {
      contentType: "application/json",
      upsert: true,
    },
  );

  if (error) {
    throw new Error(`Unable to save newsletter state: ${error.message}`);
  }
}

export async function POST(request: NextRequest) {
  if (process.env.NEWSLETTER_ENABLED !== "true") {
    return NextResponse.json(
      { success: false, error: "Newsletter is disabled." },
      { status: 503 },
    );
  }

  if (!newsletterEmailConfigured()) {
    return NextResponse.json(
      { success: false, error: "Newsletter email delivery is not configured." },
      { status: 503 },
    );
  }

  try {
    const { before, after } = payloadSchema.parse(await request.json());

    const commit = await githubJson<{
      commit?: { committer?: { date?: string } };
    }>(`https://api.github.com/repos/${REPOSITORY}/commits/${after}`);
    const commitDate = commit.commit?.committer?.date
      ? new Date(commit.commit.committer.date).getTime()
      : 0;

    if (!commitDate || Math.abs(Date.now() - commitDate) > MAX_COMMIT_AGE_MS) {
      return NextResponse.json(
        { success: false, error: "Notification request is outside the allowed publish window." },
        { status: 403 },
      );
    }

    const ancestry = await githubJson<{
      merge_base_commit?: { sha?: string };
    }>(`https://api.github.com/repos/${REPOSITORY}/compare/${after}...master`);

    if (ancestry.merge_base_commit?.sha !== after) {
      return NextResponse.json(
        { success: false, error: "The requested commit is not on master." },
        { status: 403 },
      );
    }

    const comparison = await githubJson<{
      files?: Array<{ filename: string; status: string }>;
    }>(`https://api.github.com/repos/${REPOSITORY}/compare/${before}...${after}`);

    const blogFiles = (comparison.files || [])
      .filter(
        (file) =>
          file.status === "added" &&
          file.filename.startsWith("content/blog/") &&
          file.filename.endsWith(".json"),
      )
      .map((file) => file.filename);

    if (blogFiles.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No newly published blog files found.",
        sent: 0,
      });
    }

    const state = await readState(before, after);
    let totalSent = 0;
    const failures: Array<{ slug: string; email: string; error: string }> = [];

    const { data: subscribers, error: subscriberError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id,name,email,unsubscribe_token,status")
      .eq("status", "active")
      .order("subscribed_at", { ascending: true });

    if (subscriberError) {
      throw new Error(`Unable to load subscribers: ${subscriberError.message}`);
    }

    const deliverableSubscribers = (subscribers || []).filter(
      (subscriber) => Boolean(subscriber.id && subscriber.email),
    );

    for (const filename of blogFiles) {
      const blogResponse = await fetch(
        `https://raw.githubusercontent.com/${REPOSITORY}/${after}/${filename}`,
        { cache: "no-store" },
      );

      if (!blogResponse.ok) {
        throw new Error(`Unable to read published blog: ${filename}`);
      }

      const blog = (await blogResponse.json()) as BlogPayload;
      const slug = blog.slug || filename.split("/").pop()?.replace(/\.json$/, "") || "";
      const title = cleanText(blog.title || "New article from Sri Supraja Infracon");
      const excerpt = cleanText(blog.metaDescription || blog.excerpt || "");

      if (!slug || state.completed.includes(slug)) continue;
      state.sent[slug] ||= [];

      for (let index = 0; index < deliverableSubscribers.length; index += 1) {
        const subscriber = deliverableSubscribers[index];
        if (state.sent[slug].includes(subscriber.id)) continue;

        let unsubscribeToken = subscriber.unsubscribe_token as string | null;
        if (!unsubscribeToken) {
          unsubscribeToken = randomUUID();
          const { error: tokenError } = await supabaseAdmin
            .from("newsletter_subscribers")
            .update({ unsubscribe_token: unsubscribeToken })
            .eq("id", subscriber.id);

          if (tokenError) {
            failures.push({
              slug,
              email: subscriber.email,
              error: `Unable to create unsubscribe token: ${tokenError.message}`,
            });
            continue;
          }
        }

        try {
          await sendBlogNotificationEmail({
            email: subscriber.email,
            name: subscriber.name || "",
            unsubscribeToken,
            title,
            excerpt,
            slug,
          });
          state.sent[slug].push(subscriber.id);
          totalSent += 1;
        } catch (error) {
          failures.push({
            slug,
            email: subscriber.email,
            error: error instanceof Error ? error.message : "Email delivery failed",
          });
        }

        if (index < deliverableSubscribers.length - 1) {
          await pauseForEmailRateLimit();
        }
      }

      const expectedIds = deliverableSubscribers.map((subscriber) => subscriber.id);
      if (expectedIds.every((id) => state.sent[slug].includes(id))) {
        state.completed.push(slug);
      }

      await writeState(state);
    }

    if (failures.length > 0) {
      console.error("Blog newsletter delivery failures:", failures);
      return NextResponse.json(
        {
          success: false,
          sent: totalSent,
          failed: failures.length,
          blogs: blogFiles.length,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      sent: totalSent,
      blogs: blogFiles.length,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid notification request." },
        { status: 400 },
      );
    }

    console.error("Automatic blog newsletter notification failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Notification failed",
      },
      { status: 500 },
    );
  }
}
