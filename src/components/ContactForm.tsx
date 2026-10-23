"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

function ContactFormInner({ prefilledService = "" }: { prefilledService?: string }) {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams ? searchParams.get("service") || prefilledService : prefilledService;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: serviceFromQuery || "inbound-outbound",
    headcount: "1-5 Agents",
    message: "",
    tcpaConsent: true,
  });

  useEffect(() => {
    if (serviceFromQuery) {
      setFormData((prev) => ({ ...prev, service: serviceFromQuery }));
    }
  }, [serviceFromQuery]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tcpaConsent) {
      alert("Please accept the terms and consent to continue.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error ||
            "Unable to submit request. Please try again or call us directly at (323) 999-2139."
        );
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please call (323) 999-2139."
      );
    }
  };

  return (
    <div className="relative">
      {status === "success" ? (
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-[#b8860b] text-center shadow-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-[#fcf8ee] border border-[#b8860b] text-[#b8860b] flex items-center justify-center mx-auto mb-5 shadow-sm">
            <CheckCircle2 className="w-9 h-9 text-[#b8860b]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#99751c] px-3 py-1 rounded-full bg-[#fcf8ee] border border-[#e8d5a3] inline-block mb-3">
            Inquiry Received Successfully
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1c42] mb-3">
            Thank You, {formData.firstName}!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Your demonstration and proposal request has been routed to our senior account director in Kalispell, Montana. We will review your goals and reach out within 2 business hours.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto mb-8 text-left text-xs text-slate-700 space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500 font-medium">Company:</span>
              <span className="font-bold text-[#0a1c42]">{formData.company}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500 font-medium">Service Category:</span>
              <span className="font-bold text-[#99751c]">{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Priority Callback:</span>
              <span className="font-bold text-[#0a1c42]">{formData.phone}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                firstName: "",
                lastName: "",
                company: "",
                email: "",
                phone: "",
                service: "inbound-outbound",
                headcount: "1-5 Agents",
                message: "",
                tcpaConsent: true,
              });
            }}
            className="btn-outline text-xs font-bold"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#0a1c42] tracking-tight">
              Request Your Strategic Consultation &amp; Demo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak directly with an enterprise outsourcing architect. No high-pressure sales, just clear strategy.
            </p>
          </div>

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                First Name <span className="text-[#c59a3f]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                Last Name <span className="text-[#c59a3f]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              />
            </div>
          </div>

          {/* Company & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                Business / Company Name <span className="text-[#c59a3f]">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Global Inc."
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                Corporate Email <span className="text-[#c59a3f]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@acmeglobal.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              />
            </div>
          </div>

          {/* Phone & Service Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                Direct Phone Number <span className="text-[#c59a3f]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
                Primary Service Discipline
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm"
              >
                <option value="inbound-outbound">Inbound &amp; Outbound Sales</option>
                <option value="live-chat">Live Chat Support</option>
                <option value="digital-marketing">Digital Marketing &amp; Paid Media</option>
                <option value="seo">SEO Optimization</option>
                <option value="social-media">Social Media Management</option>
                <option value="web-dev">Web Development &amp; Engineering</option>
                <option value="back-office">Back Office &amp; Data Operations</option>
                <option value="custom-hybrid">Custom Multi-Discipline Pod</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label className="block text-xs font-bold text-[#0a1c42] mb-1.5">
              Project Brief / Operational Goals (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your target volume, current software stack, and ideal launch timeline..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0a1c42] focus:ring-1 focus:ring-[#0a1c42] text-sm resize-none"
            ></textarea>
          </div>

          {/* TCPA Consent */}
          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              id="tcpaConsent"
              name="tcpaConsent"
              checked={formData.tcpaConsent}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0a1c42] focus:ring-[#0a1c42] accent-[#0a1c42]"
            />
            <label htmlFor="tcpaConsent" className="text-[11px] text-slate-500 leading-normal">
              By clicking Schedule Demo or entering your information, you consent for RMI BPO LLC and its affiliate service partners to use automated technology, including texts, phone calls, prerecorded messages, or emails, to contact you at the number and email provided regarding operational services and proposals. Consent is not required to make a purchase.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full btn-navy py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#c59a3f]" />
                <span>Processing Your Request...</span>
              </>
            ) : (
              <>
                <span>Schedule Consultation &amp; Request Demo</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0a1c42]" />
              Strict NDA Protection
            </span>
            <span>•</span>
            <span>Fast 2-Hour Response</span>
            <span>•</span>
            <span>Direct Kalispell, MT Team</span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm({ prefilledService = "" }: { prefilledService?: string }) {
  return (
    <Suspense fallback={<div className="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500">Loading form...</div>}>
      <ContactFormInner prefilledService={prefilledService} />
    </Suspense>
  );
}
