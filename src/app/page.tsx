import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import {
  companyInfo,
  coreValues,
  processSteps,
  industriesServed,
  clientTestimonials,
} from "@/data/companyData";
import RoiCalculator from "@/components/RoiCalculator";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  BarChart3,
  Users,
  Clock,
  Award,
  ChevronRight,
  TrendingUp,
  Headphones,
  Star,
  Lock,
  Building2,
  Zap,
  Check,
  X,
  FileCheck,
} from "lucide-react";

export default function HomePage() {
  const valueIconMap: Record<string, React.ReactNode> = {
    "Integrity First": <ShieldCheck className="w-5 h-5 text-[#0a1c42]" />,
    "Innovation Driven": <Zap className="w-5 h-5 text-[#0a1c42]" />,
    "Domestic & Global Synergy": <Building2 className="w-5 h-5 text-[#0a1c42]" />,
    "Measurable Results": <TrendingUp className="w-5 h-5 text-[#0a1c42]" />,
  };

  const comparisonRows = [
    {
      feature: "Executive Management & SLA Oversight",
      rmi: "Domestic US Leadership (Kalispell, Montana)",
      traditional: "Offshore Call Centers with Remote Layers",
    },
    {
      feature: "Legal Compliance & NDA Enforceability",
      rmi: "US Jurisdiction, HIPAA Certified & SOC 2 Ready",
      traditional: "Cross-Border Legal Exposure & Fragmented Audits",
    },
    {
      feature: "Agent Quality & Speech Calibration",
      rmi: "Native Fluency & Weekly Speech Calibration Loops",
      traditional: "Script-Rigid Agents with High Attrition",
    },
    {
      feature: "Timezone Alignment & Availability",
      rmi: "24/7/365 Real-Time Coverage Across All US Zones",
      traditional: "Unfavorable Timezone Delays & Hand-Off Lag",
    },
    {
      feature: "Pricing & Operational Efficiency",
      rmi: "Save up to 55% with Full Domestic Pod Accountability",
      traditional: "Hidden Telephony Fees & Frequent Retraining Costs",
    },
  ];

  return (
    <div className="relative bg-white pt-24">
      {/* ========================================================
          1. HERO SECTION (Crisp White Executive Canvas)
         ======================================================== */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider mb-6 sm:mb-8 text-center max-w-full">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b8860b] shrink-0" />
            <span>Domestic BPO Partner • Kalispell, MT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#0a1c42] tracking-tight leading-[1.18] sm:leading-[1.14] mb-4 sm:mb-6 max-w-4xl mx-auto">
            Your Growth Partner for{" "}
            <span className="text-[#b8860b]">
              Global Business Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed font-normal">
            Scaling enterprise operations through high-conversion inbound &amp; outbound sales, 24/7 customer support, performance marketing, and HIPAA-compliant back-office execution.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="btn-navy w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 font-bold"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="btn-outline w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 font-semibold"
            >
              <span>Explore Tailored Solutions</span>
            </Link>
          </div>

          {/* Key Metric Ticker Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-slate-200">
            <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#0a1c42]">
                500+
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                Projects Delivered
              </div>
            </div>
            <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#0a1c42]">
                98%
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>
            <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#0a1c42]">
                24/7/365
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                Availability
              </div>
            </div>
            <div className="p-3 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-2xl sm:text-4xl font-extrabold text-[#b8860b]">
                55%
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                Overhead Slashed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPLIANCE & SECURITY MARQUEE
         ======================================================== */}
      <section className="py-4 bg-[#f8fafc] border-b border-slate-200 text-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
              <span>HIPAA Certified Healthcare Safeguards</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#b8860b]" />
              <span>SOC 2 Type II Encrypted Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b8860b]" />
              <span>TCPA &amp; National DNC Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
              <span>GDPR International Privacy Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THE RMI FOUNDATION (Core Values)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Institutional Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
              The <span className="text-[#b8860b]">RMI Foundation</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Built on uncompromising principles that safeguard compliance, drive measurable revenue, and foster long-term enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="pro-card-gold-top p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#fcf8ee] group-hover:border-[#b8860b] transition-colors">
                    {valueIconMap[val.title] || <Sparkles className="w-5 h-5 text-[#0a1c42]" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1c42] mb-2 group-hover:text-[#99751c] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs text-[#99751c] font-bold">
                  <span>Standard of Practice</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. 4-STEP FRAMEWORK
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
              Our Strategy for <span className="text-[#b8860b]">Sustainable Scale</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              A systematic 4-step framework engineered to ensure frictionless onboarding and maximum operational ROI from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="pro-card p-7 bg-white relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-md bg-[#0a1c42] text-white font-extrabold text-sm flex items-center justify-center">
                    {step.step}
                  </div>
                  <span className="text-3xl font-black text-slate-200 select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1c42] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SERVICES SHOWCASE (Tailored Solutions)
         ======================================================== */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Tailored Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
              Comprehensive <span className="text-[#b8860b]">Outsourcing Capabilities</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Whether you need high-conversion outbound sales, 24/7 technical live chat, or full-funnel digital marketing, we deliver dedicated talent and rigorous domestic management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((svc) => (
              <div
                key={svc.slug}
                className="pro-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={svc.heroImage}
                      alt={svc.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-[#0a1c42] text-[11px] font-bold shadow-xs">
                      {svc.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0a1c42] mb-2 group-hover:text-[#99751c] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    {svc.metrics?.[0] && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4 font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-[#b8860b]" />
                        <span>
                          <strong className="text-[#0a1c42]">{svc.metrics[0].value}</strong> {svc.metrics[0].label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs sm:text-sm font-bold text-[#0a1c42] hover:text-[#99751c] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Full Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/contact?service=${svc.slug}`}
                    className="text-xs text-slate-500 hover:text-[#0a1c42] font-semibold"
                  >
                    Request Pod
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. ENTERPRISE COMPARISON TABLE (High-End Professional Touch)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
              Domestic BPO vs. Commodity Offshore
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Why fast-growing US enterprises choose our Kalispell, Montana-managed operational infrastructure.
            </p>
          </div>

          {/* Mobile Card Stack (< sm) */}
          <div className="sm:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-3"
              >
                <div className="font-bold text-sm text-[#0a1c42] border-b border-slate-100 pb-2">
                  {row.feature}
                </div>
                <div className="p-3 rounded-lg bg-[#fcf8ee] border border-[#e8d5a3] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#99751c] block">
                      RMI BPO LLC (Domestic)
                    </span>
                    <span className="text-xs font-semibold text-[#0a1c42]">
                      {row.rmi}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Generic Commodity Centers
                    </span>
                    <span className="text-xs text-slate-600">
                      {row.traditional}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Table (sm+) */}
          <div className="hidden sm:block bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-100 p-4 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
              <div className="col-span-4">Strategic Operational Pillar</div>
              <div className="col-span-4 text-[#0a1c42]">RMI BPO LLC (Domestic Partner)</div>
              <div className="col-span-4 text-slate-500">Generic Commodity Centers</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-12 p-4 items-center">
                  <div className="col-span-4 font-bold text-[#0a1c42] pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-[#0a1c42] font-semibold flex items-center gap-2 pr-2">
                    <Check className="w-4 h-4 text-[#b8860b] shrink-0" />
                    <span>{row.rmi}</span>
                  </div>
                  <div className="col-span-4 text-slate-500 flex items-center gap-2">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. INDUSTRIES WE EMPOWER
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Sector Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
              Industries We <span className="text-[#b8860b]">Empower</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Deep vertical expertise delivering HIPAA-compliant healthcare support, high-velocity e-commerce engagement, and secure financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industriesServed.map((ind) => (
              <div
                key={ind.title}
                className="pro-card overflow-hidden bg-white"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#0a1c42] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                    {ind.stat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1c42] mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {ind.desc}
                  </p>
                  <ul className="space-y-2 text-xs font-medium text-slate-700">
                    {ind.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#b8860b]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. ROI CALCULATOR COMPONENT
         ======================================================== */}
      <RoiCalculator />

      {/* ========================================================
          9. CLIENT TESTIMONIALS
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
              Trusted by <span className="text-[#b8860b]">High-Growth Leaders</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Read how our domestic BPO frameworks deliver measurable conversion lifts and bulletproof operational reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTestimonials.map((t) => (
              <div
                key={t.author}
                className="pro-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#b8860b] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#b8860b]" />
                    ))}
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#fcf8ee] text-[#99751c] border border-[#e8d5a3] text-[11px] font-bold mb-4">
                    {t.metric}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-[#0a1c42] text-sm">{t.author}</div>
                  <div className="text-xs text-[#99751c] font-semibold">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
