import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { generatePageMetadata } from "@/lib/seo";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Outsourcing Services & Solutions",
  description:
    "Explore RMI BPO LLC's full suite of domestic and global business process outsourcing services: sales, 24/7 live chat, digital marketing, SEO, web dev, and back-office.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="relative bg-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#c59a3f]" />
            <span>Turnkey BPO Infrastructure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight mb-6">
            Enterprise Services &amp; <span className="text-[#b8860b]">Execution Pods</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From high-conversion sales teams to HIPAA-compliant back-office operations, RMI BPO LLC delivers dedicated professionals supervised by domestic leaders in Montana.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={svc.heroImage}
                    alt={svc.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-[#0a1c42] text-[11px] font-bold shadow-xs">
                    {svc.badge}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#0a1c42] mb-2 group-hover:text-[#99751c] transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  {svc.metrics?.[0] && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4 font-medium">
                      <TrendingUp className="w-4 h-4 text-[#c59a3f]" />
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
                  className="text-sm font-bold text-[#0a1c42] hover:text-[#99751c] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
      </section>
    </div>
  );
}
