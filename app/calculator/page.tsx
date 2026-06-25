import React, { Suspense } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { QuoteCalculator } from '@/components/QuoteCalculator';

export const metadata: Metadata = {
  title: 'Print Quote Calculator',
  description: 'Get an instant estimate for your commercial printing needs with our custom offset printing calculator.',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      
      <main className="flex-1 w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" /></div>}>
          <QuoteCalculator />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
