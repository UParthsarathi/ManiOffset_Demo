"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

// Mock Product Data integrated directly to avoid external sync issues for now
const PRODUCT_DATA = [
  {
    id: "p1",
    category: "BOOKS & PUBLICATIONS",
    title: "Hardcover Novels",
    image: "https://picsum.photos/seed/print_book_1/800/800",
    moq: 500,
    discount: 15,
  },
  {
    id: "p2",
    category: "BOOKS & PUBLICATIONS",
    title: "Paperback Anthologies",
    image: "https://picsum.photos/seed/print_book_2/800/800",
    moq: 250,
    discount: 20,
  },
  {
    id: "p3",
    category: "ACADEMIC & EDUCATIONAL",
    title: "University Textbooks",
    image: "https://picsum.photos/seed/print_text_1/800/800",
    moq: 1000,
    discount: 25,
  },
  {
    id: "p4",
    category: "ACADEMIC & EDUCATIONAL",
    title: "Student Workbooks",
    image: "https://picsum.photos/seed/print_text_2/800/800",
    moq: 500,
    discount: 10,
  },
  {
    id: "p5",
    category: "MARKETING & PROMOTIONAL",
    title: "Premium Brochures",
    image: "https://picsum.photos/seed/print_promo_1/800/800",
    moq: 1000,
    discount: 0,
  },
  {
    id: "p6",
    category: "BUSINESS & CORPORATE",
    title: "Company Reports",
    image: "https://picsum.photos/seed/print_corp_1/800/800",
    moq: 250,
    discount: 15,
  },
  {
    id: "p7",
    category: "BANKING & FINANCIAL",
    title: "Secure Ledgers",
    image: "https://picsum.photos/seed/print_bank_1/800/800",
    moq: 1000,
    discount: 5,
  },
  {
    id: "p8",
    category: "PRODUCT SUPPORT",
    title: "Instruction Manuals",
    image: "https://picsum.photos/seed/print_manual_1/800/800",
    moq: 2000,
    discount: 30,
  },
];

const CATEGORIES = [
  "BOOKS & PUBLICATIONS",
  "ACADEMIC & EDUCATIONAL",
  "MARKETING & PROMOTIONAL",
  "BUSINESS & CORPORATE",
  "BANKING & FINANCIAL",
  "PRODUCT SUPPORT",
  "ALL"
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("BOOKS & PUBLICATIONS");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((product) => {
      const matchCategory = activeCategory === "ALL" || product.category === activeCategory;
      const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-4 sm:px-6 md:px-12 xl:px-24" id="home-products">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[#f29a1b] font-bold text-[10px] sm:text-xs tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1e2363] tracking-tight">
            Premium Printing Services
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Browse through our printed products. Select any item to view details and request a customized price estimate.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="w-full overflow-x-auto scrollbar-hide border-b border-gray-200">
          <div className="flex w-max min-w-full justify-center md:gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-4 px-4 sm:px-6 font-bold text-[10px] sm:text-xs tracking-wider uppercase whitespace-nowrap transition-all border-b-2 ${
                  activeCategory === category
                    ? "border-[#f29a1b] text-[#f29a1b]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-bar: Showing results & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="uppercase font-mono text-[10px] sm:text-xs tracking-widest text-slate-400 font-bold">
            Showing <span className="text-slate-700">{filteredProducts.length}</span> High-Grade Wholesale Products
          </div>
          
          <div className="relative w-full sm:w-auto min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search specifications, paper types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-full text-sm outline-none focus:border-[#f29a1b] focus:ring-1 focus:ring-[#f29a1b] transition-all bg-white"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300 relative cursor-pointer"
            >
              {/* Product Info Badges Overlay */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.discount > 0 && (
                  <span className="bg-[#f29a1b] text-white text-[10px] font-black tracking-wider px-2 py-1 rounded-sm shadow-sm inline-block">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-slate-800 border border-slate-200 text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm uppercase shadow-sm inline-block">
                  MOQ {product.moq}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Block */}
              <div className="p-5 flex flex-col gap-2">
                <h4 className="font-sans font-bold text-lg text-[#1e2363] leading-tight">
                  {product.title}
                </h4>
                <p className="text-[10px] font-mono tracking-widest text-[#f29a1b] uppercase">
                  {product.category}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-[#1e2363] flex items-center gap-1 group/btn">
                    REQUEST QUOTE
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
             <div className="col-span-full py-12 text-center flex flex-col items-center justify-center">
               <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                 <Search className="w-8 h-8 text-slate-400" />
               </div>
               <h4 className="text-lg font-bold text-slate-800">No products found</h4>
               <p className="text-slate-500 text-sm mt-1">Try adjusting your category or search term.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
