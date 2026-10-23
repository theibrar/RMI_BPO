import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { companyInfo, coreValues } from "@/data/companyData";
import { generatePageMetadata } from "@/lib/seo";
import {
  ShieldCheck,
  Award,
  Users,
  MapPin,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Building2,
  Clock,
  Lock,
  Headphones,
  Check,
  Target,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us | Domestic BPO Leadership & Montana Operations",
  description:
    "Discover RMI BPO LLC: a premier domestic business process outsourcing partner headquartered in Kalispell, Montana. Specialized in process, focused on measurable enterprise results.",
  path: "/about",
});

export default function AboutPage() {
  const valueIconMap: Record<string, React.ReactNode> = {
    "Integrity First": <ShieldCheck className="w-5 h-5 text-[#0a1c42]" />,
    "Innovation Driven": <Zap className="w-5 h-5 text-[#0a1c42]" />,
    "Domestic & Global Synergy": <Building2 className="w-5 h-5 text-[#0a1c42]" />,
    "Measurable Results": <TrendingUp className="w-5 h-5 text-[#0a1c42]" />,
  };

  const operationalPillars = [
    {
      title: "Process Precision",
      tagline: "Standardized Execution",
      desc: "Every campaign is mapped to strict Standard Operating Procedures (SOPs), weekly speech calibration loops, and multi-tier QA oversight to ensure zero operational deviation.",
      icon: <FileCheck className="w-5 h-5 text-[#b8860b]" />,
      stats: "99.8% QA Adherence",
    },
    {
      title: "Measurable Results",
      tagline: "Revenue & Efficiency",
      desc: "We align directly with your commercial targets—whether increasing sales conversion by 40%+, slashing acquisition costs, or maintaining a sub-15s speed-to-lead response time.",
      icon: <TrendingUp className="w-5 h-5 text-[#b8860b]" />,
      stats: "+40% Avg Conversion Lift",
    },
    {
      title: "Ironclad Compliance",
      tagline: "US Legal Enforceability",
      desc: "Operating from Montana under United States jurisdiction, your customer data, intellectual property, and proprietary workflows are fully protected under enforceable US commercial NDAs.",
      icon: <Lock className="w-5 h-5 text-[#b8860b]" />,
      stats: "HIPAA & SOC 2 Ready",
    },
  ];

  const deliveryPods = [
    {
      name: "Inbound & Outbound Sales Pods",
      desc: "High-velocity sales development representatives (SDRs) and account executives trained to qualify, overcome objections, and close deals.",
      metric: "40%+ Conversion Lift",
      focus: "Cold Outbound • Inbound Acceleration • Lead Qualification",
    },
    {
      name: "Omnichannel Customer Success Pods",
      desc: "24/7/365 live chat, voice, and ticket support specialists delivering empathetic, rapid-response issue resolution.",
      metric: "99.1% CSAT Score",
      focus: "24/7 Voice & Chat • Tier 1-3 Support • Retention Management",
    },
    {
      name: "Secure Back-Office & Data Pods",
      desc: "HIPAA-certified operations teams handling document verification, medical billing, database scrubbing, and order processing.",
      metric: "99.8% Data Accuracy",
      focus: "Data Cleansing • Medical Billing • Underwriting Support",
    },
    {
      name: "Performance Digital Growth Pods",
      desc: "Media buyers, conversion rate optimization (CRO) engineers, and SEO specialists scaling your digital customer acquisition funnels.",
      metric: "4.8x Avg ROAS",
      focus: "Paid Media • Search Engine Optimization • Lifecycle Email/SMS",
    },
  ];

  return (
    <div className="relative bg-white pt-24 pb-20">
      {/* ========================================================
          1. HERO SECTION (Executive Headline + Montana HQ Showcase)
         ======================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider mb-6 sm:mb-8 text-center max-w-full">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b8860b] shrink-0" />
            <span>Institutional Excellence • Kalispell, Montana Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto">
            Architecting High-Performance Business Operations for{" "}
            <span className="text-[#b8860b]">Global Scale</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            RMI BPO LLC bridges domestic leadership oversight with elite multi-discipline execution pods. Headquartered in Montana, we deliver measurable pipeline growth, 24/7 customer care, and ironclad legal compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700 mb-14">
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <MapPin className="w-4 h-4 text-[#b8860b]" />
              Kalispell, MT Headquarters
            </span>
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#b8860b]" />
              HIPAA &amp; SOC 2 Ready
            </span>
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-200 shadow-xs">
              <Clock className="w-4 h-4 text-[#b8860b]" />
              24/7/365 Real-Time Coverage
            </span>
          </div>

          {/* Hero Image Showcase: Montana Executive Operations Center */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl max-w-5xl mx-auto bg-slate-100">
            <div className="relative aspect-video w-full">
              <Image
                src="/assets/about/montana-hq.jpg"
                alt="RMI BPO LLC Montana Executive Headquarters and Boardroom"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1152px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c42]/85 via-transparent to-transparent flex items-end p-6 sm:p-10">
                <div className="text-left text-white max-w-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-slate-200 mb-2 border border-white/30">
                    Executive Operations Center
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    Domestic Governance in Kalispell, Montana
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 hidden sm:block">
                    Every operational SLA, client integration, and agent calibration is directly supervised under United States commercial jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            {/* Stat Bar under Hero Image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-white divide-x divide-y sm:divide-y-0 divide-slate-100 p-4 sm:p-6 text-center">
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#0a1c42]">500+</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Enterprise Deployments
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#0a1c42]">99.1%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Client Retention
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#b8860b]">15s</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  Avg Inbound Response
                </div>
              </div>
              <div className="p-2 sm:p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#0a1c42]">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                  US Legal Governance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE DOMESTIC BPO ADVANTAGE (Editorial Split with Operations Photo)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#b8860b]" />
                <span>Why We Built in Montana</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
                The Domestic Advantage: Why Location &amp; Legal Jurisdiction Matter
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Traditional outsourcing models frequently suffer from three fundamental flaws: overseas legal ambiguity, rigid agents who cannot adapt to complex American consumer sentiment, and significant timezone disconnects.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                RMI BPO LLC was founded to solve these issues. Headquartered in Kalispell, Montana, our domestic executive directors oversee every project directly. We guarantee that your company contracts, commercial non-disclosure agreements, and sensitive consumer data remain anchored under enforceable United States federal and state commercial laws.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b8860b]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-[#0a1c42]">Enforceable Commercial NDAs:</strong> Complete legal clarity under United States business jurisdiction.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b8860b]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-[#0a1c42]">Same-Timezone Executive Access:</strong> Real-time Slack channels and direct access to leadership across US business hours.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#b8860b]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-[#0a1c42]">Continuous Quality Calibration:</strong> Weekly speech analytics and QA reviews conducted by domestic management.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photo Feature: Operations Center */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/assets/about/operations-center.jpg"
                    alt="RMI BPO LLC Quality Calibration and Operations Floor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-white border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#99751c]">
                      Quality Calibration Center
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[11px] font-bold text-[#b8860b]">
                      Active Monitoring
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1c42]">
                    Precision Operations with Real-Time Telemetry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Continuous speech calibration, queue health tracking, and sentiment analytics loop directly back to internal client reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR CORE OPERATIONAL PILLARS (3 Cards)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Operating Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
              Specialized in Process, <span className="text-[#b8860b]">Focused on Results</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Our foundational framework ensures consistency, accountability, and compounded returns across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operationalPillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#fcf8ee] group-hover:border-[#b8860b] transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#99751c] block mb-1">
                    {p.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-[#0a1c42] mb-3 group-hover:text-[#b8860b] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Verified Standard</span>
                  <strong className="text-[#0a1c42] font-bold">{p.stats}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE HYBRID ENTERPRISE POD ARCHITECTURE (Split with Consultation Photo)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo Feature: Executive Consultation */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/assets/about/executive-consultation.jpg"
                    alt="RMI BPO LLC Executive Strategic Client Consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-white border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#99751c]">
                      Bespoke Pod Assembly
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[11px] font-bold text-[#b8860b]">
                      14-Day Deployment
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1c42]">
                    Dedicated Executive Consultation &amp; SLA Design
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every client pod is hand-selected, background-verified, and immersed in your brand voice before the first call is taken.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Delivery Pods Details */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#b8860b]" />
                <span>Turnkey Pod Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
                Turnkey Execution Teams Engineered Around Your Systems
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than treating outsourcing as transactional seat-filling, RMI BPO LLC builds dedicated pods: self-contained operational units staffed with specialized talent, an embedded Team Lead, and dedicated QA supervision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {deliveryPods.map((pod) => (
                  <div
                    key={pod.name}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#e8d5a3] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#0a1c42]">
                        {pod.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {pod.desc}
                    </p>
                    <div className="text-[11px] font-bold text-[#99751c]">
                      Target Benchmark: {pod.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. INSTITUTIONAL VALUES (4-Card Grid)
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3.5 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
              Corporate Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight">
              The Principles That Guide Every Calibration
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The institutional values embedded into our hiring rubrics, daily workflows, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#fcf8ee] group-hover:border-[#b8860b] transition-colors">
                    {valueIconMap[v.title] || <Sparkles className="w-5 h-5 text-[#0a1c42]" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1c42] mb-2 group-hover:text-[#99751c] transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs text-[#99751c] font-bold">
                  <span>Standard of Practice</span>
                  <Check className="w-3.5 h-3.5 ml-1 text-[#b8860b]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. EXECUTIVE CONSULTATION INVITATION
         ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-[#b8860b]" />
            <span>Direct Access to Leadership</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1c42] tracking-tight mb-4">
            Ready to Explore a Tailored Operational Pod?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Speak directly with our senior operations architects in Kalispell, Montana. We will review your current software stack, model SLA benchmarks, and provide a clear proposal within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-navy w-full sm:w-auto text-sm px-8 py-3.5 font-bold"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="btn-outline w-full sm:w-auto text-sm px-7 py-3.5 font-bold"
            >
              <Headphones className="w-4 h-4 text-[#b8860b]" />
              <span>Direct: {companyInfo.phone}</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-500">
            Headquartered in Kalispell, Montana • United States Commercial Jurisdiction • Strict NDA Protection
          </div>
        </div>
      </section>
    </div>
  );
}
