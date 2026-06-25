"use client";

import React, { useState, useEffect, Suspense, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { categories as defaultCategories, products } from "@/lib/data";
import { ArrowRight, Search, ChevronDown } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (categoryParam && defaultCategories.some(c => c.name === categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedCategory, searchQuery]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Products": products.length
    };
    
    products.forEach(p => {
      if (!counts[p.category]) {
        counts[p.category] = 0;
      }
      counts[p.category]++;
    });
    
    return counts;
  }, []);

  const displayCategories = [
    { name: "All Products" },
    ...defaultCategories.filter(c => c.name !== "All Products")
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] font-sans">
      <Navbar />
      
      {/* Dark Header Hero */}
      <section className="pt-32 pb-16 px-4 bg-[#2f3241] text-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          What do you want to make?
        </h1>
        <p className="text-lg text-slate-400 mb-8 font-light">
          Browse 30+ product types for fast online quotes!
        </p>
        
        <div className="w-full max-w-2xl relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-colors"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white shadow-sm my-0 min-h-[600px] flex flex-col md:flex-row gap-10">
        
        {/* Left Sidebar: Categories */}
        <aside className="w-full md:w-64 shrink-0">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Categories</h3>
          <ul className="space-y-1">
            {displayCategories.map((cat, idx) => {
              const isCurrent = selectedCategory === cat.name;
              const count = categoryCounts[cat.name] || 0;
              
              // Skip empty categories unless it's All Products
              if (count === 0 && cat.name !== "All Products") return null;

              return (
                <li key={idx}>
                  <button
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isCurrent 
                        ? "bg-[#1e1e1e] text-white" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className={`text-xs ${isCurrent ? 'text-slate-400' : 'text-slate-400'}`}>
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Right Content: Products */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-slate-100">
            <div className="text-sm text-slate-600 mb-4 sm:mb-0">
              Showing <strong className="text-slate-900 font-medium">{filteredProducts.length}</strong> products
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-500">Sort by:</span>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded text-slate-700 bg-white hover:bg-slate-50">
                Alphabetical (A-Z)
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
             <div className="py-20 text-center text-slate-500">No products found matching your criteria.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] w-full bg-[#f8f9fa] border-b border-slate-100 p-6 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image 
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-1">
                      {product.description}
                    </p>
                    
                    {/* Bottom Action */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-emerald-600">
                        Instant Quote
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
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

