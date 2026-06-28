"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function DefaultDescription({ product, whatsappMessage }: { product: any, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Got a Project That Needs Printing?</h2>
          <p>
            Our <strong>{product.title.toLowerCase()}</strong> printing services turn your draft into a real, tangible product.
          </p>
          <p>
            If you’ve been searching for a printing shop that delivers on time, you’ve found it. At FeelThePRINT, the process is simple:
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">1</span>
              <strong>Send your File</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">2</span>
              <strong>Choose your Size</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">3</span>
              <strong>Let us handle the rest</strong>
            </li>
          </ul>
          <p className="mb-10">
            Every copy is sharp and reliable, thanks to precise print-to-print consistency.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a {product.title}?</h2>
          <p>
            {product.description}
          </p>
          <p>
            It’s the format our clients prefer because it’s:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Strong</strong> — holds up through extensive usage and handling.</li>
            <li><strong>Light</strong> — easy to carry, display, and distribute.</li>
            <li><strong>Affordable</strong> — budget-friendly for every requirement.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Finishes & Variations</h2>
          <p>
            Every product has its own personality — and the finish sets the tone. At FeelThePRINT, we offer styles that balance function and aesthetics:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Standard Finish</strong> — a simple, flexible presentation that keeps the product clean and professional; ideal for general distribution and daily use.</li>
            <li><strong>Premium / Heavyweight Finish</strong> — made from thicker stock with extended durability, giving a refined edge often chosen for premium or limited editions.</li>
          </ul>
          <p>
            Each type is printed on our industrial offset plant for consistent texture, strong colour accuracy, and clean folds that make the product feel just right in hand.
          </p>
        </div>

      </div>

      {/* Size Table */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Standard Sizes & Dimensions</h2>
           <p className="text-gray-600">Designed to fit your specific layout preferences.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
           <table className="w-full text-left border-collapse bg-white">
              <thead>
                 <tr className="bg-gray-50 border-b border-gray-200 text-gray-900">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Category</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Printing Size</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Dimensions (Inches)</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider">Description</th>
                 </tr>
              </thead>
              <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard Edition</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; x 8.5&quot;</td>
                    <td className="py-4 px-6">The most popular format used by publishers worldwide.</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Global Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; x 8.3&quot;</td>
                    <td className="py-4 px-6">Perfect for international distribution and journals.</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Study & Reference</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; x 11&quot;</td>
                    <td className="py-4 px-6">Suitable for guides, handbooks, and academic material.</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Visual & Manual</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; x 9.5&quot;</td>
                    <td className="py-4 px-6">Gives extra room for images, diagrams, or notes.</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Compact</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; x 7&quot;</td>
                    <td className="py-4 px-6">Small, travel-friendly size — perfect for compact layouts.</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Flexible</td>
                    <td className="py-4 px-6">Designed to fit your specific layout preferences perfectly.</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>

      {/* Conclusion / CTA */}
      <div className="mt-20 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">More Than Just a Printing Press</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          When people search for a printing press or online print services, they want more than just an offset printer — they want dependability. That’s what we provide.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          With offset in printing, every page is consistent, maintaining the same sharpness and clarity throughout. <strong className="text-gray-900">Price of Print is Straightforward</strong> — based on page count, order volume, and printing size. No hidden costs, just the best printing quality every time.
        </p>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bring Your Pages to Life</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Get started today with a free quote from FeelThePRINT. Discover how simple and professional printing can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/calculator?product=${product.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get an Instant Quote
            </Link>
            <a 
              href={`https://wa.me/919999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2 fill-current" />
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-amber-200/50">
            <p className="text-xs font-bold text-amber-800/60 uppercase tracking-widest">
              📍 Country of Origin: India — Since 1995
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
