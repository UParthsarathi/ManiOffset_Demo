"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Books and Publications");

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All Products" || product.category === selectedCategory
  );

  const getProductCount = (categoryName: string) => {
    if (categoryName === "All Products") return products.length;
    return products.filter((p) => p.category === categoryName).length;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      {/* Search Header Banner */}
      <section className="bg-[#313140] text-white pt-24 pb-12 px-4 shadow-inner">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">What do you want to make?</h1>
          <p className="text-lg text-slate-300">Browse 30+ product types for fast online quotes!</p>
          
          <div className="max-w-2xl mx-auto relative mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-[#3d3d4e] border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Main Layout Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10">
        
        {/* Left Sidebar (Categories) */}
        <aside className="w-full md:w-64 shrink-0 space-y-1">
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 px-3">Categories</h3>
          <ul className="space-y-1">
            {categories.map((cat, idx) => {
              const count = getProductCount(cat.name);
              const isCurrent = selectedCategory === cat.name;
              return (
              <li key={idx}>
                <button
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-sm transition-colors ${
                    isCurrent 
                      ? "bg-[#222] text-white font-medium shadow-sm" 
                      : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[11px] ${isCurrent ? "text-slate-400" : "text-slate-400"}`}>{count}</span>
                </button>
              </li>
              );
            })}
          </ul>
        </aside>

        {/* Right Main Grid */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <span className="text-slate-600 text-sm">Showing <strong className="text-slate-900 font-semibold">{filteredProducts.length}</strong> products</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-sm">Sort by:</span>
              <select className="text-sm bg-white border border-slate-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#f29a1b] shadow-sm">
                <option>Alphabetical (A-Z)</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 rounded-[4px] cursor-pointer">
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                  <Image 
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1">{product.categoryLabel}</span>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#f29a1b] transition-colors">{product.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
