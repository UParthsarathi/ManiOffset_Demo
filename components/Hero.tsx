"use client";
import { useRouter } from "next/navigation";
import { Sparkles, Sliders, ChevronRight, Calculator } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RealisticBook } from "./RealisticBook";

interface HeroProps {
  onLaunchBooklet: () => void;
}

export function Hero({ onLaunchBooklet }: HeroProps) {
  const router = useRouter();
  const slides = [
    {
      id: 1,
      title: "The Great Gatsby",
      image: "https://covers.openlibrary.org/b/id/8259431-L.jpg",
      tag: "PREMIUM FINISHES",
      theme: "border-[#f29a1b]/40 text-amber-500",
      rotation: 8
    },
    {
        id: 2,
        title: "1984",
        image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
        tag: "HIGH-END OFFSET",
        theme: "border-emerald-500/40 text-emerald-400",
        rotation: -6
    },
    {
        id: 3,
        title: "Pride & Prejudice",
        image: "https://covers.openlibrary.org/b/id/8231853-L.jpg",
        tag: "SADDLE STITCHED",
        theme: "border-sky-500/40 text-sky-400",
        rotation: 5
    }
  ];

  return (
    <section className="relative w-full bg-[#0d1430] overflow-hidden py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 xl:px-24 border-b border-white/5">
      {/* Dark ambient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0f24] via-[#0d1430] to-[#141d40] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hand Column: Text Details and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8 max-w-2xl">
          {/* Established pill */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 shadow-md">
            <span className="w-1.5 h-1.5 bg-[#f29a1b] rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">
              ESTABLISHED 1995
            </span>
          </div>

          {/* Majestic Hero Header */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-1 sm:gap-4"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-tight drop-shadow-lg">
              Highest Quality
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-sans font-black text-[#f29a1b] tracking-tight leading-[1] drop-shadow-sm">
              Custom Printing
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-sans max-w-xl font-light"
          >
            We deliver unparalleled volume commercial offset printing. From academic textbooks to premium corporate stationery, we bring your most demanding visions to life with absolute precision.
          </motion.p>

          {/* Action CTAs */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* Catalog Link */}
            <a
              href="#home-products"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home-products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#f29a1b] hover:bg-[#de8710] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-[#f29a1b]/10 hover:shadow-xl hover:shadow-[#f29a1b]/15 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-discover-options-btn"
            >
              <span>Browse Print Catalog</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Calculator Button */}
            <button
              onClick={() => router.push('/calculator')}
              className="px-8 py-4 bg-transparent border border-[#f29a1b]/30 hover:border-[#f29a1b]/60 hover:bg-[#f29a1b]/5 text-[#f29a1b] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Calculator className="w-4 h-4" />
              <span>Get Custom Quote</span>
            </button>
          </div>

          {/* Status Bar */}
          <div className="pt-8 mt-4 border-t border-white/10 flex items-center gap-6 sm:gap-12">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight">28+</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Years Exp.</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight">10k+</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Projects</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight">ZERO</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Missed Deadlines</span>
            </div>
          </div>
        </div>

        {/* Right Hand Column: 3D Books Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 md:py-6 h-[400px] md:h-[500px] xl:h-[600px]">
          {/* Books Container */}
          <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
            <div 
              className="absolute scale-100 sm:scale-110 md:scale-125 lg:scale-[1.15] xl:scale-[1.3] origin-center transition-transform duration-1000 ease-out"
            >
              <RealisticBook
                title="Dune"
                image="https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg"
                tag="ARRAKIS EDITION"
                theme="border-orange-500/40 text-orange-500"
                rotation=""
                delay=""
                onClick={onLaunchBooklet}
                thickness={36}
              />
            </div>
          </div>

          {/* Holographic Play Interactive Badge positioned floating in foreground */}
          <div 
            onClick={onLaunchBooklet}
            className="absolute bottom-4 md:bottom-12 right-[5%] bg-[#f29a1b] text-white font-mono text-[10px] md:text-xs font-bold px-5 py-3 rounded-full shadow-2xl border border-[#ffb142] flex items-center gap-2 cursor-pointer animate-bounce z-50 hover:bg-[#ffb142] transition-colors"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>OPEN 3D SHOWROOM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
