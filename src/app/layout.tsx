import type { Metadata } from "next";
import "./globals.css";

// 🔎 SEO: ключевик в начале title, USP в середине, бренд в конце
export const metadata: Metadata = {
  title: "Химчистка мебели в Ташкенте — выезд за 2 часа | Ezzy",
  description:
    "Профессиональная химчистка диванов, матрасов, ковров и кресел в Ташкенте с выездом на дом. Мастер приедет в день обращения. Скидка 10% на первый заказ. Гарантия результата или вернём деньги.",
  keywords:
    "химчистка мебели Ташкент, чистка дивана на дому, химчистка матраса, чистка ковра, химчистка кресла, химчистка на дому Ташкент, мойка дивана Ташкент",
  openGraph: {
    title: "Химчистка мебели в Ташкенте — выезд за 2 часа | Ezzy",
    description:
      "Пятно от кофе? Запах кота? Мастер выедет в день обращения. Скидка 10% + ароматизация в подарок. Гарантия результата.",
    type: "website",
    url: "https://ezzy-website-v2.vercel.app",
    siteName: "Ezzy",
    images: [
      {
        url: "https://ezzy-website-v2.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ezzy — Химчистка мебели в Ташкенте",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Химчистка мебели в Ташкенте — выезд за 2 часа | Ezzy",
    description: "Мастер выедет в день обращения. Скидка 10% + ароматизация в подарок.",
    images: ["https://ezzy-website-v2.vercel.app/og-image.png"],
  },
};

// 🔎 SEO: Schema.org LocalBusiness + AggregateRating
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ezzy-website-v2.vercel.app/#business",
      name: "Ezzy — Химчистка мебели",
      description:
        "Профессиональная химчистка мягкой мебели, диванов, матрасов и ковров в Ташкенте с выездом на дом.",
      url: "https://ezzy-website-v2.vercel.app",
      telephone: "+998781136068",
      email: "info@ezzy.uz",
      address: {
        "@type": "PostalAddress",
        addressLocality: "г. Ташкент",
        addressCountry: "UZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.2995,
        longitude: 69.2401,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://www.instagram.com/ezzy.clean",
        "https://t.me/+998772603003",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Как быстро вы приедете?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мастер выезжает в день обращения — обычно в течение 1–2 часов после звонка. Если вы позвоните до 18:00, мы гарантируем приезд сегодня.",
          },
        },
        {
          "@type": "Question",
          name: "Безопасна ли химия для детей и животных?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Мы используем сертифицированные профессиональные средства европейских брендов — гипоаллергенные и не токсичные. После высыхания (1–3 часа) мебель полностью безопасна.",
          },
        },
        {
          "@type": "Question",
          name: "Что если результат не понравится?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мы вернём деньги без вопросов. Это наша гарантия качества.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько времени занимает чистка?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Угловой диван — 2–3 часа, кресло — 1–1,5 часа, матрас — 1,5–2 часа. После чистки мебель сохнет ещё 1–3 часа.",
          },
        },
        {
          "@type": "Question",
          name: "Есть ли гарантия на результат?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Если результат не устроил — возвращаем деньги. Если пятно проявится снова в течение 7 дней — приедем и устраним бесплатно.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
