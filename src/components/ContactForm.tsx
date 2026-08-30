"use client";

import React, { useState } from "react";

const SUBJECT_OPTIONS = [
  "Loan Enquiry",
  "Existing Application Status",
  "Partnership Enquiry",
  "Complaint / Grievance",
  "Feedback / Suggestion",
  "Career Related",
  "Other",
];

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0]);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage("Please write your message (at least 10 characters).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: cleanPhone,
          subject,
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setTicketId(data.ticketId || "");
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Connection error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setTicketId("");
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject(SUBJECT_OPTIONS[0]);
    setMessage("");
    setErrorMessage(null);
  };

  // ── Success State ──
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 p-8 shadow-xl text-center space-y-6 animate-fade-in-up">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl">mark_email_read</span>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-2">
            Message Received
          </span>
          <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
          <p className="text-slate-600 text-sm mt-1">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
        </div>

        {ticketId && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-500 font-semibold uppercase">
              <span>Ticket Reference</span>
              <span className="text-emerald-600">Active</span>
            </div>
            <div className="text-2xl font-mono font-bold text-[#0B2E8D]">
              {ticketId}
            </div>
            <p className="text-xs text-slate-500">
              Save this reference for any follow-up communication.
            </p>
          </div>
        )}

        <button
          onClick={handleReset}
          className="w-full bg-[#0B2E8D] hover:bg-[#001A62] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm shadow-sm flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">edit_note</span>
          Send Another Message
        </button>
      </div>
    );
  }

  // ── Form State ──
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 interactive-shadow">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B2E8D]">
            Quick Response Channel
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Our team responds within 24 hours — typically much sooner.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-red-700 flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">error</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Ramesh Sharma"
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-semibold">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors"
          >
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your query, concern, or how we can help you..."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0B2E8D] focus:ring-1 focus:ring-[#0B2E8D] transition-colors resize-none"
          />
          <div className="text-right text-[11px] text-slate-400 mt-0.5">
            {message.length} / 1000 characters
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0B2E8D] hover:bg-[#001A62] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm mt-3"
        >
          {loading ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center pt-1">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="underline text-[#0B2E8D] hover:text-[#001A62]">
            Privacy Policy
          </a>
          . We will never share your information with third parties.
        </p>
      </form>
    </div>
  );
}
