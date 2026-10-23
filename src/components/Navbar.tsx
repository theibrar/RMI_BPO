"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { servicesData } from "@/data/servicesData";
import { companyInfo } from "@/data/companyData";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  MessageSquare,
  BarChart3,
  Search,
  Share2,
  Globe,
  Shield,
  ArrowRight,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const serviceIconMap: Record<string, React.ReactNode> = {
    "inbound-outbound": <PhoneCall className="w-4 h-4 text-[#0a1c42]" />,
    "live-chat": <MessageSquare className="w-4 h-4 text-[#0a1c42]" />,
    "digital-marketing": <BarChart3 className="w-4 h-4 text-[#0a1c42]" />,
    seo: <Search className="w-4 h-4 text-[#0a1c42]" />,
    "social-media": <Share2 className="w-4 h-4 text-[#0a1c42]" />,
    "web-dev": <Globe className="w-4 h-4 text-[#0a1c42]" />,
    "back-office": <Shield className="w-4 h-4 text-[#0a1c42]" />,
    "enterprise-pods": <Users className="w-4 h-4 text-[#0a1c42]" />,
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Utility Bar */}
      <div className="bg-[#0a1c42] text-xs text-slate-200 py-1.5 px-4 hidden md:block border-b border-[#061129]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]"></span>
              <span className="text-white font-semibold">Domestic BPO Partner:</span> Specialized in Process, Focused on Results.
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#b8860b]" />
              Kalispell, MT
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#b8860b]" />
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#b8860b]" />
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-150 px-3 sm:px-6 lg:px-8 bg-white border-b ${
          isScrolled ? "py-2 shadow-xs border-slate-200" : "py-2.5 sm:py-3 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <BrandLogo variant="header" theme="light" className="shrink-0" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
            <Link
              href="/"
              className={`text-xs xl:text-sm font-semibold transition-colors shrink-0 ${
                pathname === "/" ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer shrink-0 ${
                  pathname.startsWith("/services") ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-150 ${
                    servicesDropdownOpen ? "rotate-180 text-[#0a1c42]" : ""
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px] max-w-[95vw] animate-in fade-in zoom-in-95 duration-100 z-50">
                  <div className="bg-white rounded-xl p-3.5 shadow-2xl border border-slate-200 grid grid-cols-2 gap-2">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#fcf8ee] border border-transparent hover:border-[#e8d5a3] transition-all group"
                      >
                        <div className="p-2 rounded-md bg-slate-100 border border-slate-200 group-hover:bg-white group-hover:border-[#b8860b] transition-all shrink-0">
                          {serviceIconMap[svc.slug] || <Sparkles className="w-4 h-4 text-[#0a1c42]" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#0a1c42] group-hover:text-[#b8860b] transition-colors truncate">
                            {svc.shortTitle}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{svc.subtitle}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
                      <span className="font-medium text-slate-600">Need a bespoke domestic or global hybrid setup?</span>
                      <Link
                        href="/contact"
                        className="text-[#b8860b] hover:text-[#0a1c42] font-bold flex items-center gap-1 transition-colors"
                      >
                        Request Enterprise Proposal <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`text-xs xl:text-sm font-semibold transition-colors shrink-0 ${
                pathname === "/about" ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
              }`}
            >
              About
            </Link>

            <Link
              href="/testimonials"
              className={`text-xs xl:text-sm font-semibold transition-colors shrink-0 ${
                pathname === "/testimonials" ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/faq"
              className={`text-xs xl:text-sm font-semibold transition-colors shrink-0 ${
                pathname === "/faq" ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`text-xs xl:text-sm font-semibold transition-colors shrink-0 ${
                pathname === "/contact" ? "text-[#0a1c42] font-bold" : "text-slate-600 hover:text-[#0a1c42]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="text-xs font-bold text-[#0a1c42] flex items-center gap-1.5 py-2 px-2 xl:px-3 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#b8860b] shrink-0" />
              <span className="hidden xl:inline">{companyInfo.phone}</span>
            </a>
            <Link href="/contact" className="btn-navy text-xs py-2 px-3 xl:px-4 shrink-0 whitespace-nowrap">
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/contact"
              className="btn-navy text-[11px] sm:text-xs py-1.5 px-2.5 sm:px-3 shrink-0 whitespace-nowrap"
            >
              <span>Demo</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-100 text-[#0a1c42] border border-slate-300 focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-5 pt-3 border-t border-slate-200 bg-white rounded-xl shadow-lg px-4">
            <div className="flex flex-col gap-1.5">
              <Link
                href="/"
                className="py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm"
              >
                Home
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesDropdownOpen ? "rotate-180 text-[#0a1c42]" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="ml-4 pl-3 border-l-2 border-[#b8860b] mt-1 flex flex-col gap-1 py-1">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="py-1 text-xs text-slate-700 hover:text-[#0a1c42] font-medium"
                      >
                        {svc.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm"
              >
                About Us
              </Link>
              <Link
                href="/testimonials"
                className="py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm"
              >
                Case Studies
              </Link>
              <Link
                href="/faq"
                className="py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold text-sm"
              >
                Contact
              </Link>

              <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-center gap-2 text-[#0a1c42] font-bold py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#b8860b]" />
                  <span>Call Us: {companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-[#0a1c42] font-semibold py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#b8860b]" />
                  <span>{companyInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
