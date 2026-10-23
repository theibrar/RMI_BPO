"use client";

import React, { useState } from "react";
import { comprehensiveFaqs } from "@/data/companyData";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const categories = [
    "All",
    "General & Overview",
    "Partnership & Operations",
    "Security & Compliance",
    "Cost & ROI",
  ];

  const filteredFaqs = comprehensiveFaqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search & Category Filter Controls */}
      <div className="mb-10 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., onboarding, TCPA, HIPAA, pricing)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0a1c42] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
          <p className="text-base font-bold text-[#0a1c42]">No questions matched your search.</p>
          <p className="text-xs mt-1">Try another term or contact our team directly at info@rmibpo.com.</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-[#0a1c42] hover:text-[#99751c] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#0a1c42] text-white"
                        : "bg-slate-100 text-[#0a1c42]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-bold text-[#99751c] uppercase tracking-wider">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
