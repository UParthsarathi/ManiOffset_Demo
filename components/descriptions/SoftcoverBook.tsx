"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Check } from "lucide-react";

export function SoftcoverBook({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Got a story ready for the press?</h2>
          <p>
            Every book begins as a file on a screen — and ends as something you can hold, flip through, and hand to a reader. FeelThePRINT&apos;s softcover book printing is where that change happens. You bring the manuscript; we bring the press, the paper, and forty years of knowing exactly how a page should sit in someone&apos;s hands.
          </p>
          <p>
            Whether it&apos;s a first novel, a print run for your institution, or a limited edition you&apos;ve been planning for months, every copy comes off our offset presses sharp, even, and consistent — the same clean ink and crisp type from the opening page to the very last.
          </p>
          <p>
            And the process couldn&apos;t be simpler:
          </p>
          <ul className="list-none pl-0 space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">1</span>
              <strong>Send your file</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">2</span>
              <strong>Choose your size</strong>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">3</span>
              <strong>Leave the rest to us.</strong>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What makes a paperback a paperback?</h2>
          <p>
            A softcover book — the paperback — is built around a flexible cover glued to the spine, a method called perfect binding. It&apos;s the format most readers reach for, and for good reason:
          </p>
          <ul className="mb-6 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>It travels well.</strong> Light enough to slip into a bag, sturdy enough to survive the journey.</li>
            <li><strong>It lasts.</strong> A good paperback holds its shape through dozens of reads, spine intact.</li>
            <li><strong>It&apos;s affordable.</strong> The most budget-friendly way to put a real book into a reader&apos;s hands — whether that&apos;s ten copies or ten thousand.</li>
          </ul>
          <p className="mb-10">
            It&apos;s the everyday book, the one people actually live with. And done well, it feels every bit as considered as a hardback.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">A cover that sets the tone</h2>
          <p>
            A cover is the first thing anyone touches, and it quietly tells them what kind of book they&apos;re holding. We print two styles, each with its own character:
          </p>
          <ul className="mb-6 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Standard cover</strong> — a clean, flexible wrapper that keeps the book light and easy in the hand. It&apos;s the natural choice for novels, reports, study copies, and anything meant to be read often and carried everywhere.</li>
            <li><strong>French fold cover</strong> — cut from a heavier stock with extended flaps folded neatly inside, giving the edges a firmer, more refined feel. It&apos;s the cover people choose when a book deserves a little ceremony: premium runs, limited editions, the ones meant to be kept.</li>
          </ul>
          <p>
            Whichever you pick, it&apos;s printed on our offset presses for deep, even colour, true texture, and fold lines so clean the book simply feels right the moment it&apos;s picked up.
          </p>
        </div>
      </div>

      {/* Size Table Specific to Softcover */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Finding your size</h2>
           <p className="text-gray-600">The right trim size shapes how a book reads and feels. Here&apos;s the full range we print:</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto mb-6">
           <table className="w-full text-left border-collapse bg-white">
              <thead>
                 <tr className="bg-gray-50 border-b border-gray-200 text-gray-900">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Feel</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Size name</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Dimensions (inches)</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider">Suited to</th>
                 </tr>
              </thead>
              <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Classic</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">The paperback size publishers reach for worldwide</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Classic</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">Novels and general reading</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Reference</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">Guides, handbooks, academic texts</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Reference</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Textbooks and manuals</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Illustrated</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Books with images, diagrams, or wide margins</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Pocket</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; × 7&quot;</td>
                    <td className="py-4 px-6">Travel-friendly novellas and slim reads</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Built around your manuscript&apos;s own layout</td>
                 </tr>
              </tbody>
           </table>
        </div>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          Not sure which fits? Tell us about the book and we&apos;ll point you to the size that suits it best.
        </p>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Honest, simple pricing</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          There&apos;s no mystery to what softcover book printing costs. It comes down to three things: how many pages, how many copies, and which size. That&apos;s it. You&apos;ll get a clear, itemised quote with nothing buried in the fine print — just a straight answer you can plan around.
        </p>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s bring your pages to life</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Send us your file and we&apos;ll send back a free, no-obligation quote — and show you how straightforward printing a proper paperback can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link 
              href={`/calculator?product=${productId}`}
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
          <div className="mt-10 pt-6 border-t border-amber-200/50 w-full">
            <p className="text-xs font-bold text-amber-800/60 uppercase tracking-widest">
              FeelThePRINT — offset printing in India since 1995.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
