import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#020513] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-24 pb-12">
        <div className="w-full max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-[1px] bg-amber-500/50 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Price Calculator</h1>
          <p className="text-slate-400 font-sans leading-relaxed mb-12">
            The quotation and calculation features are currently undergoing an upgrade to serve you better. 
            Please contact our sales team for an immediate custom quote.
          </p>
          
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl text-white font-medium mb-4">Need a Quote Now?</h2>
            <p className="text-slate-400 mb-6 text-sm">Reach out to us directly and our team will get back to you with a tailored estimate.</p>
            
            <a 
              href="mailto:contact@feeltheprint.com" 
              className="inline-flex items-center justify-center h-12 px-8 bg-amber-500 hover:bg-amber-600 tracking-wider font-bold text-slate-900 rounded-lg uppercase text-sm transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
