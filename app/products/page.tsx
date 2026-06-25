"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { categories, products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    if (categoryParam && categories.some(c => c.name === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All Products" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      
      {/* Editorial Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">
            The Catalogue
          </h1>
          <p className="text-lg text-slate-500 font-light leading-relaxed max-w-2xl">
            Explore our comprehensive range of high-fidelity offset printing capabilities. From bespoke editorial pieces to industrial-scale packaging, crafted with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Sticky Horizontal Navigation */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat, idx) => {
              const isCurrent = selectedCategory === cat.name;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors pb-4 -mb-4 border-b-2 ${
                    isCurrent 
                      ? "border-amber-500 text-slate-900" 
                      : "border-transparent text-slate-400 hover:text-slate-900"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Premium Product Grid */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        {filteredProducts.length === 0 ? (
           <div className="py-20 text-center text-slate-500">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group block">
                <div className="relative aspect-[4/3] w-full bg-[#f8f9fa] rounded-2xl overflow-hidden mb-6 border border-slate-100">
                  <Image 
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/[0.02] transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                      {product.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0">
                      <ArrowRight className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {product.categoryLabel}
                  </span>
                  <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed pr-6">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}

