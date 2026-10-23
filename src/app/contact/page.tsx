import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/data/companyData";
import { generatePageMetadata } from "@/lib/seo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Request a Demo & Office Location",
  description:
    "Get in touch with RMI BPO LLC. Request a live demonstration, schedule an operational consultation, or visit our office in Kalispell, Montana.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative bg-white pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#c59a3f]" />
            <span>Direct Access to Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a1c42] tracking-tight mb-4">
            Let&apos;s Build Your <span className="text-[#b8860b]">Growth Engine</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with our domestic leadership team in Kalispell, MT. See live telemetries, review agent profiles, and receive a customized operational proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details & Office Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] block mb-1">
                  Executive Headquarters
                </span>
                <h3 className="text-2xl font-bold text-[#0a1c42]">
                  Corporate Information
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0a1c42] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#c59a3f]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Address</span>
                    <strong className="text-[#0a1c42] text-base">KALISPELL, MT, United States</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Registered Domestic BPO Entity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0a1c42] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#c59a3f]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Direct Phone</span>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="text-[#0a1c42] text-base font-bold hover:text-[#99751c] transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Mon - Fri, 8:00 AM - 6:00 PM MST (Client Desk 24/7)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0a1c42] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#c59a3f]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Email Inquiries</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-[#0a1c42] text-base font-bold hover:text-[#99751c] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Rapid SLA: responses under 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0a1c42] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#c59a3f]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Operational Coverage</span>
                    <strong className="text-[#0a1c42] text-base">24 Hours / 7 Days / 365 Days</strong>
                    <p className="text-xs text-slate-500 mt-0.5">Uninterrupted Global &amp; Domestic Coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 text-xs text-slate-600">
              <h4 className="text-sm font-bold text-[#0a1c42] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#c59a3f]" />
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59a3f]" />
                  <span>A dedicated account director reviews your business profile.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59a3f]" />
                  <span>We conduct a 20-minute operational alignment call.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59a3f]" />
                  <span>You receive a transparent pricing schedule and SLA blueprint.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
