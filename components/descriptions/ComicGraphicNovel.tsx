"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ComicGraphicNovel({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Where your art becomes real</h2>
          <p>
            That moment when you finally hold your finished comic — the cover in your hands, the pages you drew now solid and real? That&apos;s the moment we print for. At FeelThePRINT, we work with creators who care about how their art lands on the page, and we treat every project like it matters, because to the person who made it, it does.
          </p>
          <p>
            We handle the tricky parts — file setup, colour accuracy, and binding — so what you get back is steady, true to your artwork, and consistent from the first page to the last. Your vision, printed exactly as you intended it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What is a comic? What is a graphic novel?</h2>
          <p>
            <strong>Comic</strong> — a sequence of art and text, often released as issues or short books.
          </p>
          <p>
            <strong>Graphic novel</strong> — a longer, complete story told through the same blend of visuals and words.
          </p>
          <p className="mb-10">
            Both live or die on the printing: colour that holds true, art that stays sharp, and binding that survives being read again and again.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Styles we specialise in</h2>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Classic comic issues</strong> — slim, stapled editions that capture the traditional comic-book feel.</li>
            <li><strong>Collected volumes (TPBs)</strong> — multiple issues gathered into one book, made for the shelf.</li>
            <li><strong>Full-length graphic novels</strong> — original stories published as complete books.</li>
            <li><strong>Pocket manga</strong> — compact, black-and-white formats loved by manga readers.</li>
          </ul>
        </div>
      </div>

      {/* Size Table */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Comic and graphic novel sizes</h2>
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
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Mid-sized</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">Popular size for collected runs</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Mid-sized</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">Standard collected editions</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Showcase</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">Full-page artwork and long-form stories</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Showcase</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Large-format art editions</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Anthology</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Versatile size for multi-creator projects</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Manga</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; × 7&quot;</td>
                    <td className="py-4 px-6">Compact, portable, made for manga</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Built to match your storyline and artwork</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Colour, feel, and binding that lasts</h2>
          <p>
            Every project gets the detail it deserves: colour that stands out, the right stock for the job — from glossy to classic newsprint — and binding that holds, whether stapled or perfect bound. From file setup to final copies, our offset presses deliver richer colour, sharper detail, and consistency across the entire run.
          </p>
        </div>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bring your story to print</h2>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a custom quote</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Send us your files for a free quote, and let&apos;s turn your artwork into a book you&apos;re proud to hold.
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
