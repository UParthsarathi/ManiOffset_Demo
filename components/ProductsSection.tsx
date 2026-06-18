"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products as PRODUCT_DATA, categories as dataCategories } from "@/lib/data";

const CATEGORIES = dataCategories.map(c => c.name);

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Books and Publications");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((product) => {
      const matchCategory = activeCategory === "All Products" || product.category === activeCategory;
      const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full bg-transparent py-12 px-2 sm:px-6 md:px-8 xl:px-12 relative z-10" id="home-products">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Header Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
            <span className="text-amber-600 font-bold text-xs tracking-[0.2em] uppercase font-mono">
              Our Products
            </span>
            <span className="w-8 h-[1px] bg-amber-500/50"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-slate-900 tracking-tight"
          >
            Premium Printing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-2"
          >
            Browse our curated library of high-grade printed products. Select any item to view detailed specifications and request a customized price estimate.
          </motion.p>
        </div>

        {/* Category Filters - Wrapping Chip Cloud */}
        <div className="w-full relative py-2 sm:mb-0">
          <div className="flex flex-wrap w-full justify-center gap-2 sm:gap-3 pb-4">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full font-mono text-[10px] sm:text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-slate-900 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-bold">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub-bar: Showing results & Search */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6 border-b border-slate-200/60 pb-4 sm:pb-6 mt-2">
          <div className="uppercase font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 w-full text-center sm:text-left">
            Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> Products
          </div>
          
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-slate-400" />
            <input 
              type="text" 
              placeholder="Search specifications, paper types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 border border-slate-200 rounded-full text-sm outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all bg-white font-sans text-slate-700 shadow-sm appearance-none"
            />
          </div>
        </div>

        {/* Product Grid - Approach 1: High Density Scannable Layout */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 pt-4 sm:pt-2">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={product.id} 
              >
                <div onClick={() => window.location.href = `/product/${product.id}`} className="group cursor-pointer flex flex-col h-full">
                  {/* Image Container - Square for density */}
                  <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-slate-100 rounded-lg mb-3 shadow-sm border border-slate-100/50">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                  </div>

                  {/* Content - Tight Spacing */}
                  <div className="flex flex-col text-left px-0.5 sm:px-1">
                    <p className="text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase mb-1 sm:mb-0.5 truncate">
                      {product.categoryLabel}
                    </p>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                      {product.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="col-span-full py-20 text-center flex flex-col items-center justify-center"
             >
               <div className="bg-white shadow-sm border border-slate-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                 <Search className="w-8 h-8 text-slate-300" />
               </div>
               <h4 className="text-xl font-serif font-bold text-slate-800">No matching products found</h4>
               <p className="text-slate-500 font-light mt-2 max-w-sm mx-auto">Try adjusting your filters or search term to discover different printing options.</p>
             </motion.div>
          )}
        </motion.div>
        
        {/* Sync link to all products */}
        <div className="flex justify-center mt-4">
          <Link href={`/products?category=${encodeURIComponent(activeCategory)}`} className="text-sm font-semibold text-[#005fb3] hover:underline flex items-center gap-1 group">
            View all {activeCategory} options <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
