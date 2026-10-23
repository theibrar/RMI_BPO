import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { comprehensiveFaqs, companyInfo } from "@/data/companyData";
import { generatePageMetadata } from "@/lib/seo";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about RMI BPO LLC: onboarding timelines, pricing models, HIPAA/SOC 2 compliance, and dedicated team structures.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comprehensiveFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="relative bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4 text-[#c59a3f]" />
            <span>Operational Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight mb-6">
            Frequently Asked <span className="text-[#b8860b]">Questions</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our domestic management model, onboarding timeline, pricing, and security protocols.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FaqAccordion />
        </div>
      </section>

      {/* Still Have Questions Box */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1c42] mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-8">
            Can&apos;t find the specific answer you are looking for? Our operations directors in Kalispell, Montana are ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-navy w-full sm:w-auto font-bold">
              <span>Contact Senior Strategist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="btn-outline w-full sm:w-auto font-bold"
            >
              <Phone className="w-4 h-4 text-[#c59a3f]" />
              <span>Call Us: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
