"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function PressHeader({ title = "Printing Academy" }: { title?: string }) {
  return (
    <header className="w-full bg-[#0d1430] text-white border-b border-slate-700 py-3 px-4 sm:px-6 md:px-12 flex items-center justify-between z-50 sticky top-0 shadow-sm">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex flex-col group shrink-0">
          <div className="relative h-10 w-40 sm:h-12 sm:w-48 my-1">
            <Image 
              src="/logo.png" 
              alt="FeelThe Print Logo" 
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-contain object-left" 
              priority
            />
          </div>
          <span className="text-[7.5px] sm:text-[8px] italic font-serif text-slate-400 font-light tracking-wider leading-none">
            Where printing meets perfection.
          </span>
        </Link>
        <div className="hidden md:flex items-center border-l border-slate-600 pl-6 space-x-2">
            <span className="font-bold tracking-tight text-xl font-serif text-white">{title}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link 
          href="/"
          className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to FeelThePrint</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>
    </header>
  );
}
