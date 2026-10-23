import { Metadata } from "next";
import { companyInfo } from "@/data/companyData";

const siteUrl = "https://rmibpo.com";

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | ${companyInfo.name}`;
  const canonicalUrl = `${siteUrl}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

  const defaultKeywords = [
    "RMI BPO LLC",
    "RMI BPO",
    "domestic BPO partner",
    "business process outsourcing",
    "inbound sales outsourcing",
    "outbound sales outsourcing",
    "live chat customer support",
    "digital marketing agency",
    "SEO optimization services",
    "back office outsourcing",
    "web development Next.js",
    "Kalispell Montana BPO",
    "call center USA",
    "HIPAA compliant BPO",
    "SOC 2 BPO services",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, ...defaultKeywords],
    authors: [{ name: companyInfo.name, url: siteUrl }],
    creator: companyInfo.name,
    publisher: companyInfo.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: companyInfo.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/assets/logo-badge.jpg`,
          width: 1024,
          height: 1024,
          alt: `${companyInfo.name} - ${companyInfo.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/assets/logo-badge.jpg`],
      creator: "@rmibpo",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: siteUrl,
    logo: `${siteUrl}/assets/logo-badge.jpg`,
    description:
      "RMI BPO LLC is your premier domestic BPO partner, specialized in process and focused on results. We provide inbound and outbound sales, live chat, digital marketing, SEO, and secure back-office solutions.",
    slogan: companyInfo.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kalispell",
      addressRegion: "MT",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: ["US", "CA", "GB", "AU"],
        availableLanguage: ["en"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/rmi-bpo",
      "https://twitter.com/rmibpo",
    ],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: companyInfo.name,
    image: `${siteUrl}/assets/logo-badge.jpg`,
    "@id": `${siteUrl}/#business`,
    url: siteUrl,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Corporate Office",
      addressLocality: "Kalispell",
      addressRegion: "MT",
      postalCode: "59901",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}
