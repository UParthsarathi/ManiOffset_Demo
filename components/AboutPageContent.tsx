"use client";

import { Info, Target, Milestone, Users } from "lucide-react";
import Image from "next/image";

export function AboutPageContent() {
  return (
    <div className="min-h-screen bg-[#0a0f26] text-white">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-12 xl:px-24 py-20 lg:py-32 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f29a1b]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 shadow-sm mx-auto">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              About Mani Offset
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-tight">
            Crafting Precision <br className="hidden sm:block" />
            <span className="text-amber-500 italic">Since 1995</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Welcome to Mani Offset Press, the parent enterprise behind FeelThePrint. We have been the backbone of high-volume commercial printing operations for nearly three decades, combining heritage craftsmanship with modern technology.
          </p>
        </div>
      </section>

      {/* History & Mission Section - Modular Structure */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 lg:py-24 max-w-7xl mx-auto relative z-10 gap-16 lg:gap-24 flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold font-serif">Our Mission</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              At Mani Offset, our primary mission is to deliver uncompromising print quality through rigorous standard operating procedures. We bridge the gap between traditional offset techniques and contemporary automation, ensuring that every batch—from secure financial forms to premium packaging—meets exact client specifications.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              We focus on scalability without sacrificing the nuanced touch that our clients have trusted for 25+ years.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/50">
            <Image 
              src="https://picsum.photos/seed/printingpress1/1200/800"
              alt="Mani Offset Press facility"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/50">
            <Image 
              src="https://picsum.photos/seed/printingpress2/1200/800"
              alt="Historical timeline of Mani Offset"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <Milestone className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold font-serif">The Legacy</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Founded in Sivakasi, the heart of India&apos;s printing industry, Mani Offset began as a modest operation focused on meticulous manual binding and rudimentary offset work. Over the decades, we&apos;ve expanded our footprint, acquiring state-of-the-art multi-color machines and establishing a rigorous quality assurance protocol.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Today, our name stands as a benchmark for reliability in the commercial print sector across South India.
            </p>
          </div>
        </div>

      </section>

      {/* Placeholder for future specific details */}
      <section className="px-4 sm:px-6 md:px-12 xl:px-24 py-16 lg:py-24 max-w-4xl mx-auto border-t border-white/5 relative z-10 text-center">
        <Users className="w-10 h-10 text-slate-500 mx-auto mb-6" />
        <h3 className="text-xl font-bold mb-4">Detailed Corporate Profile</h3>
        <p className="text-slate-400 text-sm">
          This section is a modular placeholder ready to accommodate the exact details, board of directors info, and comprehensive technical specifications of Mani Offset once provided.
        </p>
      </section>
      
    </div>
  );
}
