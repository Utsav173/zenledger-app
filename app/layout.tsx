import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Temporal | AI-Powered Financial Intelligence Ecosystem",
  description:
    "Master your net worth with Temporal. A privacy-focused, local-first personal finance app powered by on-device AI (Gemma LLM). Zero cloud dependencies, 100% data sovereignty.",
  keywords: ["local-first finance", "privacy wealth tracker", "on-device AI", "Gemma LLM finance", "offline investment tracker", "secure portfolio manager", "data sovereignty"],
  authors: [{ name: "Temporal Team" }],
  openGraph: {
    title: "Temporal | AI-Powered Financial Intelligence",
    description: "Total control over your financial data. Secure, offline, and AI-driven wealth tracking.",
    url: "https://temporal.khatriutsav.com",
    siteName: "Temporal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temporal | AI-Powered Financial Intelligence",
    description: "The utilitarian choice for privacy-conscious investors with on-device LLMs.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://temporal.khatriutsav.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Temporal",
  "operatingSystem": "Android",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "49.00",
    "priceCurrency": "INR"
  },
  "description": "A high-performance offline ledger and investment portfolio tracker with on-device AI intelligence.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120"
  }
};

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { ScrollProgress } from "@/components/Layout/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ScrollProgress />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
