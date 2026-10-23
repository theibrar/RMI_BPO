import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/companyData";
import { getOrganizationJsonLd, getLocalBusinessJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0a1c42",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${companyInfo.name}`,
    default: `${companyInfo.name} | ${companyInfo.tagline} | Inbound & Outbound Sales`,
  },
  description:
    "RMI BPO LLC provides premier business process outsourcing, inbound & outbound sales, live chat, digital marketing, SEO, and web development. Domestic BPO partner specialized in process, focused on results.",
  keywords: [
    "RMI BPO LLC",
    "RMI BPO",
    "domestic BPO partner",
    "business process outsourcing",
    "inbound sales outsourcing",
    "outbound call center",
    "live chat support",
    "digital marketing",
    "SEO services",
    "back office outsourcing",
    "Kalispell Montana BPO",
    "HIPAA compliant call center",
    "SOC 2 BPO",
  ],
  authors: [{ name: companyInfo.name, url: "https://rmibpo.com" }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL("https://rmibpo.com"),
  alternates: {
    canonical: "https://rmibpo.com",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rmibpo.com",
    title: `${companyInfo.name} | Excellence in Business Process Outsourcing`,
    description:
      "Scale your enterprise through innovative BPO solutions, data-driven marketing, and elite domestic & global customer support.",
    siteName: companyInfo.name,
    images: [
      {
        url: "/assets/logo-badge.jpg",
        width: 1024,
        height: 1024,
        alt: `${companyInfo.name} - ${companyInfo.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} | Excellence in Business Process Outsourcing`,
    description:
      "Scale your business through innovative BPO solutions, data-driven marketing, and exceptional customer support.",
    images: ["/assets/logo-badge.jpg"],
    creator: "@rmibpo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationJsonLd();
  const localBusinessSchema = getLocalBusinessJsonLd();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${cinzel.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
