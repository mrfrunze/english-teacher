"use client"

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lynette English Teacher",
    jobTitle: "English Language Teacher",
    url: "",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/"
    ],
    description:
      "Experienced English teacher offering online lessons for Beginner, Pre-Intermediate, and Intermediate levels. Individual approach, exam preparation, and flexible schedule.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
