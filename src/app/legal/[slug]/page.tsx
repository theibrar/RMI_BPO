import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { legalDocs } from "@/data/legalData";
import { generatePageMetadata } from "@/lib/seo";
import { ShieldCheck, FileText } from "lucide-react";

interface LegalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) {
    return { title: "Document Not Found" };
  }

  return generatePageMetadata({
    title: doc.title,
    description: `Official ${doc.title} for RMI BPO LLC. Updated ${doc.lastUpdated}.`,
    path: `/legal/${slug}`,
    keywords: [doc.title, "RMI BPO LLC legal", "policy", "compliance"],
  });
}

export default async function LegalDocPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const doc = legalDocs[slug];

  if (!doc) {
    notFound();
  }

  const allSlugs = [
    { slug: "privacy", label: "Privacy Policy" },
    { slug: "terms", label: "Terms of Use" },
    { slug: "cookies", label: "Cookie Policy" },
    { slug: "disclaimer", label: "Disclaimer" },
    { slug: "acceptable-use", label: "Acceptable Use" },
    { slug: "gdpr", label: "GDPR Compliance" },
    { slug: "copyright", label: "Copyright Notice" },
    { slug: "accessibility", label: "Accessibility Statement" },
  ];

  return (
    <div className="relative bg-white pt-24 pb-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0a1c42] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Legal</span>
            <span>/</span>
            <span className="text-[#99751c]">{doc.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4 text-[#c59a3f]" />
            <span>Corporate Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1c42] tracking-tight mb-2">
            {doc.title}
          </h1>

          <p className="text-xs text-slate-500 font-medium">
            Last Updated: <span className="text-[#0a1c42] font-semibold">{doc.lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0a1c42] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#c59a3f]" />
              Legal Policies
            </h3>
            <ul className="space-y-1 text-xs">
              {allSlugs.map((item) => {
                const isActive = item.slug === slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/legal/${item.slug}`}
                      className={`block py-2 px-3 rounded-lg font-semibold transition-colors ${
                        isActive
                          ? "bg-[#0a1c42] text-white shadow-xs"
                          : "text-slate-600 hover:text-[#0a1c42] hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Document Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 pb-6 border-b border-slate-100 last:border-b-0">
                <h2 className="text-lg sm:text-xl font-bold text-[#0a1c42]">
                  {section.heading}
                </h2>
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
              <p>
                For questions regarding this policy or our legal terms, contact <strong className="text-[#0a1c42]">RMI BPO LLC</strong> directly at{" "}
                <a href="mailto:info@rmibpo.com" className="text-[#99751c] font-bold hover:underline">
                  info@rmibpo.com
                </a>{" "}
                or write to our corporate headquarters in Kalispell, Montana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
