"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function ExpressContact() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-slate-50 relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-start w-full max-w-5xl mx-auto py-12 px-4 relative z-10">
        <div className="w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 font-serif">Express Delivery Request</h1>
              <p className="text-sm text-slate-500 mt-1">Please fill the form below to request express delivery.</p>
            </div>
            <Link 
              href="/"
              className="text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 transition"
            >
              Back to Home
            </Link>
          </div>
          
          <div className="w-full h-[800px] bg-slate-50 relative">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdqyvk8ZyY1ceD0vTBaSmaIOL6mWd5Hd502sN-2pkDXEaRNIg/viewform?embedded=true"
              className="absolute inset-0 w-full h-full border-0"
              title="Express Delivery Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
