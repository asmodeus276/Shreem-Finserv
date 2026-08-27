"use client";

import React, { useState } from "react";
import { trackApplication, TrackApplicationResult } from "@/lib/firebase";

export const ApplicationTracker: React.FC = () => {
  const [appIdInput, setAppIdInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackApplicationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appIdInput.trim()) {
      setError("Please enter a valid Application ID.");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const res = await trackApplication({ applicationId: appIdInput.trim() });
      setResult(res);
    } catch (err: unknown) {
      console.error("Tracking lookup error:", err);
      setError("Application not found. Please verify the ID or contact support.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
      case "Disbursed":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-300";
      case "Documents Pending":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Under Review":
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <section id="application-tracker" className="py-16 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Search Box */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0B2E8D] text-xs font-bold border border-blue-200">
                <span className="material-symbols-outlined text-[16px]">live_tv</span>
                Real-Time Tracking Portal
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Track Your Loan Application
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Enter your unique tracking ID sent to your mobile or email to check real-time status and next steps.
              </p>

              <form onSubmit={handleTrack} className="pt-2">
                <div className="flex rounded-xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#0B2E8D] focus-within:border-transparent">
                  <div className="pl-4 flex items-center pointer-events-none text-slate-400 bg-white">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input
                    type="text"
                    value={appIdInput}
                    onChange={(e) => setAppIdInput(e.target.value)}
                    placeholder="CC-XXXXXXXX"
                    className="w-full py-3.5 px-3 text-sm font-mono text-slate-900 bg-white focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#001A62] hover:bg-[#0B2E8D] text-white px-6 font-semibold text-sm transition-colors flex items-center justify-center flex-shrink-0"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "Track"
                    )}
                  </button>
                </div>
                {error && <p className="text-xs text-red-600 font-semibold mt-2">{error}</p>}
              </form>
            </div>

            {/* Right Status Card */}
            <div className="lg:col-span-6">
              {result ? (
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#0B2E8D]/10 text-[#0B2E8D] flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Applicant
                        </span>
                        <div className="text-base font-bold text-slate-900">
                          {result.applicantName}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(
                        result.status
                      )}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      {result.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-slate-400 uppercase font-semibold">Application ID</span>
                      <p className="font-mono font-bold text-slate-800 text-sm mt-0.5">
                        {result.applicationId}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-400 uppercase font-semibold">Requested Amount</span>
                      <p className="font-bold text-slate-800 text-sm mt-0.5">
                        ₹ {(result.amount / 100000).toFixed(1)} Lakhs
                      </p>
                    </div>
                  </div>

                  {/* Progress Tracker Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1.5">
                      <span>Applied</span>
                      <span className="text-[#0B2E8D] font-bold">Underwriting</span>
                      <span>Disbursal</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#0B2E8D] h-full w-2/3 rounded-full"></div>
                    </div>
                  </div>

                  {result.remarks && (
                    <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200/80">
                      <strong className="text-slate-800">Status Update:</strong> {result.remarks}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-slate-50 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-400 text-sm">
                  Enter an Application ID to see real-time updates.
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTracker;
