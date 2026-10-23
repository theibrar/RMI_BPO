import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { companyInfo } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const legalLinks = [
    { title: "Privacy Policy", href: "/legal/privacy" },
    { title: "Terms of Use", href: "/legal/terms" },
    { title: "Cookie Policy", href: "/legal/cookies" },
    { title: "Disclaimer", href: "/legal/disclaimer" },
    { title: "Acceptable Use", href: "/legal/acceptable-use" },
    { title: "GDPR Compliance", href: "/legal/gdpr" },
    { title: "Copyright", href: "/legal/copyright" },
    { title: "Accessibility", href: "/legal/accessibility" },
  ];

  return (
    <footer className="relative bg-[#0a1c42] text-slate-200 pt-16 pb-12 border-t-4 border-[#b8860b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Action Banner in White / Warm Card */}
        <div className="bg-white rounded-2xl p-8 mb-16 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-[#0a1c42]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] text-[#99751c] text-xs font-bold mb-3">
              <Award className="w-4 h-4 text-[#b8860b]" />
              <span>Premier Domestic BPO Partner</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1c42] tracking-tight">
              Ready to Accelerate Growth with RMI BPO LLC?
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Partner with experienced sales leaders and dedicated support professionals. Get your tailored operational proposal in under 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link href="/contact" className="btn-navy whitespace-nowrap text-center text-sm font-bold">
              <span>Schedule Strategic Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="btn-outline whitespace-nowrap text-center text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-[#b8860b]" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" theme="dark" className="mb-4" />
            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              RMI BPO LLC delivers domestic and global business process outsourcing excellence. Specialized in process, focused on results. Empowering fast-scaling enterprises with elite sales, 24/7 support, and secure operations.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#12285a] border border-white/10 text-white font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" />
                HIPAA Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#12285a] border border-white/10 text-white font-medium">
                <Lock className="w-3.5 h-3.5 text-[#b8860b]" />
                SOC 2 Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#12285a] border border-white/10 text-white font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b8860b]" />
                TCPA / DNC Safe
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-[#b8860b] pb-1.5 inline-block">
              Outsourcing Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-slate-300 hover:text-[#e8d5a3] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{svc.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-[#b8860b] pb-1.5 inline-block">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  About Us &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  Case Studies &amp; Proof
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  Request a Demo &amp; Quote
                </Link>
              </li>
              <li>
                <Link href="/#roi-calculator" className="text-slate-300 hover:text-[#e8d5a3] transition-colors">
                  ROI Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b-2 border-[#b8860b] pb-1.5 inline-block">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Corporate Presence:</span>
                  <span className="text-slate-300">Kalispell, MT, United States</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Line:</span>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="text-slate-200 hover:text-[#e8d5a3] transition-colors font-semibold"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Email Inquiries:</span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-slate-200 hover:text-[#e8d5a3] transition-colors font-semibold"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#b8860b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Hours:</span>
                  <span className="text-slate-300">24/7/365 Dedicated Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 <strong className="text-white">RMI BPO LLC</strong>. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
            {legalLinks.map((item, idx) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#e8d5a3] transition-colors"
                >
                  {item.title}
                </Link>
                {idx < legalLinks.length - 1 && <span className="text-slate-600">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
