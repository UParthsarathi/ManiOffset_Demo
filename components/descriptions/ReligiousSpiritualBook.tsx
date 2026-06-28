"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ReligiousSpiritualBook({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Sacred words, printed with care</h2>
          <p>
            Sacred texts deserve a printer who treats them as more than a job. At FeelThePRINT, we specialise in religious and spiritual book printing, handling every page with the care and respect these works are owed.
          </p>
          <p>
            Whether it&apos;s Hindu scriptures, Jain texts, the Quran, Jewish religious books, the Bible, or sacred works from any faith, our offset printing brings every page to life with clarity and dignity. From pocket editions carried in a bag to large-print volumes read aloud in temples and homes, every detail is handled with precision — so the finished book is durable, readable, and beautiful.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Printing styles and binding options</h2>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Hardbound editions</strong> — strong and long-lasting. The choice many publishers make for scriptures read daily in temples and homes.</li>
            <li><strong>Softcover editions</strong> — light and portable for daily devotion, easy to slip into a bag or hold during prayer, without giving up durability.</li>
            <li><strong>Large-print editions</strong> — set in clear, generous fonts so every reader, young or old, can follow with ease.</li>
            <li><strong>Custom multi-volume sets</strong> — flexible in size and binding, for when an entire collection of texts needs to be preserved in order.</li>
          </ul>
        </div>
      </div>

      {/* Size Table */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Religious and spiritual book sizes</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto mb-16">
           <table className="w-full text-left border-collapse bg-white">
              <thead>
                 <tr className="bg-gray-50 border-b border-gray-200 text-gray-900">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Category</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Size name</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap">Dimensions (inches)</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider">Best for</th>
                 </tr>
              </thead>
              <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Devotional</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">Everyday spiritual reading</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Devotional</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">Pocket and personal editions</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Scholarly</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">Detailed study volumes and commentaries</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Scholarly</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Large reference and academic texts</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Illustrated</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Books with images or multi-language texts</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Travel</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; × 7&quot;</td>
                    <td className="py-4 px-6">Daily recitation and prayer books</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Preserving sacred works in unique formats</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why printing matters for sacred texts</h2>
          <p>
            A religious book is not just pages — it carries tradition, history, and guidance. Printing it well means three things:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Clarity</strong> — sharp fonts and clean layouts, especially important for scripture meant to be read closely.</li>
            <li><strong>Consistency</strong> — every page uniform, whether a single text or a complete multi-volume set.</li>
            <li><strong>Longevity</strong> — quality paper and binding that withstand years of daily reading.</li>
          </ul>
          <p>
            For us, printing sacred works is more than machinery — it&apos;s respect in action, preserving meaning page by page.
          </p>
        </div>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Built on trust, printed with care</h2>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a custom quote</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            From spiritual books meant for personal devotion to complete collections printed for libraries and institutions, we treat every project with the care and responsibility it deserves — sharper fonts, richer inks, and dependable results, every run. Send us your files for a free quote, and let us print your sacred works the way they should be.
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
