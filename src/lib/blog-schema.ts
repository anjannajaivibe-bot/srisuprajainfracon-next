export function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function extractFaqSchema(content: string) {
  const faqRegex =
    /<h[2-3][^>]*>(.*?)<\/h[2-3]>\s*<p[^>]*>(.*?)<\/p>/gi;

  const faqs = [];
  const seen = new Set<string>();
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    const question = stripHtml(match[1]).replace(
      /^(?:frequently asked questions|faqs?)\s*/i,
      ""
    );
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



