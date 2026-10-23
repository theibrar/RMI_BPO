import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { clientTestimonials, caseStudies } from "@/data/companyData";
import { generatePageMetadata } from "@/lib/seo";
import {
  Star,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies & Client Testimonials",
  description:
    "Explore real-world case studies and verified client testimonials showing how RMI BPO LLC delivers +40% conversion lifts, 99% CSAT, and massive overhead reductions.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <div className="relative bg-white pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-6">
            <Award className="w-4 h-4 text-[#c59a3f]" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight mb-6">
            Real Results for Brands That <span className="text-[#b8860b]">Dared to Scale</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how RMI BPO LLC transforms operations, scales sales conversion, and maintains flawless 24/7 client satisfaction.
          </p>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-2">
              In-Depth Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42]">
              Enterprise Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative h-64 w-full bg-slate-100">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover object-center"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a1c42] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0a1c42] mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-xl font-black text-[#0a1c42]">{m.value}</div>
                          <div className="text-[10px] font-semibold text-slate-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full btn-outline text-xs text-center justify-center py-2.5 font-bold"
                  >
                    <span>Read Full Methodology &amp; Request Similar Pod</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-2">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1c42]">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTestimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#c59a3f]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c59a3f]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#99751c] px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/30">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-base text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#0a1c42] text-base">{t.author}</h4>
                    <span className="text-xs font-semibold text-[#99751c]">{t.role}, {t.company}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1c42] mb-4">
            Want to Be Our Next High-Growth Success Story?
          </h3>
          <p className="text-sm text-slate-600 mb-8">
            Launch a dedicated pilot pod with a 14-day calibration guarantee.
          </p>
          <Link href="/contact" className="btn-navy font-bold">
            <span>Schedule Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
