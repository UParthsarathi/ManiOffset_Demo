import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowLeft, Check, Shield, Truck, ChevronRight } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto flex items-center text-[11px] font-medium text-slate-500">
          <Link href="/products" className="hover:text-slate-900 transition-colors flex items-center gap-1.5 p-1 -ml-1 rounded-md hover:bg-slate-100">
            <ArrowLeft className="w-3.5 h-3.5" />
            Catalog
          </Link>
          <span className="mx-2.5 text-slate-300">/</span>
          <span className="uppercase tracking-widest">{product.category}</span>
          <span className="mx-2.5 text-slate-300">/</span>
          <span className="text-slate-900">{product.title}</span>
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Left: Product Image */}
        <div className="w-full md:w-5/12 flex flex-col shrink-0">
          <div className="relative aspect-[4/3] md:aspect-square w-full bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <Image 
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`relative aspect-square bg-slate-100 rounded-md overflow-hidden cursor-pointer border ${i === 0 ? 'border-slate-800 ring-1 ring-slate-800' : 'border-slate-200 hover:border-slate-400'}`}>
                <Image 
                  src={`${product.imageUrl}?random=${i}`}
                  alt={`${product.title} thumbnail`}
                  fill
                  className="object-cover opacity-90 transition-opacity hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Details & Checkout Configuration */}
        <div className="w-full md:w-7/12 flex flex-col space-y-6">
          <div className="border-b border-slate-200 pb-5">
            <div className="inline-block text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">
              {product.categoryLabel}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2.5">{product.title}</h1>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {product.description} We offer premium quality prints with quick turnaround times and bulk pricing. Custom dimensions available on request.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg p-3">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Custom Size
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-600" />
                Quality Check
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-slate-800" />
                Fast Shipping
              </div>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-sm font-bold text-slate-900 tracking-wide uppercase mb-4">Configuration</h2>
            
            <form className="space-y-5">
              {/* Row: Quantity & Paper Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Quantity</label>
                  <select className="w-full bg-white border border-slate-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:border-slate-800 transition-all shadow-sm">
                    <option>100 copies</option>
                    <option>250 copies</option>
                    <option>500 copies (Best Value)</option>
                    <option>1000 copies</option>
                    <option>2000+ copies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Paper Type</label>
                  <select className="w-full bg-white border border-slate-300 rounded-md py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-800 focus:border-slate-800 transition-all shadow-sm">
                    <option>Premium Matte (100gsm)</option>
                    <option>Glossy Art (130gsm)</option>
                    <option>Textured Laid (120gsm)</option>
                  </select>
                </div>
              </div>

              {/* Finishing Options */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">Finishing Options</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className="flex items-center p-2.5 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="checkbox" className="w-3.5 h-3.5 text-slate-900 rounded border-slate-300 focus:ring-slate-900" />
                    <span className="ml-2.5 text-xs text-slate-700 font-medium">Lamination (Gloss/Matte)</span>
                  </label>
                  <label className="flex items-center p-2.5 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="checkbox" className="w-3.5 h-3.5 text-slate-900 rounded border-slate-300 focus:ring-slate-900" />
                    <span className="ml-2.5 text-xs text-slate-700 font-medium">Spot UV / Foiling</span>
                  </label>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full flex items-center justify-center py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm hover:shadow transition-all gap-2 group">
                  Proceed to Checkout
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-3 hidden sm:block">
                  Final pricing is calculated based on exact dimensions and file verification.
                </p>
              </div>
            </form>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
