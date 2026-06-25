import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowLeft, Check, Shield, Truck, ChevronRight, Feather, Tag, MessageCircle, Calculator } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { generateProductSchema } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | Mani Offset`,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h1>
        <Link href="/products" className="text-amber-500 hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      <StructuredData data={generateProductSchema(product)} />
      <Navbar />

      {/* Clean Breadcrumb */}
      <div className="bg-white pt-20 pb-4 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center text-[10px] font-bold text-slate-400 tracking-widest uppercase">
          <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
          <span className="mx-2 font-normal text-slate-300">/</span>
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-amber-600 transition-colors">{product.category}</Link>
          <span className="mx-2 font-normal text-slate-300">/</span>
          <span className="text-slate-900">{product.title}</span>
        </div>
      </div>

      <main className="flex-1 w-full bg-white selection:bg-amber-100 selection:text-amber-900 pb-16">
        
        {/* 1. HERO - Hook & Story */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-b border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-500"></span>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{product.categoryLabel}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                Got a Story That Needs Printing?
              </h1>
              <div className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-10 space-y-4">
                <p>
                  Our <strong className="text-slate-900 font-medium">{product.title.toLowerCase()}</strong> printing services turn your draft into a real, tangible product. 
                </p>
                <p>
                  If you’ve been searching for a printing shop that delivers on time, you’ve found it. At FeelThePRINT, the process is simple and hassle-free:
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 mb-10">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Choose your Size & Specs</h4>
                      <p className="text-slate-500 text-sm mt-1">Select from our standard or custom dimensions and use our calculator to get an instant estimate.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Consult & Send Artwork</h4>
                      <p className="text-slate-500 text-sm mt-1">Connect with our prepress team directly via WhatsApp or email to finalize your design without clunky uploads.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Let us handle the rest</h4>
                      <p className="text-slate-500 text-sm mt-1">Every copy is sharp and reliable, thanks to precise print-to-print consistency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/calculator?product=${product.id}`}
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 group"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Instant Quote
                </Link>
                <a 
                  href={`https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20printing%20a%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-slate-100 group">
                <Image 
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8 lg:p-12 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. DEFINITION & COVERS */}
        <section className="bg-slate-900 text-white py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">What is {product.title}?</h2>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                {product.description} It’s a format our clients prefer because it’s:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-amber-500">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">Strong</h3>
                <p className="text-sm text-slate-400">Holds up through many reads and extended usage.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-amber-500">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">Light</h3>
                <p className="text-sm text-slate-400">Easy to carry anywhere, minimizing freight costs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-amber-500">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">Affordable</h3>
                <p className="text-sm text-slate-400">Budget friendly for every reader and mass distribution.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-16">
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-center">Covers & Finishes</h2>
              <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
                Every production has its own personality — and the cover sets the tone. At FeelThePRINT, we offer styles that balance function and finish:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold text-amber-500 mb-3">Standard Wrapper</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">A simple, flexible wrapper that keeps the book light and comfortable to hold; ideal for novels, reports, and general reading copies.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold text-amber-500 mb-3">French Fold Cover</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">Made from heavier wrapper with extended flaps folded inside, giving a refined, durable edge often chosen for premium or limited editions.</p>
                </div>
              </div>
              <p className="text-center text-sm text-slate-400 mt-8 italic">
                Each cover type is printed on our offset plant for consistent texture, strong colour, and clean fold lines that make the product feel just right in hand.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SIZE TABLE */}
        <section className="py-20 lg:py-32 bg-[#fcfcfc] border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Standard Sizing Guide</h2>
              <p className="text-slate-500">Find the perfect dimensions for your manuscript or layout.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white shadow-sm rounded-xl overflow-hidden border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Category</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Printing Size</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Dimensions (Inches)</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Standard Edition</td>
                    <td className="py-5 px-6 whitespace-nowrap">1/8 Demy</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">5.5&quot; x 8.5&quot;</td>
                    <td className="py-5 px-6">The most popular format used by publishers worldwide.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Global Standard</td>
                    <td className="py-5 px-6 whitespace-nowrap">A5</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">5.8&quot; x 8.3&quot;</td>
                    <td className="py-5 px-6">Perfect for international distribution, manuals, and journals.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Study & Reference</td>
                    <td className="py-5 px-6 whitespace-nowrap">1/4 Demy</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">8.5&quot; x 11&quot;</td>
                    <td className="py-5 px-6">Suitable for guides, handbooks, and academic material.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Visual & Manual</td>
                    <td className="py-5 px-6 whitespace-nowrap">1/4 Crown</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">7&quot; x 9.5&quot;</td>
                    <td className="py-5 px-6">Gives extra room for images, diagrams, or notes.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Compact Reads</td>
                    <td className="py-5 px-6 whitespace-nowrap">1/8 Crown</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">4.75&quot; x 7&quot;</td>
                    <td className="py-5 px-6">Small, travel-friendly size — perfect for novellas.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-900 whitespace-nowrap">Custom</td>
                    <td className="py-5 px-6 whitespace-nowrap">Variable</td>
                    <td className="py-5 px-6 font-mono whitespace-nowrap">Flexible</td>
                    <td className="py-5 px-6">Designed to fit your specific manuscript or layout preferences.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. VALUE PROP & CTA */}
        <section className="py-20 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8">More Than Just a Printing Press</h2>
          <div className="text-lg text-slate-600 leading-relaxed mb-12 space-y-6">
            <p>
              When people search for a printing press or online print services, they want more than just an offset printer — they want dependability. That’s what we provide.
            </p>
            <p>
              With offset in printing, every page is consistent, maintaining the same sharpness and clarity throughout. <strong className="text-slate-900 font-bold">Pricing is straightforward</strong> and based on page count, order volume, and printing size. No hidden costs, just the best printing quality every time.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Bring Your Pages to Life</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Get started today with a free quote from FeelThePRINT. Discover how simple and professional your printing can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/calculator?product=${product.id}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 group"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Get an Instant Quote
              </Link>
              <a 
                href={`https://wa.me/919999999999?text=Hi,%20I'm%20interested%20in%20printing%20a%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm uppercase tracking-widest font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-amber-200/50">
              <p className="text-[10px] font-mono font-bold text-amber-800/60 uppercase tracking-widest">
                📍 Country of Origin: India — Since 1995
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
