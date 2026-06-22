// @ts-nocheck
"use client";

import { useEffect, useState, useRef, forwardRef, useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products, categories as allCategories } from "@/lib/data";
import { X } from "lucide-react";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  (props, ref) => {
    return (
      <div className="page bg-[#0b0d14] relative overflow-hidden pointer-events-auto border-r border-white/5" ref={ref} data-density="hard">
        <div className="page-content absolute inset-0 w-full h-full">
          {props.children}
        </div>
      </div>
    );
  }
);
Page.displayName = "Page";

export function MobileFlipBook({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const bookRef = useRef<any>(null);
  const touchStartRef = useRef<{x: number, y: number, time: number} | null>(null);

  const handleItemClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  // Filter out empty categories, memoized for performance
  const validCategories = useMemo(() => {
    return allCategories
      .filter(c => c.name !== "All Products")
      .map(c => ({
        ...c,
        items: products.filter(p => p.category === c.name)
      }))
      .filter(c => c.items.length > 0);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || !bookRef.current || e.changedTouches.length === 0) return;
    
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    const dt = Date.now() - touchStartRef.current.time;

    // Detect horizontal swipe (must be mostly horizontal, fast enough, and past threshold)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40 && dt < 600) {
      const flip = bookRef.current.pageFlip();
      if (flip) {
        try {
          if (flip.getState() === 'flipping') {
            touchStartRef.current = null;
            return;
          }
        } catch (e) {}

        const currentIndex = flip.getCurrentPageIndex();
        const pageCount = flip.getPageCount();

        if (dx < 0) {
          // Swipe left -> Next Page
          if (currentIndex >= pageCount - 1) {
            if (onClose) onClose();
          } else {
            flip.flipNext();
          }
        } else {
          // Swipe right -> Previous Page 
          if (currentIndex <= 0) {
            if (onClose) onClose();
          } else {
            flip.flipPrev();
          }
        }
      }
    }
    
    touchStartRef.current = null;
  };

  return (
    <div 
        className="fixed inset-0 z-[100] bg-[#020513] overflow-hidden flex items-center justify-center " 
        id="mobile-3d-booklet"
    >
      {/* Decorative Ambient Lighting */}
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="fixed top-0 left-0 right-0 p-4 pt-6 flex justify-between items-center z-[110] pointer-events-none">
        <div>
           <div className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-[#d4af37] mb-1 drop-shadow-md">Feel the Print</div>
        </div>
        <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white transition-colors pointer-events-auto shadow-xl cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="fixed bottom-8 flex justify-center w-full z-[110] pointer-events-none">
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur border border-white/5 shadow-2xl">
            Swipe left/right to flip
        </span>
      </div>

      {/* Main Flipbook wrapper */}
      <div 
        className="w-full h-full pt-20 pb-24 px-4 flex justify-center items-center perspective-[2000px] relative z-[80]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <HTMLFlipBook 
          ref={bookRef}
          width={330} 
          height={550} 
          size="stretch"
          minWidth={280}
          maxWidth={480}
          minHeight={400}
          maxHeight={750}
          maxShadowOpacity={0.8}
          showCover={true}
          mobileScrollSupport={false} 
          useMouseEvents={false} 
          usePortrait={true}
          flippingTime={700}
          disableFlipByClick={true} // still disabled to avoid accidental taps turning
          className="flip-book shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Cover Page */}
          <Page>
             <div className="absolute inset-0 bg-[#0b0d14] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#0b0d14] to-[#121622]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-transparent to-transparent opacity-80" />
                <div className="absolute top-0 bottom-0 left-0 w-[12px] bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none z-20" />
                {/* Replaced heavy SVG turbulence with a lightweight static background or removed it to prevent animation lag */}
                
                {/* Book Cover Frame */}
                <div className="absolute inset-[10px] border border-[#d4af37]/20 rounded-sm z-10 pointer-events-none" />
                <div className="absolute inset-[14px] border border-[#d4af37]/10 rounded-sm z-10 pointer-events-none" />
                
                <div className="p-8 h-full flex flex-col justify-center relative z-20 text-white font-serif text-center">
                  <div className="flex flex-col items-center mb-10">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6" />
                    <div className="text-[12px] uppercase tracking-[0.4em] font-sans font-bold text-[#d4af37]">Catalogue</div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-medium leading-[1.15] tracking-tight mb-8 text-white relative">
                    The Product<br/>Showroom
                  </div>
                  <p className="text-white/50 font-sans text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] leading-relaxed mt-6 mx-auto max-w-[85%]">
                    Flip pages to explore bespoke collections.
                  </p>
                  
                  <div className="mt-20 flex items-center justify-center gap-4">
                    <div className="text-[10px] font-sans text-white/40 font-semibold uppercase tracking-[0.3em]">Est. 1995</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
                    <div className="text-[10px] font-sans text-white/40 font-semibold uppercase tracking-[0.3em]">Edition 04</div>
                  </div>
                </div>
             </div>
          </Page>

          {/* Category Pages */}
          {validCategories.map((category, catIdx) => (
            <Page key={category.name}>
              <div className="w-full h-full bg-[#0b0d14] relative overflow-hidden flex flex-col border-y border-r border-[#d4af37]/10">
                <div className="absolute top-0 bottom-0 left-0 w-[16px] bg-gradient-to-r from-black/80 via-black/10 to-transparent pointer-events-none z-30" />
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#d4af37]/5 blur-[60px] " />
                
                {/* Page Header */}
                <div className="relative z-20 pt-8 px-6 pb-4 border-b border-white/5 shrink-0 bg-[#0b0d14]/95 pl-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#d4af37] font-sans text-[10px] uppercase tracking-[0.25em] font-semibold">
                      {String(catIdx + 1).padStart(2, '0')} {"// CATEGORY"}
                    </span>
                  </div>
                  <h2 className="text-white font-serif text-2xl sm:text-3xl leading-tight opacity-90 truncate pr-2">{category.name}</h2>
                </div>

                {/* Scrollable Content inside the flip page */}
                <div 
                   className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 pb-12 relative z-20 space-y-4 pl-8" 
                   style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
                   onTouchStart={(e) => {
                     e.currentTarget.setAttribute('data-touch-x', e.touches[0].clientX.toString());
                     e.currentTarget.setAttribute('data-touch-y', e.touches[0].clientY.toString());
                     e.currentTarget.setAttribute('data-is-scrolling', 'unknown');
                   }}
                   onTouchMove={(e) => {
                     let isScrolling = e.currentTarget.getAttribute('data-is-scrolling');
                     
                     if (isScrolling === 'unknown') {
                       const startX = parseFloat(e.currentTarget.getAttribute('data-touch-x') || '0');
                       const startY = parseFloat(e.currentTarget.getAttribute('data-touch-y') || '0');
                       const dx = Math.abs(e.touches[0].clientX - startX);
                       const dy = Math.abs(e.touches[0].clientY - startY);
                       
                       if (dx > 5 || dy > 5) {
                         if (dy > dx) {
                           e.currentTarget.setAttribute('data-is-scrolling', 'yes');
                           isScrolling = 'yes';
                         } else {
                           e.currentTarget.setAttribute('data-is-scrolling', 'no');
                           isScrolling = 'no';
                         }
                       }
                     }
                     
                     // If we confirmed vertical scroll, stop propagation so pageflip doesn't grab it
                     if (isScrolling === 'yes') {
                       e.stopPropagation();
                     }
                   }}
                >
                  {category.items.map((item, idx) => (
                    <div 
                      key={item.id}
                      onClick={(e) => { e.stopPropagation(); handleItemClick(item.id); }}
                      className="group flex flex-row items-center gap-3 bg-[#131622] border border-white/5 rounded-xl p-2 sm:p-3 overflow-hidden active:scale-[0.98] transition-transform duration-200 cursor-pointer shadow-md relative"
                      style={{ willChange: "transform" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 opacity-0 active:opacity-100 transition-opacity" />
                      <div className="w-[70px] h-[90px] sm:w-[80px] sm:h-[100px] relative rounded-lg overflow-hidden shrink-0 bg-[#020513] border border-white/5">
                         <Image 
                           src={item.imageUrl || `https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800`}
                           alt={item.title}
                           fill
                           sizes="(max-width: 768px) 80px, 120px"
                           className="object-cover"
                         />
                      </div>
                      <div className="flex flex-col flex-1 py-1 h-full justify-center pr-1 relative z-10 transition-colors">
                        <span className="text-white/60 text-[9px] font-bold font-sans uppercase tracking-[0.2em] mb-1.5 transition-colors group-active:text-[#d4af37]/80">
                          Item {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-white font-serif text-[15px] sm:text-[16px] leading-tight mb-2 opacity-100 line-clamp-2 transition-colors group-active:text-[#d4af37]">
                          {item.title}
                        </h3>
                        <div className="mt-auto flex items-center gap-2 opacity-80 group-active:opacity-100 transition-opacity">
                           <div className="w-3 h-[1px] bg-[#d4af37]" />
                           <span className="text-[#d4af37] text-[9px] uppercase tracking-[0.2em] font-bold">Details</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Space at the bottom of inner scroll to ensure all content is reachable */}
                  <div className="h-4 w-full text-center opacity-30 mt-8 mb-6">
                     <span className="text-[10px] text-[#d4af37] font-serif italic text-center w-full block">End of Category</span>
                  </div>
                </div>
                
                {/* Page Number indicator inside flipbook */}
                <div className="absolute bottom-4 right-5 z-20 opacity-40">
                   <span className="font-sans text-[10px] font-bold text-[#d4af37]">{catIdx + 1}</span>
                </div>
              </div>
            </Page>
          ))}

          {/* Back Cover */}
          <Page>
             <div className="absolute inset-0 bg-[#0b0d14] border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center p-8">
                <div className="absolute top-0 bottom-0 left-0 w-[16px] bg-gradient-to-r from-black/80 via-black/10 to-transparent pointer-events-none z-30" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-[#0b0d14] to-[#050608]" />
                
                {/* Back Cover Frame */}
                <div className="absolute inset-[10px] border border-[#d4af37]/10 rounded-sm z-10 pointer-events-none" />
                
                <div className="relative z-20 flex flex-col items-center pl-4">
                    <div className="w-8 h-[1px] bg-[#d4af37]/40 mb-8" />
                    <span className="font-serif text-white/50 text-[24px] tracking-wide mb-3 opacity-80 mix-blend-plus-lighter">feeltheprint.</span>
                    <div className="flex flex-col items-center gap-3 mt-6">
                       <span className="text-[#d4af37]/60 text-[9px] uppercase tracking-[0.4em] font-sans font-bold">Studio Edition {"//"} 04</span>
                       <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-sans mt-2">Crafted with precision</span>
                    </div>
                </div>
            </div>
          </Page>

        </HTMLFlipBook>
      </div>
    </div>
  );
}
