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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-[#0B2E8D]/40 interactive-shadow group flex flex-col h-full transition-all">
      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#0B2E8D] mb-6 group-hover:bg-[#0B2E8D] group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-[28px]">{icon}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0B2E8D] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
        {shortDesc}
      </p>

      {/* Feature Pills */}
      <div className="grid grid-cols-2 gap-2 py-4 border-t border-slate-100 text-xs mb-4">
        <div>
          <span className="text-slate-400 block text-[11px] font-semibold uppercase">Max Loan</span>
          <span className="font-bold text-slate-800">{maxAmount}</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[11px] font-semibold uppercase">Tenure</span>
          <span className="font-bold text-slate-800">{tenure}</span>
        </div>
        <div className="col-span-2 pt-1">
          <span className="text-slate-400 block text-[11px] font-semibold uppercase">Interest Rate</span>
          <span className="font-bold text-emerald-700">{interestRate}</span>
        </div>
      </div>

      <Link
        href={slug}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2E8D] group-hover:text-[#BB0119] transition-colors mt-auto pt-2"
      >
        <span>Explore Product Details</span>
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
