"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function HardcoverBook({ productId, whatsappMessage }: { productId: number, whatsappMessage: string }) {
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-0">Some books are meant to be objects</h2>
          <p>
            A hardcover isn&apos;t just another title on a shelf — it has presence. Weight in the hand. That quiet solidity that tells you, before you&apos;ve read a word, that this is a book built to last. And that soft creak when you first open it? That&apos;s the sound of something made properly.
          </p>
          <p>
            At FeelThePRINT, we print hardbacks the way people who love books would want them printed. The press work matters, of course — but it&apos;s the <strong>binding</strong> that gives a hardcover its character, and that&apos;s the part we&apos;ve spent decades getting right. Whether it&apos;s a novel, a university reference volume, or a commemorative edition meant to outlive everyone who reads it, we build each one to feel like it should.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What is a hardcover book?</h2>
          <p>
            A hardcover — also called a hardback — is built around a rigid board cover, wrapped in paper or cloth. It&apos;s the format people choose when a book deserves something more substantial:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Durable</strong> — the rigid cover protects the pages for years, even decades.</li>
            <li><strong>Solid</strong> — it holds its shape and weight, standing firm on any shelf.</li>
            <li><strong>Elegant</strong> — there&apos;s simply nothing that looks as considered as a well-made hardback.</li>
          </ul>
          <p className="mb-10">
            It&apos;s the format for the books people keep.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choosing your binding</h2>
          <p>
            The spine shapes both how a hardcover looks and how it opens. We offer two:
          </p>
          <ul className="mb-10 pl-5 list-disc marker:text-amber-500 space-y-2">
            <li><strong>Rounded spine</strong> — a heritage look with a gentle, classic curve. It&apos;s the traditional choice for novels and academic titles, the shape most people picture when they imagine a proper hardbound book.</li>
            <li><strong>Square back</strong> — a flat spine with clean, sharp edges and a crisp modern finish. It suits business reports, textbooks, and any project that calls for a solid, contemporary feel.</li>
          </ul>
        </div>
      </div>

      {/* Size Table */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="text-center mb-10 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Finding your size</h2>
           <p className="text-gray-600">The right trim size sets the character of the finished book. Here&apos;s the full range we print:</p>
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
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.5&quot; × 8.5&quot;</td>
                    <td className="py-4 px-6">Novels, biographies, general titles</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Standard</td>
                    <td className="py-4 px-6 whitespace-nowrap">A5</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">5.8&quot; × 8.3&quot;</td>
                    <td className="py-4 px-6">General reading and trade editions</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Institutional</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.5&quot; × 11&quot;</td>
                    <td className="py-4 px-6">University and corporate reference volumes</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Institutional</td>
                    <td className="py-4 px-6 whitespace-nowrap">A4</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">8.3&quot; × 11.7&quot;</td>
                    <td className="py-4 px-6">Large reference and technical books</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Showcase</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">7&quot; × 9.5&quot;</td>
                    <td className="py-4 px-6">Illustrated, photo-heavy, and art publications</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Personal</td>
                    <td className="py-4 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">4.75&quot; × 7&quot;</td>
                    <td className="py-4 px-6">Compact, durable, portable hardbacks</td>
                 </tr>
                 <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Custom</td>
                    <td className="py-4 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-4 px-6 font-mono whitespace-nowrap">Your spec</td>
                    <td className="py-4 px-6">Built to your trim size and binding style</td>
                 </tr>
              </tbody>
           </table>
        </div>
        <p className="text-center text-gray-600 max-w-4xl mx-auto">
          Not sure what suits your book? Tell us what it is, and we&apos;ll guide you to the right size and spine.
        </p>
      </div>

      {/* Transparent Pricing & CTA */}
      <div className="mt-16 pt-16 border-t border-gray-200 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Printing your hardcover with us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Most online book printing feels impersonal — a file goes into a void and copies come out the other end. We do it differently. Upload your file, get a clear price, and talk to real people whenever you need to. From paper choice to binding style, we walk through it with you.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          And every copy runs on our offset presses — richer colour, sharper detail, and the same quality from the first book to the last. This isn&apos;t rushed digital work; it&apos;s proper craftsmanship, the kind a hardcover deserves.
        </p>

        <div className="bg-[#fffbeb] border border-amber-200 rounded-2xl p-10 md:p-14 shadow-sm flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Built to last, printed to impress</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Send us your file for a free, no-obligation quote — and see how a properly made hardcover stands apart.
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
