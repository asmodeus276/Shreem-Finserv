import React from "react";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  maxAmount: string;
  interestRate: string;
  tenure: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  slug,
  icon,
  shortDesc,
  maxAmount,
  interestRate,
  tenure,
}) => {
  return (
    <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 hover:border-[#0B2E8D]/40 interactive-shadow group flex flex-col h-full transition-all overflow-hidden">
      {/* Top Gradient Accent Bar on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001A62] via-[#0B2E8D] to-[#BB0119] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0B2E8D] mb-6 group-hover:bg-[#0B2E8D] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
        <span className="material-symbols-outlined text-[28px]">{icon}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0B2E8D] transition-colors leading-snug">
        {title}
      </h3>

      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
        {shortDesc}
      </p>

      {/* Feature Pills */}
      <div className="grid grid-cols-2 gap-2.5 py-4 border-t border-slate-100 text-xs mb-4 bg-slate-50/60 rounded-xl px-3 my-1">
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Max Loan</span>
          <span className="font-extrabold text-slate-800">{maxAmount}</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Tenure</span>
          <span className="font-extrabold text-slate-800">{tenure}</span>
        </div>
        <div className="col-span-2 pt-1 border-t border-slate-200/40">
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Interest Rate</span>
          <span className="font-black text-emerald-700">{interestRate}</span>
        </div>
      </div>

      <Link
        href={slug}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2E8D] group-hover:text-[#BB0119] transition-colors mt-auto pt-2"
      >
        <span>Explore Product Details</span>
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
          arrow_forward
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
