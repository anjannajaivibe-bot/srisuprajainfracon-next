export function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function extractFaqSchema(content: string) {
  const faqRegex =
    /<h[2-3][^>]*>(.*?)<\/h[2-3]>\s*<p[^>]*>(.*?)<\/p>/gi;

  const faqs = [];
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    const question = stripHtml(match[1]);
    const answer = stripHtml(match[2]);

    if (
      question.length > 10 &&
      answer.length > 20 &&
      question.toLowerCase().includes("?")
    ) {
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

