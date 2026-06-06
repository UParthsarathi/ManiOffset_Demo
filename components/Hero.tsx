"use client";
import { BookOpen, Sparkles, Sliders, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onLaunchBooklet: () => void;
}

export function Hero({ onLaunchBooklet }: HeroProps) {
  const slides = [
    {
      id: 1,
      title: "Hardcover & Casebound",
      image: "https://picsum.photos/seed/print1/800/800",
      tag: "PREMIUM FINISHES",
      theme: "border-[#f29a1b]/40 text-amber-500",
      rotation: 8
    },
    {
        id: 2,
        title: "Magazines & Lookbooks",
        image: "https://picsum.photos/seed/print2/800/800",
        tag: "HIGH-END OFFSET",
        theme: "border-emerald-500/40 text-emerald-400",
        rotation: -6
    },
    {
        id: 3,
        title: "Corporate Catalogs",
        image: "https://picsum.photos/seed/print3/800/800",
        tag: "SADDLE STITCHED",
        theme: "border-sky-500/40 text-sky-400",
        rotation: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

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
          <h1 className="flex flex-col gap-1 sm:gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
              Highest Quality
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-sans font-black text-[#f29a1b] tracking-tight leading-[1] drop-shadow-sm">
              Custom Printing
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-xl">
            We deliver unparalleled volume commercial offset printing. From academic textbooks to premium corporate stationery, we bring your most demanding visions to life with absolute precision.
          </p>

          {/* Action CTAs */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* Catalog Link */}
            <Link
              href="/products"
              className="px-8 py-4 bg-[#f29a1b] hover:bg-[#de8710] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-[#f29a1b]/10 hover:shadow-xl hover:shadow-[#f29a1b]/15 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-discover-options-btn"
            >
              <span>Browse Print Catalog</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Prompt to try Interactive 3D layout */}
          <div className="pt-5 mt-2 border-t border-white/10 flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 border border-emerald-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[13px] text-white font-medium tracking-wide">
                Experience all our products in a true 3D booklet
              </p>
              <button 
                onClick={onLaunchBooklet}
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors inline-flex items-center gap-1 cursor-pointer text-xs uppercase tracking-widest group"
              >
                Launch 3D Booklet Viewer
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Hand Column: Dynamic Slideshow */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          <div className="relative w-full max-w-[400px] h-[380px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={onLaunchBooklet}
                className="relative w-[280px] h-[340px] md:w-[300px] md:h-[380px] bg-slate-900 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden hover:-translate-y-2 transition-transform duration-500 cursor-pointer border border-white/10 group"
              >
                {/* Book Cover Image Array Showcase */}
                <div className="absolute inset-0 bg-slate-800">
                  <Image 
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    sizes="(max-width: 768px) 280px, 300px"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1430] via-[#0d1430]/40 to-transparent opacity-95 pointer-events-none transition-opacity duration-500" />
                </div>

                {/* Bottom Tag Display Layer */}
                <div className={`absolute bottom-6 left-6 right-6 bg-[#020617]/80 backdrop-blur-md border border-white/5 ${slides[currentSlide].theme} text-[10px] sm:text-[11px] font-bold text-center tracking-wider uppercase py-3 rounded-lg shadow-2xl`}>
                  {slides[currentSlide].tag}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Holographic Play Interactive Badge */}
            <div 
              onClick={onLaunchBooklet}
              className="absolute -top-3 right-[5%] bg-[#f29a1b] text-white font-mono text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#ffb142] flex items-center gap-1 cursor-pointer animate-bounce z-30"
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span>3D INTERACTIVE DESK</span>
            </div>

            {/* Slideshow Title & Indicators */}
            <div className="absolute -bottom-6 w-full flex flex-col items-center gap-4">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={`title-${currentSlide}`}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="text-white font-serif text-2xl tracking-wide font-medium text-center drop-shadow-md"
                 >
                   {slides[currentSlide].title}
                 </motion.div>
               </AnimatePresence>
               <div className="flex gap-2.5 items-center">
                 {slides.map((_, i) => (
                   <button 
                     key={i}
                     onClick={() => setCurrentSlide(i)}
                     className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 h-1.5 bg-[#f29a1b]' : 'w-1.5 h-1.5 bg-slate-500 hover:bg-slate-400'}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
