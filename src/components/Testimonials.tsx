import React from "react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Dr. Arvind Mukherjee",
      role: "Senior Orthopedic Surgeon, Delhi",
      loanType: "Personal Loan for Doctors",
      amount: "₹45 Lakhs Disbursed",
      content:
        "Setting up my private surgical daycare center required quick, unsecured capital. Shreem Finserv managed the sanction in under 24 hours with preferential interest rates. Remarkable speed and professionalism!",
      rating: 5,
    },
    {
      name: "Meenakshi Sundaram",
      role: "Managing Director, Precision Tech MSME",
      loanType: "Machinery & Equipment Loan",
      amount: "₹1.8 Crore Disbursed",
      content:
        "We needed to import advanced 5-axis CNC machines. The team at Shreem Finserv arranged 90% financing on the proforma invoice with an extended 7-year tenure that kept our cash flow intact.",
      rating: 5,
    },
    {
      name: "Rajesh K. Aggarwal",
      role: "Proprietor, Aggarwal Logistics & Trading",
      loanType: "Loan Against Property (LAP)",
      amount: "₹3.5 Crore Disbursed",
      content:
        "I transferred my high-interest overdraft to a low-cost Loan Against Property. Reduced my monthly interest outflow by 35% and received an additional ₹75 Lakh top-up for warehouse expansion.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
            <span className="material-symbols-outlined text-[16px]">reviews</span>
            Real Stories, Real Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by 15,000+ Professionals & MSMEs
          </h2>
          <p className="text-slate-500 text-base mt-2">
            Read how bespoke financing from Shreem Finserv transformed businesses and empowered personal aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 hover:bg-white hover:border-[#0B2E8D]/30 interactive-shadow transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-base">
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    {rev.amount}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#001A62] text-white flex items-center justify-center font-bold text-sm">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{rev.name}</h4>
                  <p className="text-xs text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
