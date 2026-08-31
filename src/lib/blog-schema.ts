export function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeQuestionHeading(heading: string) {
  let question = stripHtml(heading);

  const faqMarker = /(?:frequently asked questions|faqs?)\s*/gi;
  const markers = [...question.matchAll(faqMarker)];
  if (markers.length) {
    const lastMarker = markers[markers.length - 1];
    question = question.slice((lastMarker.index || 0) + lastMarker[0].length);
  }

  const joinedQuestionStart = question.match(
    /(?<=[a-z])(?:Are|Can|Could|Do|Does|How|Is|Should|What|When|Where|Which|Who|Why|Will|Would)\s/
  );
  if (joinedQuestionStart?.index) {
    question = question.slice(joinedQuestionStart.index);
  }

  // Legacy blog HTML can place surrounding section content inside a heading.
  // A genuine FAQ heading should be concise and end with one question mark.
  if (
    question.length < 11 ||
    question.length > 220 ||
    !question.endsWith("?") ||
    (question.match(/\?/g) || []).length !== 1
  ) {
    return "";
  }

  return question;
}

export function extractFaqSchema(content: string) {
  const faqRegex =
    /<h[2-3][^>]*>(.*?)<\/h[2-3]>\s*<p[^>]*>(.*?)<\/p>/gi;

  const faqs = [];
  const seen = new Set<string>();
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    const question = normalizeQuestionHeading(match[1]);
    const answer = stripHtml(match[2]);
    const key = question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

    if (
      question.length > 10 &&
      answer.length > 20 &&
      question.includes("?") &&
      !seen.has(key)
    ) {
      seen.add(key);
      faqs.push({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      });
    }
  }

  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };
}

