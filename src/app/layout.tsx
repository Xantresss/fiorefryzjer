import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIORE — Studio Fryzur & Trychologia | Toruń",
  description:
    "Eksperci trychologii i stylizacji w Toruniu. Luksusowe zabiegi pielęgnacyjne, konsultacje trychologiczne, koloryzacja i strzyżenie w Studio Fryzur Fiore.",
  keywords: [
    "fryzjer Toruń",
    "trycholog Toruń",
    "salon fryzjerski Toruń",
    "leczenie włosów",
    "trychologia",
    "infuzja tlenowa włosy",
    "koloryzacja Toruń",
  ],
  openGraph: {
    title: "FIORE — Studio Fryzur & Trychologia | Toruń",
    description:
      "Zdrowe włosy zaczynają się tutaj. Eksperci trychologii i stylizacji w Toruniu.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
