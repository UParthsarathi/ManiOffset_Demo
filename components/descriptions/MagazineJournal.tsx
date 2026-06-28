"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function MagazineJournal({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Made to inform, inspire, and last</h2>
          <p>
            Every magazine and journal begins with an idea — stories, research, and visuals that deserve a professional finish. At FeelThePRINT, we bring those pages to life with true offset craftsmanship: precise colour balance, accurate registration, and on-time dispatch on every single print run.
          </p>
          <p>
            You focus on the design. We&apos;ll handle the printing from the first proof to the final delivered copy — built for the publishers, institutions, and creative studios who can&apos;t afford a missed deadline or a colour that drifts halfway through the run.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What is a magazine? What is a journal?</h2>
          <p>
            <strong>Magazine</strong> — a periodical filled with articles, stories, and visuals, made to inform or entertain.
          </p>
          <p>
            <strong>Journal</strong> — a printed publication that records research, updates, or opinions, usually within academic or professional circles. In short, a structured record of thought, study, and insight.
          </p>
          <p className="mb-10">
            Different purposes, same requirement: clean text, true colour, and consistency across every copy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Journal types and magazine styles</h2>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Academic journals</strong> — printed for universities and research bodies that need sharp, highly readable text.</li>
            <li><strong>Corporate journals</strong> — internal newsletters and company updates, presented with clarity and brand tone.</li>
            <li><strong>Glossy magazines</strong> — vibrant pages for lifestyle, fashion, or design features.</li>
            <li><strong>Trade magazines</strong> — smooth matte prints for industrial or business readerships.</li>
            <li><strong>Custom editions</strong> — tailored designs built around your layout, brand, and print schedule.</li>
          </ul>
          <p>
            Whether it&apos;s a single academic issue or a bulk magazine run, we hold precision and consistency across the entire order.
          </p>
        </div>
      </div>

      {/* Size Table */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Magazine and journal sizes</h2>
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
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Compact</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">Academic journals and reports</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Compact</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">Pocket and digest editions</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">Monthly and quarterly magazine issues</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Full-size magazines</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Digest</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Balanced trim for text-heavy issues with visuals</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Sized and formatted to match your layout</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Binding and finish, your way</h2>
          <p>
            From glossy to matte, saddle-stitched to perfect bound, we handle every specification with care. We know what publishers expect — clarity, colour accuracy, and deadlines met without compromise — because that&apos;s what keeps a publication on schedule and on shelves.
          </p>
        </div>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get your publication printed</h2>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a custom quote</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Request a custom quote for your magazine or journal, and see how professional offset printing can lift the whole publication.
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
