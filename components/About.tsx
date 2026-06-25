"use client";
import { Info, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative w-full bg-[#111827] py-16 md:py-24 px-4 sm:px-6 md:px-12 xl:px-24 border-y border-amber-500/20 shadow-[inset_0_0_80px_rgba(245,158,11,0.05)]">
      {/* Background highlight to make it "slightly highlighted" */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 shadow-sm">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              About Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            A Legacy of <span className="text-amber-500 italic">Precision</span> & Print.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Since 1995, <strong className="text-white font-semibold">FeelThePrint</strong> (A Unit of Mani Offset) has been at the forefront of commercial offset printing. 
            We blend decades of traditional craftsmanship with cutting-edge production technology to deliver 
            unrivaled quality at scale.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "Over 25+ Years of Industry Experience",
              "High-Volume Commercial Offset Capabilities",
              "Rigorous Quality Control Standards",
              "Trusted by Leading Corporate Brands"
            ].map((point, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Mockup/Imagery */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Main factory/printing press image */}
          <div className="absolute inset-0 bg-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Offset Printing Press Facility"
              fill
              sizes="100vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 flex items-center justify-center rounded-lg shadow-inner">
                  <span className="font-serif text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <div className="text-white text-sm font-bold tracking-wide">Mani Offset Enterprise</div>
                  <div className="text-amber-400 text-[10px] uppercase tracking-widest font-bold">Parent Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
