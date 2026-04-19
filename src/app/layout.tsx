import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezzy — Химчистка мебели в Ташкенте",
  description: "Профессиональная химчистка мягкой мебели, диванов и матрасов в Ташкенте. Быстро, качественно, с гарантией. Скидка 10% на первый заказ!",
  keywords: "химчистка мебели Ташкент, чистка дивана, чистка матраса, химчистка на дому",
  openGraph: {
    title: "Ezzy — Химчистка мебели в Ташкенте",
    description: "Профессиональная химчистка мягкой мебели с выездом на дом. Скидка 10%!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
