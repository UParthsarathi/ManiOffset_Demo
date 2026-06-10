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

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="w-full lg:w-4/12 flex flex-col shrink-0">
          <div className="relative aspect-[4/3] w-full bg-white border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-4">
            <Image 
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-3 mt-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`relative aspect-square bg-white rounded-md overflow-hidden cursor-pointer border p-1 ${i === 0 ? 'border-amber-500 ring-1 ring-amber-500' : 'border-slate-200 hover:border-amber-500'}`}>
                <Image 
                  src={`${product.imageUrl}?random=${i}`}
                  alt={`${product.title} thumbnail`}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Product Details */}
        <div className="w-full lg:w-5/12 flex flex-col space-y-4">
          <div className="border-b border-slate-200 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-2">{product.title}</h1>
            <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="text-slate-700 font-bold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                  Available for Production
                </span>
                <span className="text-slate-300">|</span>
                <span className="hover:text-amber-600 hover:underline transition-colors cursor-pointer text-slate-500">Request Custom Quote</span>
            </div>
          </div>

          <div className="py-2">
            <h3 className="font-bold text-base text-slate-900 mb-3">About this item</h3>
            <ul className="list-disc pl-5 text-sm text-slate-800 space-y-2 mb-6">
              <li><strong>Premium Printing:</strong> High-fidelity color reproduction tailored for commercial {product.categoryLabel.toLowerCase()} products.</li>
              <li><strong>Customizable Configurations:</strong> Select precise quantity, paper stock, and dimensions in the order panel.</li>
              <li><strong>Minimum Order Quantity:</strong> This product requires a minimum order of 500 units.</li>
              <li><strong>Quality Assurance:</strong> Backed by our multi-point industrial inspection protocol.</li>
            </ul>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description} Utilize our world-class offset methodology to mass-produce your materials with unmatched reliability and cost-efficiency at scale.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-md">
                <Check className="w-4 h-4 text-emerald-600" /> Pre-Flight Check included
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-md">
                <Shield className="w-4 h-4 text-blue-600" /> ISO Certified Output
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-md">
                <Truck className="w-4 h-4 text-amber-600" /> Nationwide Freight dispatch
              </div>
            </div>
          </div>
        </div>

        {/* Right: Buy Box / Configuration */}
        <div className="w-full lg:w-3/12 flex flex-col shrink-0">
            <div className="border border-slate-200 rounded-xl p-5 shadow-sm bg-white sticky top-24">
                <div className="text-lg font-bold text-slate-900 mb-1">Order Configuration</div>
                <div className="text-xs text-slate-500 mb-5">Select volume & specs to lock in pricing</div>
                
                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Quantity</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all">
                            <option>100 copies</option>
                            <option>250 copies</option>
                            <option>500 copies (Most Popular)</option>
                            <option>1000 copies</option>
                            <option>Custom Volume</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Paper Stock</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all">
                            <option>100gsm Premium Matte</option>
                            <option>130gsm Glossy Art</option>
                            <option>120gsm Textured Soft</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">Base Finishing</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all">
                            <option>Standard Trim</option>
                            <option>Aqueous Coating</option>
                            <option>Gloss Lamination</option>
                        </select>
                    </div>

                    <div className="pt-5 space-y-3">
                        <button type="button" className="w-full flex items-center justify-center py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                            Add to Requisition
                        </button>
                        <button type="button" className="w-full flex items-center justify-center py-3 px-4 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-slate-900 text-sm font-bold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                            Calculate Direct Price
                        </button>
                    </div>

                    <div className="pt-4 text-[11px] text-slate-500 flex flex-col gap-2 border-t border-slate-100 mt-4">
                        <div className="flex justify-between items-center">
                            <span>Production Lead</span>
                            <span className="font-medium text-slate-700">5-7 Business Days</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Processing</span>
                            <span className="font-medium text-slate-700">Mani Offset 24/7 Facility</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Guarantee</span>
                            <span className="font-medium text-blue-600 hover:underline cursor-pointer">Zero-Defect Tolerances</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
