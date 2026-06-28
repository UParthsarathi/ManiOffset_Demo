"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";

export function SoftcoverBook({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Softcover Book Printing</h2>
          <p className="text-lg">
            <strong>Turn your manuscript into a finished paperback.</strong>
          </p>
          <p>
            Mani Offset&apos;s softcover book printing takes your final file and delivers clean, durable paperback copies — printed on offset presses for sharp, consistent results from the first page to the last.
          </p>
          <p>
            Ordering is simple:
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">1</span>
              <strong>Send your file (PDF preferred)</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">2</span>
              <strong>Choose your size (options below)</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">3</span>
              <strong>We print, bind, and deliver</strong>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What is a softcover (paperback) book?</h2>
          <p>
            A softcover book has a flexible cover glued to the spine — known as paperback or perfect binding. It&apos;s the format most readers prefer because it&apos;s:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Durable</strong> — holds up through repeated reading.</li>
            <li><strong>Lightweight</strong> — easy to carry.</li>
            <li><strong>Cost-effective</strong> — the affordable choice for any print run.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cover options</h2>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Standard cover</strong> — a flexible, lightweight wrapper ideal for novels, reports, and general reading copies.</li>
            <li><strong>French fold cover</strong> — a heavier wrapper with folded inner flaps, giving a refined, durable edge often chosen for premium or limited editions.</li>
          </ul>
          <p>
            Both are printed on offset presses for consistent texture, strong colour, and clean fold lines.
          </p>
        </div>
      </div>

      {/* Size Table Specific to Softcover */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Softcover book sizes</h2>
           <p className="text-gray-600">Standard and custom sizes to fit your manuscript perfectly.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
           <table className="w-full text-left border-collapse bg-white">
              <thead>
                 <tr className="bg-gray-50 border-b border-gray-200 text-gray-900">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Use case</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Size name</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Dimensions (inches)</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider">Best for</th>
                 </tr>
              </thead>
              <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">The most popular paperback format worldwide</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">Novels, general reading</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Study/Reference</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">Guides, handbooks, academic material</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Study/Reference</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Textbooks, manuals</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Visual/Manual</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Extra room for images and diagrams</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Compact</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; × 7&quot;</td>
                    <td className="py-4 px-6">Travel-friendly novellas</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Built to your manuscript&apos;s layout</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent pricing</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          Softcover book printing cost depends on three things: page count, order quantity, and trim size. No hidden charges — request a quote and you&apos;ll get a clear, itemised price.
        </p>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a quote</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Send your file for a free quote on softcover book printing. Mani Offset — offset printing in India since 1995.
          </p>
          <a 
            href={`https://wa.me/919999999999?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg transition-colors shadow-md hover:shadow-lg font-bold"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Request a Quote on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
