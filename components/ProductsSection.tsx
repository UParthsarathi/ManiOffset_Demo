"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight } from "lucide-react";

// Mock Product Data integrated directly to avoid external sync issues for now
const PRODUCT_DATA = [
  // BOOKS & PUBLICATIONS
  { id: "p1", category: "BOOKS & PUBLICATIONS", title: "Softcover Books", image: "https://picsum.photos/seed/softcover/800/800", moq: 500, discount: 10 },
  { id: "p2", category: "BOOKS & PUBLICATIONS", title: "Hardcover Books", image: "https://picsum.photos/seed/hardcover/800/800", moq: 250, discount: 15 },
  { id: "p3", category: "BOOKS & PUBLICATIONS", title: "Magazines and Journals", image: "https://picsum.photos/seed/magazines/800/800", moq: 1000, discount: 5 },
  { id: "p4", category: "BOOKS & PUBLICATIONS", title: "Comics and Graphic Novels", image: "https://picsum.photos/seed/comics/800/800", moq: 500, discount: 0 },
  { id: "p5", category: "BOOKS & PUBLICATIONS", title: "Religious and Spiritual Books", image: "https://picsum.photos/seed/religious/800/800", moq: 1000, discount: 20 },

  // ACADEMIC & EDUCATIONAL
  { id: "p6", category: "ACADEMIC & EDUCATIONAL", title: "Textbooks & Guides", image: "https://picsum.photos/seed/textbooks/800/800", moq: 1000, discount: 15 },
  { id: "p7", category: "ACADEMIC & EDUCATIONAL", title: "School Notebooks", image: "https://picsum.photos/seed/notebooks/800/800", moq: 2000, discount: 25 },
  { id: "p8", category: "ACADEMIC & EDUCATIONAL", title: "Academic Diaries", image: "https://picsum.photos/seed/diaries/800/800", moq: 500, discount: 10 },
  { id: "p9", category: "ACADEMIC & EDUCATIONAL", title: "Record Books", image: "https://picsum.photos/seed/records/800/800", moq: 500, discount: 0 },
  { id: "p10", category: "ACADEMIC & EDUCATIONAL", title: "Application Forms", image: "https://picsum.photos/seed/forms/800/800", moq: 5000, discount: 30 },
  { id: "p11", category: "ACADEMIC & EDUCATIONAL", title: "Report Cards & Certificates", image: "https://picsum.photos/seed/certificates/800/800", moq: 1000, discount: 5 },
  { id: "p12", category: "ACADEMIC & EDUCATIONAL", title: "Educational Charts", image: "https://picsum.photos/seed/charts/800/800", moq: 500, discount: 0 },

  // MARKETING & PROMOTIONAL
  { id: "p13", category: "MARKETING & PROMOTIONAL", title: "Flyers & Leaflets", image: "https://picsum.photos/seed/flyers/800/800", moq: 5000, discount: 40 },
  { id: "p14", category: "MARKETING & PROMOTIONAL", title: "Brochures and Booklets", image: "https://picsum.photos/seed/brochures/800/800", moq: 1000, discount: 15 },
  { id: "p15", category: "MARKETING & PROMOTIONAL", title: "Product Catalogues", image: "https://picsum.photos/seed/catalogues/800/800", moq: 500, discount: 10 },
  { id: "p16", category: "MARKETING & PROMOTIONAL", title: "Monthly Wall Calendars", image: "https://picsum.photos/seed/calendars/800/800", moq: 1000, discount: 20 },
  { id: "p17", category: "MARKETING & PROMOTIONAL", title: "Corporate Invitations", image: "https://picsum.photos/seed/invitations/800/800", moq: 250, discount: 0 },
  { id: "p18", category: "MARKETING & PROMOTIONAL", title: "Postcards", image: "https://picsum.photos/seed/postcards/800/800", moq: 1000, discount: 5 },

  // BUSINESS & CORPORATE
  { id: "p19", category: "BUSINESS & CORPORATE", title: "Visiting Cards", image: "https://picsum.photos/seed/visiting/800/800", moq: 1000, discount: 10 },
  { id: "p20", category: "BUSINESS & CORPORATE", title: "Letterheads and Envelopes", image: "https://picsum.photos/seed/letterheads/800/800", moq: 2000, discount: 15 },
  { id: "p21", category: "BUSINESS & CORPORATE", title: "Business Planners", image: "https://picsum.photos/seed/planners/800/800", moq: 250, discount: 0 },
  { id: "p22", category: "BUSINESS & CORPORATE", title: "Company Folders", image: "https://picsum.photos/seed/folders/800/800", moq: 500, discount: 5 },
  { id: "p23", category: "BUSINESS & CORPORATE", title: "Certificates & Awards", image: "https://picsum.photos/seed/awards/800/800", moq: 100, discount: 0 },

  // BANKING & FINANCIAL
  { id: "p24", category: "BANKING & FINANCIAL", title: "Passbooks", image: "https://picsum.photos/seed/passbooks/800/800", moq: 5000, discount: 25 },
  { id: "p25", category: "BANKING & FINANCIAL", title: "Challans & Deposit Slips", image: "https://picsum.photos/seed/challans/800/800", moq: 10000, discount: 35 },
  { id: "p26", category: "BANKING & FINANCIAL", title: "Banking Forms", image: "https://picsum.photos/seed/bankingforms/800/800", moq: 10000, discount: 30 },

  // PRODUCT SUPPORT MATERIALS
  { id: "p27", category: "PRODUCT SUPPORT MATERIALS", title: "Instruction Manuals", image: "https://picsum.photos/seed/manuals/800/800", moq: 2000, discount: 15 },
  { id: "p28", category: "PRODUCT SUPPORT MATERIALS", title: "Product Inserts", image: "https://picsum.photos/seed/inserts/800/800", moq: 5000, discount: 20 },
  { id: "p29", category: "PRODUCT SUPPORT MATERIALS", title: "Warranty & Service Cards", image: "https://picsum.photos/seed/warranty/800/800", moq: 2000, discount: 10 },
];

const CATEGORIES = [
  "BOOKS & PUBLICATIONS",
  "ACADEMIC & EDUCATIONAL",
  "MARKETING & PROMOTIONAL",
  "BUSINESS & CORPORATE",
  "BANKING & FINANCIAL",
  "PRODUCT SUPPORT MATERIALS",
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

        {/* Category Filters - Wrap Layout for better UX (No Scrollbar) */}
        <div className="w-full relative py-2">
          <div className="flex flex-wrap w-full justify-center gap-2 sm:gap-3 pb-4">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap transition-colors duration-300 ${
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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-slate-200/60 pb-6">
          <div className="uppercase font-mono text-xs tracking-widest text-slate-400">
            Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> Products
          </div>
          
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
            <input 
              type="text" 
              placeholder="Search specifications, paper types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-full text-sm outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all bg-white font-sans text-slate-700 shadow-sm"
            />
          </div>
        </div>

        {/* Product Grid - Approach 1: High Density Scannable Layout */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={product.id} 
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container - Square for density */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 rounded-lg mb-3 shadow-sm border border-slate-100/50">
                  {/* Badges - Ultracompact */}
                  <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {product.discount > 0 && (
                      <span className="bg-amber-500 text-white font-mono text-[8px] sm:text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded shadow-sm inline-block">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-white/90 backdrop-blur text-slate-800 font-mono text-[8px] sm:text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded uppercase shadow-sm inline-block">
                      MOQ {product.moq}
                    </span>
                  </div>

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </div>

                {/* Content - Tight Spacing */}
                <div className="flex flex-col text-left px-1">
                  <p className="text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase mb-0.5 truncate">
                    {product.category}
                  </p>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-snug group-hover:text-amber-600 transition-colors duration-200 line-clamp-2">
                    {product.title}
                  </h4>
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
      </div>
    </section>
  );
}
