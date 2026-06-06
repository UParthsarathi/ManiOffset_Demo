"use client";
import { Mail, Zap, ArrowRight, ShieldAlert } from "lucide-react";

export function PromoCallouts() {
  return (
    <section className="w-full bg-[#04081e] py-16 px-4 sm:px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Card: Need high volume printing? (Navy Blue / Violet) */}
        <div className="bg-[#1e2363] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          {/* Subtle Graphic background details */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none group-hover:bg-white/10 transition-colors" />
          
          <div className="space-y-4">
            {/* Left Header Tag */}
            <span className="text-[#a5b4fc] text-[10px] sm:text-xs font-black tracking-widest uppercase font-mono block">
              BULK & INSTITUTIONAL ORDERS
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-none">
              Need high volume printing?
            </h3>

            {/* Description */}
            <p className="text-[#c7d2fe] text-xs sm:text-base leading-relaxed font-sans max-w-md pt-2">
              From academic textbooks to banking forms, we offer special pricing and dedicated account management for large scale orders.
            </p>
          </div>

          <div className="pt-8 sm:pt-12">
            <button 
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#1e2363] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
              id="bulk-contact-sales-btn"
            >
              <Mail className="w-4 h-4 text-[#1e2363]" />
              <span>Contact Corporate Sales</span>
            </button>
          </div>
        </div>

        {/* Right Card: Critical deadlines? (Ivory Cream Yellow) */}
        <div className="bg-[#fef4d8] rounded-3xl p-8 sm:p-12 text-[#2e2300] flex flex-col justify-between shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          {/* Subtle Graphic background details */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#f29a1b]/5 rounded-full pointer-events-none group-hover:bg-[#f29a1b]/10 transition-colors" />

          <div className="space-y-4">
            {/* Right Header Tag */}
            <span className="text-[#b45309] text-[10px] sm:text-xs font-black tracking-widest uppercase font-mono block">
              FAST TURNAROUND
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-none text-[#5c3e03]">
              Critical deadlines?
            </h3>

            {/* Description */}
            <p className="text-[#855d14] text-xs sm:text-base leading-relaxed font-sans max-w-md pt-2">
              We understand the importance of timing for marketing materials and institutional records. Express production available.
            </p>
          </div>

          <div className="pt-8 sm:pt-12">
            <button 
              className="px-6 py-3.5 bg-[#f29a1b] hover:bg-[#de8710] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
              id="fast-delivery-btn"
            >
              <Zap className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span>Learn about Express Delivery</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
