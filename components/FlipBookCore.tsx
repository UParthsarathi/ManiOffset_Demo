// @ts-nocheck
"use client";

import { useEffect, useState, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "@/lib/data";
import { X } from "lucide-react";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; number?: number }>(
  (props, ref) => {
    return (
      <div className="page bg-white shadow-xl overflow-hidden pointer-events-auto relative" ref={ref} data-density="hard">
        <div className="page-content absolute inset-0 w-full h-full">
          {props.children}
        </div>
      </div>
    );
  }
);
Page.displayName = "Page";

const CategoryList = ({ category, selectedItem, onSelect, onItemClick, subtitle, isDark = true, spine = "left" }: any) => (
  <div className={`w-full h-full p-4 sm:p-5 md:p-7 flex flex-col relative overflow-hidden shadow-inner ${isDark ? 'bg-[#0b0d14] text-white border-white/5' : 'bg-[#f4f3ef] text-[#1a1a1a] border-black/5'} border`}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className={`absolute top-0 bottom-0 w-12 md:w-20 pointer-events-none z-10 ${spine === 'right' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} ${isDark ? 'from-black/80 via-black/20 to-transparent' : 'from-black/[0.12] via-black/[0.03] to-transparent'}`} />
      
      <div className={`relative z-20 h-full flex flex-col items-start text-left`}>
         <div className={`flex items-center gap-4 mb-3 md:mb-5 w-full justify-start`}>
           <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.3em] font-semibold font-sans ${isDark ? 'text-[#d4af37]' : 'text-[#9c7c38]'}`}>
              {subtitle}
           </span>
           <div className={`flex-1 h-[1px] opacity-30 ${isDark ? 'bg-gradient-to-r from-[#d4af37] to-transparent' : 'bg-gradient-to-r from-[#9c7c38] to-transparent'}`} />
         </div>
         
         <div className="w-full flex-1 flex flex-col justify-start gap-2 mt-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
               <div className="mb-2 w-full flex-1 flex flex-col items-start pr-2">
                 <h3 className={`text-lg sm:text-xl md:text-2xl font-serif font-medium mb-3 sm:mb-5 leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`}>
                   {category.title}
                 </h3>
                 <div className="flex flex-col w-full">
                   {category.items.map((item: any, idx: number) => (
                     <div 
                       key={item.id} 
                       onMouseEnter={() => onSelect(item)}
                       onClick={(e) => { 
                         e.stopPropagation(); 
                         if (onItemClick) onItemClick(item); 
                       }}
                       className={`group flex items-center w-full py-1.5 sm:py-2.5 border-b ${isDark ? 'border-white/10' : 'border-black/10'} pointer-events-auto transition-all duration-500 cursor-pointer ${idx === 0 ? 'border-t' : ''}`}
                     >
                        <span className={`text-[8px] sm:text-[9px] md:text-[10px] font-sans font-bold tracking-[0.15em] transition-all duration-500 w-6 sm:w-8 ${selectedItem?.id === item.id ? (isDark ? 'text-[#d4af37] opacity-100' : 'text-[#9c7c38] opacity-100') : (isDark ? 'text-white/60 group-hover:text-[#d4af37]/80' : 'text-black/60 group-hover:text-[#d4af37]/80')}`}>
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className={`text-[12px] sm:text-[14px] md:text-[16px] font-serif transition-colors duration-300 flex-1 pl-1 sm:pl-2 ${selectedItem?.id === item.id ? (isDark ? 'text-[#d4af37] transform translate-x-1 sm:translate-x-2' : 'text-[#d4af37] transform translate-x-1 sm:translate-x-2 font-medium') : (isDark ? 'text-white group-hover:text-[#d4af37]/90 group-hover:translate-x-1' : 'text-black group-hover:text-[#d4af37]/90 group-hover:translate-x-1')}`}>
                          {item.title}
                        </span>
                        
                        <span className={`text-[7px] sm:text-[8px] font-sans font-semibold tracking-[0.2em] transition-all duration-500 transform ${selectedItem?.id === item.id ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0 group-hover:-translate-x-1 group-hover:opacity-0'} ${isDark ? 'text-[#d4af37]' : 'text-[#9c7c38]'}`}>
                          VIEW
                        </span>
                     </div>
                   ))}
                 </div>
               </div>
         </div>

         <div className={`mt-auto pt-6 w-full flex justify-between items-center opacity-60 ${isDark ? 'border-white/10' : 'border-black/10'} border-t`}>
            <span className={`font-serif text-[9px] sm:text-[10px] tracking-widest italic ${isDark ? 'text-white' : 'text-black'}`}>feeltheprint.</span>
            <span className={`font-sans text-[7px] sm:text-[8px] tracking-[0.25em] uppercase font-semibold ${isDark ? 'text-white' : 'text-black'}`}>Est. 1995</span>
         </div>
      </div>
  </div>
);

const ImageDisplay = ({ item, subtitle, onItemClick, isDark = false, spine = "right" }: any) => (
  <div className={`w-full h-full p-4 sm:p-5 md:p-7 flex flex-col relative overflow-hidden shadow-inner ${isDark ? 'bg-[#020513] text-white border-white/10' : 'bg-[#f4f7f9] text-slate-900 border-black/5'} border`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className={`absolute top-0 bottom-0 w-8 md:w-12 pointer-events-none z-10 ${spine === 'right' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} ${isDark ? 'from-black/40 to-transparent' : 'from-black/[0.08] to-transparent'}`} />
      
      <div className={`relative z-20 h-full flex flex-col items-start text-left`}>
         <div className={`flex items-center justify-between mb-3 w-full`}>
           <div className="flex items-center gap-2">
             <div className={`w-3 h-[1px] md:w-5 ${isDark ? 'bg-[#f29a1b]' : 'bg-blue-600'}`} />
             <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.25em] font-bold ${isDark ? 'text-[#f29a1b]' : 'text-blue-600'}`}>
                {subtitle}
             </span>
           </div>
         </div>

         {item && (
           <div 
             className="w-full h-full flex-1 flex flex-col relative rounded-md overflow-hidden bg-slate-200 border border-black/10 shadow-sm mt-2 mb-4 cursor-pointer group"
             onClick={(e) => {
               e.stopPropagation();
               if (onItemClick) onItemClick(item);
             }}
           >
              <Image 
                src={item.imageUrl || `https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                unoptimized={false}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left pointer-events-none z-10">
                <span className="text-[8px] uppercase tracking-widest text-[#f29a1b] font-bold mb-1 block">Selected Product</span>
                <h4 className="text-white font-serif font-bold text-sm leading-tight drop-shadow-md">
                   {item.title}
                </h4>
              </div>
           </div>
         )}
      </div>
  </div>
);


export function FlipBookCore({ onClose }: { onClose?: () => void }) {
  const router = useRouter();
  const bookRef = useRef<any>(null);
  const lastWheelTime = useRef(0);

  const handleItemClick = (item: any) => {
    // Optionally close the flipbook modal before navigating
    // if (onClose) onClose(); 
    // Not closing automatically as they might go back and resume where they left off
    router.push(`/product/${item.id}`);
  };

  const handleWheel = (e: React.WheelEvent) => {
     // Prevent default scrolling on the body to avoid page jumps entirely.
     // Flip logic with a throttle of 900ms.
     const now = Date.now();
     if (now - lastWheelTime.current < 900) return;
     
     const flipBook = bookRef.current?.pageFlip();
     if (!flipBook) return;

     if (e.deltaY > 20) {
        let currentPage = 0;
        let pageCount = 0;
        try {
           currentPage = flipBook.getCurrentPageIndex();
           pageCount = flipBook.getPageCount();
        } catch (err) {
           // Fallback if methods fail
        }

        if (pageCount > 0 && currentPage >= pageCount - 2) {
           if (onClose) onClose();
        } else {
           flipBook.flipNext();
           lastWheelTime.current = now;
        }
     } else if (e.deltaY < -20) {
        flipBook.flipPrev();
        lastWheelTime.current = now;
     }
  };

  const academicItems = products.filter(p => p.category === "Academic and Educational");
  const categories = {
    c1: { title: "Books & Publications", name: "Books and Publications", subtitle: "01 // Category", items: products.filter(p => p.category === "Books and Publications") },
    c2: { title: "Academic & Educational", name: "Academic and Educational", subtitle: "02 // Category", items: products.filter(p => p.category === "Academic and Educational") },
    c3: { title: "Marketing & Promotional", name: "Marketing and Promotional Materials", subtitle: "03 // Category", items: products.filter(p => p.category === "Marketing and Promotional Materials") },
    c4: { title: "Business & Corporate", name: "Business and Corporate", subtitle: "04 // Category", items: products.filter(p => p.category === "Business and Corporate") },
    c5: { title: "Banking & Financial", name: "Banking and Financial", subtitle: "05 // Category", items: products.filter(p => p.category === "Banking and Financial") },
    c6: { title: "Product Support Materials", name: "Product Support Materials", subtitle: "06 // Category", items: products.filter(p => p.category === "Product Support Materials") }
  };

  const [spread1Item, setSpread1Item] = useState(categories.c1.items[0]);
  const [spread2Item, setSpread2Item] = useState(categories.c2.items[0]);
  const [spread3Item, setSpread3Item] = useState(categories.c3.items[0]);
  const [spread4Item, setSpread4Item] = useState(categories.c4.items[0]);
  const [spread5Item, setSpread5Item] = useState(categories.c5.items[0]);
  const [spread6Item, setSpread6Item] = useState(categories.c6.items[0]);

  return (
    <div 
        className="fixed inset-0 z-[100] bg-[#020513] overflow-hidden flex items-center justify-center overscroll-none" 
        id="immersive-3d-booklet"
        onWheel={handleWheel}
    >
      {/* Decorative Ambient Lighting */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="fixed top-0 right-0 w-[40vmax] h-[40vmax] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-end z-[110] pointer-events-none">
        <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white transition-colors pointer-events-auto shadow-xl cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="fixed bottom-8 flex justify-center w-full z-50 pointer-events-none">
        <span className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full backdrop-blur border border-white/5">
            Swipe up and down to turn pages
        </span>
      </div>

      <div 
         className="w-[65vw] sm:w-[65vw] max-w-[825px] h-[55vh] sm:h-[60vh] max-h-[560px] flex justify-center items-center perspective-[2000px] relative z-[80] my-auto"
      >
        <HTMLFlipBook 
          ref={bookRef}
          width={300} 
          height={450} 
          size="stretch"
          minWidth={210}
          maxWidth={375}
          minHeight={285}
          maxHeight={525}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={800}
          disableFlipByClick={true}
          className="flip-book shadow-2xl"
        >
          {/* Cover */}
          <Page>
             <div className="absolute inset-0 bg-[#0b0d14] shadow-[20px_40px_80px_rgba(0,0,0,0.85)] border-l border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050608] via-[#0b0d14] to-[#121622]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-transparent to-transparent opacity-70" />
                <div className="absolute top-0 bottom-0 left-0 w-[24px] bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none z-20" />
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                
                {/* Book Cover Frame */}
                <div className="absolute inset-[12px] md:inset-[16px] border border-[#d4af37]/20 rounded-sm z-10 pointer-events-none" />
                <div className="absolute inset-[16px] md:inset-[20px] border border-[#d4af37]/10 rounded-sm z-10 pointer-events-none" />
                
                <div className="pl-10 md:pl-12 p-8 sm:p-10 md:p-12 h-full flex flex-col justify-between relative z-10 text-white font-serif">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent" />
                      <div className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-sans font-bold text-[#d4af37]">Feel the Print</div>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-[34px] font-medium leading-[1.1] tracking-tight mb-8 text-white pb-8 border-b border-white/10 relative">
                      The Product<br/>Showroom
                      <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-[#d4af37]" />
                    </div>
                    <p className="text-white/50 font-sans text-[7px] md:text-[8px] max-w-[85%] font-medium uppercase tracking-[0.2em] leading-relaxed mt-6">
                      Explore bespoke collections of professional offsets & fine art prints.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="text-[7px] md:text-[8px] font-sans text-white/40 font-semibold uppercase tracking-[0.3em]">Est. 1995</div>
                        <div className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
                        <div className="text-[7px] md:text-[8px] font-sans text-white/40 font-semibold uppercase tracking-[0.3em]">Edition 04</div>
                      </div>
                  </div>
                </div>
             </div>
          </Page>
          
          {/* Inside Cover (Left Page) */}
          <Page>
             <div className="w-full h-full bg-[#f8fafc]">
               <ImageDisplay item={spread1Item} subtitle="01 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
             </div>
          </Page>

          {/* Spread 1: Category 1 (Right Page) */}
          <Page>
            <div className="w-full h-full bg-[#020513] text-white">
              <CategoryList subtitle="01 // Categories" category={categories.c1} selectedItem={spread1Item} onSelect={setSpread1Item} onItemClick={handleItemClick} isDark={true} spine="left" />
            </div>
          </Page>

          {/* Spread 2: Category 2 (Left Page) */}
          <Page>
            <div className="w-full h-full bg-[#f8fafc]">
              <ImageDisplay item={spread2Item} subtitle="02 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
            </div>
          </Page>

          <Page>
            <div className="w-full h-full bg-[#020513] text-white">
              <CategoryList subtitle="02 // Categories" category={categories.c2} selectedItem={spread2Item} onSelect={setSpread2Item} onItemClick={handleItemClick} isDark={true} spine="left" />
            </div>
          </Page>

          {/* Spread 3 */}
          <Page>
            <div className="w-full h-full bg-[#f8fafc]">
               <ImageDisplay item={spread3Item} subtitle="03 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
            </div>
          </Page>
          
          <Page>
            <div className="w-full h-full bg-[#020513] text-white">
               <CategoryList subtitle="03 // Categories" category={categories.c3} selectedItem={spread3Item} onSelect={setSpread3Item} onItemClick={handleItemClick} isDark={true} spine="left" />
            </div>
          </Page>

          {/* Spread 4 */}
          <Page>
            <div className="w-full h-full bg-[#f8fafc]">
               <ImageDisplay item={spread4Item} subtitle="04 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
            </div>
          </Page>

          <Page>
            <div className="w-full h-full bg-[#020513] text-white">
               <CategoryList subtitle="04 // Categories" category={categories.c4} selectedItem={spread4Item} onSelect={setSpread4Item} onItemClick={handleItemClick} isDark={true} spine="left" />
            </div>
          </Page>

          {/* Spread 5 */}
          <Page>
            <div className="w-full h-full bg-[#f8fafc]">
               <ImageDisplay item={spread5Item} subtitle="05 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
            </div>
          </Page>

          <Page>
             <div className="w-full h-full bg-[#020513] text-white">
               <CategoryList subtitle="05 // Categories" category={categories.c5} selectedItem={spread5Item} onSelect={setSpread5Item} onItemClick={handleItemClick} isDark={true} spine="left" />
             </div>
          </Page>

          {/* Spread 6 */}
          <Page>
            <div className="w-full h-full bg-[#f8fafc]">
               <ImageDisplay item={spread6Item} subtitle="06 // View" onItemClick={handleItemClick} isDark={false} spine="right" />
            </div>
          </Page>

          <Page>
             <div className="w-full h-full bg-[#020513] text-white">
               <CategoryList subtitle="06 // Categories" category={categories.c6} selectedItem={spread6Item} onSelect={setSpread6Item} onItemClick={handleItemClick} isDark={true} spine="left" />
             </div>
          </Page>

          {/* Inside Back Cover */}
          <Page>
            <div className="w-full h-full bg-[#f4f3ef] relative overflow-hidden flex flex-col items-center justify-center shadow-inner z-10">
               <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
               <div className="absolute top-0 bottom-0 left-0 w-12 md:w-20 bg-gradient-to-r from-black/[0.12] via-black/[0.03] to-transparent pointer-events-none z-10" />
               
               <div className="flex flex-col items-center text-center px-10 relative z-20">
                  <div className="w-6 h-[1px] bg-[#9c7c38] mb-6" />
                  <h3 className="font-serif text-[22px] sm:text-[26px] font-medium leading-[1.1] tracking-tight text-[#0a0a0a] mb-4">
                    Ready to elevate<br/>your brand?
                  </h3>
                  <p className="font-sans text-[7px] sm:text-[8px] tracking-[0.25em] uppercase font-bold text-[#9c7c38] mb-8">
                    Let&apos;s create something timeless.
                  </p>
                  
                  <div className="flex flex-col gap-2 font-sans text-[8px] sm:text-[9px] tracking-[0.15em] text-[#1a1a1a]/60 uppercase font-medium">
                    <span>Inquiries // studio@feeltheprint.com</span>
                    <span>Direct // +1 (800) 555-PRINT</span>
                  </div>
               </div>

               <div className="absolute bottom-10 w-full flex justify-center opacity-40">
                  <span className="font-serif text-[10px] sm:text-[11px] italic text-[#0a0a0a]">Fin.</span>
               </div>
            </div>
          </Page>

          {/* Back Cover */}
          <Page>
             <div className="absolute inset-0 bg-[#0b0d14] shadow-[inset_-20px_0_80px_rgba(0,0,0,0.85)] border-r border-white/5 overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#050608] via-[#0b0d14] to-[#121622]" />
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                <div className="absolute top-0 bottom-0 right-0 w-[24px] bg-gradient-to-l from-black/80 via-black/30 to-transparent pointer-events-none z-20" />
                
                {/* Back Cover Frame */}
                <div className="absolute inset-[12px] md:inset-[16px] border border-[#d4af37]/10 rounded-sm z-10 pointer-events-none" />
                
                <div className="w-full h-full flex flex-col items-center justify-center relative z-20 space-y-6">
                    <div className="w-4 h-4 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-2">
                       <div className="w-1 h-1 bg-[#d4af37]/50 rounded-full" />
                    </div>
                    <span className="font-serif text-white/50 text-[20px] sm:text-[24px] tracking-wide mb-2 opacity-80 mix-blend-plus-lighter">feeltheprint.</span>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-6 h-[1px] bg-[#d4af37]/20" />
                       <span className="text-[#d4af37]/60 text-[6px] sm:text-[7px] uppercase tracking-[0.4em] font-sans font-bold">Studio Edition // 04</span>
                       <span className="text-white/20 text-[6px] uppercase tracking-[0.3em] font-sans">Crafted with precision</span>
                    </div>
                </div>
            </div>
          </Page>

        </HTMLFlipBook>
      </div>
    </div>
  );
}
