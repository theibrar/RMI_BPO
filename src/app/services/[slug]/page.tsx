import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { companyInfo } from "@/data/companyData";
import { generatePageMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Clock,
  HelpCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);
  if (!svc) {
    return { title: "Service Not Found" };
  }

  return generatePageMetadata({
    title: svc.title,
    description: svc.shortDesc,
    path: `/services/${svc.slug}`,
    keywords: [
      svc.title,
      svc.shortTitle,
      "RMI BPO LLC service",
      "domestic BPO",
      "business outsourcing",
    ],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);

  if (!svc) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    provider: {
      "@type": "Organization",
      name: companyInfo.name,
      url: "https://rmibpo.com",
    },
    description: svc.shortDesc,
    areaServed: "United States, Canada, Global",
    serviceType: svc.shortTitle,
  };

  return (
    <div className="relative bg-white pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ========================================================
          1. SERVICE HERO SECTION (Clean White Background)
         ======================================================== */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#0a1c42] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0a1c42] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#99751c]">{svc.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4 text-[#c59a3f]" />
                <span>{svc.badge} • Enterprise Execution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight leading-[1.15] mb-6">
                {svc.title}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {svc.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
                <a href="#consultation" className="btn-navy font-bold text-center justify-center">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#deliverables" className="btn-outline font-semibold text-center justify-center">
                  <span>View Scope &amp; Deliverables</span>
                </a>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
                {svc.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs"
                  >
                    <div className="text-2xl font-black text-[#0a1c42]">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <Image
                  src={svc.heroImage}
                  alt={svc.title}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#99751c] block">
                      Rapid Go-Live
                    </span>
                    <span className="text-xs text-[#0a1c42] font-bold">
                      10 to 21 Business Days
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#fcf8ee] text-[#99751c] border border-[#c59a3f]/40 text-xs font-bold">
                    Active Deployment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE COMPETENCIES
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 inline-block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
              Strategic <span className="text-[#99751c]">Competencies</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Engineered for high conversion, operational precision, and brand alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.coreCompetencies.map((comp) => (
              <div
                key={comp.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0a1c42] mb-4">
                    <TrendingUp className="w-5 h-5 text-[#0a1c42]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0a1c42] mb-2">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SCOPE OF DELIVERABLES & WHY CHOOSE US
         ======================================================== */}
      <section id="deliverables" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Deliverables Checklist */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-2">
                Scope of Work
              </span>
              <h3 className="text-2xl font-bold text-[#0a1c42] mb-6">
                Turnkey Deliverables &amp; Infrastructure
              </h3>
              <ul className="space-y-4">
                {svc.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#c59a3f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0a1c42]" />
                  SOC 2 &amp; HIPAA Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0a1c42]" />
                  24/7 Domestic Telemetry
                </span>
              </div>
            </div>

            {/* Why Partner with RMI */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-2">
                  Institutional Edge
                </span>
                <h3 className="text-2xl font-bold text-[#0a1c42]">
                  Why Outsource {svc.shortTitle} to RMI BPO LLC
                </h3>
              </div>

              <div className="space-y-4">
                {svc.whyChooseUs.map((why) => (
                  <div
                    key={why.title}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <h4 className="text-base font-bold text-[#0a1c42] mb-1.5">
                      {why.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {why.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SERVICE FAQS
         ======================================================== */}
      {svc.faqs && svc.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-2">
                Clarifications
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1c42]">
                Frequently Asked Questions About {svc.shortTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {svc.faqs.map((f) => (
                <div
                  key={f.question}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs"
                >
                  <h4 className="text-base font-bold text-[#0a1c42] mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#c59a3f] shrink-0" />
                    <span>{f.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {f.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          5. DIRECT SERVICE CONSULTATION FORM
         ======================================================== */}
      <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ContactForm prefilledService={svc.slug} />
        </div>
      </section>
    </div>
  );
}
