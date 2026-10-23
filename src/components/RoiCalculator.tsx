"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, DollarSign, TrendingUp, Users, ShieldCheck } from "lucide-react";

export default function RoiCalculator() {
  const [agents, setAgents] = useState(5);
  const [serviceType, setServiceType] = useState<"sales" | "support" | "backoffice">("sales");
  const [inHouseSalary, setInHouseSalary] = useState(4200);

  const rmiRateMap = {
    sales: 1950,
    support: 1750,
    backoffice: 1600,
  };

  const rmiMonthlyPerSeat = rmiRateMap[serviceType];
  const inHouseMonthlyTotal = agents * inHouseSalary;
  const rmiMonthlyTotal = agents * rmiMonthlyPerSeat;
  const monthlySavings = inHouseMonthlyTotal - rmiMonthlyTotal;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / inHouseMonthlyTotal) * 100);

  return (
    <section id="roi-calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fcf8ee] border border-[#c59a3f]/40 text-[#99751c] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-[#c59a3f]" />
            <span>Operational Savings Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1c42] tracking-tight">
            Calculate Your <span className="text-[#99751c]">Outsourcing ROI</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Compare the fully-loaded cost of in-house staffing against RMI BPO LLC&apos;s managed domestic and global execution pods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (Clean White Corporate Card) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-sm font-bold text-[#0a1c42] mb-2.5">
                1. Select Service Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType("sales")}
                  className={`py-2.5 sm:py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                    serviceType === "sales"
                      ? "bg-[#0a1c42] text-white border-[#0a1c42] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Inbound / Outbound Sales
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("support")}
                  className={`py-2.5 sm:py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                    serviceType === "support"
                      ? "bg-[#0a1c42] text-white border-[#0a1c42] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Live Chat &amp; CS Support
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("backoffice")}
                  className={`py-2.5 sm:py-3 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center cursor-pointer ${
                    serviceType === "backoffice"
                      ? "bg-[#0a1c42] text-white border-[#0a1c42] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  Back-Office Operations
                </button>
              </div>
            </div>

            {/* Step 2: Agent Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-[#0a1c42] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#b8860b]" />
                  2. Dedicated Headcount Needed
                </label>
                <span className="text-sm sm:text-base font-extrabold text-[#0a1c42] px-2.5 sm:px-3 py-1 rounded-lg bg-[#fcf8ee] border border-[#e8d5a3]">
                  {agents} {agents === 1 ? "Agent" : "Agents"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={agents}
                onChange={(e) => setAgents(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a1c42]"
              />
              <div className="flex justify-between text-[11px] sm:text-xs text-slate-500 mt-1">
                <span>1 Agent (Pilot)</span>
                <span>25 Agents (Mid)</span>
                <span>50+ Agents (Enterprise)</span>
              </div>
            </div>

            {/* Step 3: In-House Cost Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-[#0a1c42] flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#b8860b]" />
                  3. Loaded Cost Per In-House Employee
                </label>
                <span className="text-sm sm:text-base font-extrabold text-[#0a1c42]">
                  ${inHouseSalary.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="2800"
                max="6500"
                step="100"
                value={inHouseSalary}
                onChange={(e) => setInHouseSalary(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a1c42]"
              />
              <div className="text-[11px] sm:text-xs text-slate-500 mt-1">
                *Includes wages, health benefits, taxes, recruiting, hardware &amp; supervision.
              </div>
            </div>

            {/* Guarantee highlight */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
              <ShieldCheck className="w-5 h-5 text-[#b8860b] shrink-0" />
              <span>
                <strong className="text-[#0a1c42]">100% Turnkey Solution:</strong> RMI BPO LLC handles all recruitment, training, telephony infrastructure, QA monitoring, and domestic supervision.
              </span>
            </div>
          </div>

          {/* Results Summary Box (Deep Navy & Warm Gold Contrast) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-5 sm:p-8 bg-[#0a1c42] text-white border-2 border-[#b8860b] shadow-xl">
              {/* Savings Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b8860b] text-white text-xs font-black uppercase tracking-wider mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Save ~{savingsPercent}% In Overhead</span>
              </div>

              {/* Annual Savings */}
              <div className="mb-6 pb-6 border-b border-white/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Projected Annual Capital Saved
                </span>
                <div className="text-3xl sm:text-5xl font-black text-[#e8d5a3]">
                  ${annualSavings.toLocaleString()}
                </div>
                <span className="text-xs text-slate-300 mt-1 block">
                  That is <strong className="text-white">${monthlySavings.toLocaleString()}</strong> back in your operating budget every single month.
                </span>
              </div>

              {/* Side-by-side breakdown */}
              <div className="space-y-3 mb-8 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Traditional In-House Cost:</span>
                  <span className="line-through text-slate-400 font-semibold">
                    ${inHouseMonthlyTotal.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex justify-between items-center text-white">
                  <span className="font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#b8860b]"></span>
                    RMI BPO LLC Turnkey Cost:
                  </span>
                  <span className="font-bold text-[#e8d5a3] text-sm sm:text-base">
                    ${rmiMonthlyTotal.toLocaleString()} / mo
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/contact?agents=${agents}&service=${serviceType}`}
                className="w-full btn-gold text-center justify-center py-3 text-sm font-bold"
              >
                <span>Lock In Your Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center mt-3">
                <span className="text-[11px] text-slate-300">
                  Zero long-term lock-in • 14-day calibration guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
