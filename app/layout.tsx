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
  title: "Temporal | Local-First Wealth Tracker & Portfolio Manager",
  description:
    "Master your net worth with Temporal. A privacy-focused, local-first personal finance app 2026. Zero cloud dependencies, 100% data sovereignty. Track Stocks, Mutual Funds, and Hard Assets securely.",
  keywords: ["local-first finance", "privacy wealth tracker", "net worth app 2026", "offline investment tracker", "secure portfolio manager", "data sovereignty"],
  authors: [{ name: "Temporal Team" }],
  openGraph: {
    title: "Temporal | Local-First Wealth Tracker",
    description: "Total control over your financial data. Secure, offline, and utilitarian wealth tracking.",
    url: "http://temporal.khatriutsav.com",
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
    title: "Temporal | Local-First Wealth Tracker",
    description: "The utilitarian choice for privacy-conscious investors.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "http://temporal.khatriutsav.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Temporal",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A comprehensive local-first personal finance and investment tracking application.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120"
  }
};

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

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
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
