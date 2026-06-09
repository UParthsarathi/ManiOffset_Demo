"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { ChevronDown, X, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const CategoryList = ({ category, selectedItem, onSelect, subtitle, isDark = true, spine = "left" }: any) => (
  <div className={`w-full h-full p-4 sm:p-5 md:p-7 flex flex-col relative overflow-hidden shadow-inner ${isDark ? 'bg-[#020513] text-white border-white/10' : 'bg-[#f8fafc] text-slate-900 border-black/5'} border`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className={`absolute top-0 bottom-0 w-8 md:w-12 pointer-events-none z-10 ${spine === 'right' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} ${isDark ? 'from-black/40 to-transparent' : 'from-black/[0.08] to-transparent'}`} />
      
      <div className={`relative z-20 h-full flex flex-col items-start text-left`}>
         <div className={`flex items-center gap-2 mb-3 md:mb-5 w-full justify-start`}>
           <div className={`w-3 h-[1px] md:w-5 ${isDark ? 'bg-[#f29a1b]' : 'bg-blue-600'}`} />
           <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.25em] font-bold ${isDark ? 'text-[#f29a1b]' : 'text-blue-600'}`}>
              {subtitle}
           </span>
         </div>
         
         <div className="w-full flex-1 flex flex-col justify-start gap-4 mt-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
               <div className="mb-1 w-full flex-1 flex flex-col items-start">
                 <h3 className={`text-[11px] sm:text-[13px] md:text-[16px] font-serif font-semibold mb-3 sm:mb-4 leading-[1.1] tracking-tight text-white`}>
                   {category.title}
                 </h3>
                 <div className="flex flex-col gap-2.5 sm:gap-3 w-full border-t border-white/10 pt-3">
                   {category.items.map((item: any) => (
                     <Link 
                       key={item.id} 
                       href={`/products?category=${encodeURIComponent(category.name)}`}
                       onMouseEnter={() => onSelect(item)}
                       className={`group flex items-center w-full text-[9px] sm:text-[10px] md:text-[11.5px] font-medium tracking-wide whitespace-normal leading-snug pointer-events-auto transition-all duration-300 ${selectedItem?.id === item.id ? 'text-[#f29a1b]' : 'text-slate-300 hover:text-white'} text-left relative`}
                     >
                        <span className={`w-1 h-1 rounded-full mr-2 transition-all shrink-0 ${selectedItem?.id === item.id ? 'bg-[#f29a1b]' : 'bg-transparent group-hover:bg-white opacity-50'}`} />
                        {item.title}
                     </Link>
                   ))}
                 </div>
               </div>
         </div>

         <div className={`mt-auto pt-3 w-full flex justify-between items-center opacity-40 hover:opacity-80 transition-opacity ${isDark ? 'border-white/20' : 'border-[#020617]/20'} border-t`}>
            <span className="font-sans text-[6.5px] sm:text-[7.5px] tracking-widest uppercase font-medium">feeltheprint.</span>
            <span className="font-sans text-[6.5px] sm:text-[7.5px] tracking-widest uppercase font-medium">Est. 1995</span>
         </div>
      </div>
  </div>
);

const ImageDisplay = ({ item, subtitle, isDark = false, spine = "right" }: any) => (
  <div className={`w-full h-full p-4 sm:p-5 md:p-7 flex flex-col relative overflow-hidden shadow-inner ${isDark ? 'bg-[#020513] text-white border-white/10' : 'bg-[#f4f7f9] text-slate-900 border-black/5'} border`}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      <div className={`absolute top-0 bottom-0 w-8 md:w-12 pointer-events-none z-10 ${spine === 'right' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} ${isDark ? 'from-black/40 to-transparent' : 'from-black/[0.08] to-transparent'}`} />
      
      <div className={`relative z-20 h-full flex flex-col items-start text-left`}>
         <div className={`flex items-center justify-between mb-3 md:mb-5 w-full`}>
           <div className="flex items-center gap-2">
             <div className={`w-3 h-[1px] md:w-5 ${isDark ? 'bg-[#f29a1b]' : 'bg-blue-600'}`} />
             <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.25em] font-bold ${isDark ? 'text-[#f29a1b]' : 'text-blue-600'}`}>
                {subtitle}
             </span>
           </div>
         </div>

         {item && (
           <motion.div 
             key={item.id}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.3 }}
             className="w-full flex-1 flex flex-col relative rounded-md md:rounded-lg overflow-hidden bg-slate-200 border border-black/10 shadow-sm"
           >
              <img 
                src={item.imageUrl || `https://picsum.photos/seed/${slugify(item.title)}/600/800`}
                alt={item.title}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-left">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#f29a1b] font-bold mb-1.5 block">Selected Product</span>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base md:text-lg leading-tight drop-shadow-md">
                   {item.title}
                </h4>
              </div>
           </motion.div>
         )}

         <div className={`mt-auto pt-3 w-full flex justify-between items-center opacity-40 hover:opacity-80 transition-opacity ${isDark ? 'border-white/20' : 'border-[#020617]/20'} border-t mt-4 md:mt-5`}>
            <span className="font-sans text-[6.5px] sm:text-[7.5px] tracking-widest uppercase font-medium">feeltheprint.</span>
            <span className="font-sans text-[6.5px] sm:text-[7.5px] tracking-widest uppercase font-medium">Est. 1995</span>
         </div>
      </div>
  </div>
);

export function BookExperience({ onClose }: { onClose?: () => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Track the scrollable container directly
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  const [scales, setScales] = useState({ closed: 1, open: 1 });
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setScales({ closed: 1.0, open: 0.53 });
      } else if (w < 768) {
        setScales({ closed: 1.1, open: 0.7 });
      } else if (w < 1024) {
        setScales({ closed: 1.2, open: 0.85 });
      } else {
        setScales({ closed: 1.2, open: 0.95 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bookScale = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.35, 1], 
    [scales.closed, scales.closed, scales.open, scales.open]
  );

  const xOffset = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 1],
    ["0%", "0%", "50%", "50%"]
  );

  const yOffset = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.35, 1], 
    ["5%", "5%", "0%", "0%"]
  );
  const initialRotateX = useTransform(scrollYProgress, [0, 0.1], [15, 0]);
  const initialRotateY = useTransform(scrollYProgress, [0, 0.1], [-25, 0]);

  // Flipping pages (Spread 1 to 7)
  const coverRotate = useTransform(scrollYProgress, [0.10, 0.20], [0, -180]);
  const page1Rotate = useTransform(scrollYProgress, [0.22, 0.32], [0, -180]);
  const page2Rotate = useTransform(scrollYProgress, [0.34, 0.44], [0, -180]);
  const page3Rotate = useTransform(scrollYProgress, [0.46, 0.56], [0, -180]);
  const page4Rotate = useTransform(scrollYProgress, [0.58, 0.68], [0, -180]);
  const page5Rotate = useTransform(scrollYProgress, [0.70, 0.80], [0, -180]);
  const page6Rotate = useTransform(scrollYProgress, [0.82, 0.92], [0, -180]);
  const entireBookRotate = useTransform(scrollYProgress, [0, 1], [0, 0]); // Removed the closing flip

  const coverTransform = useMotionTemplate`rotateY(${coverRotate}deg) translateZ(13px)`;
  const page1Transform = useMotionTemplate`rotateY(${page1Rotate}deg) translateZ(11px)`;
  const page2Transform = useMotionTemplate`rotateY(${page2Rotate}deg) translateZ(9px)`;
  const page3Transform = useMotionTemplate`rotateY(${page3Rotate}deg) translateZ(7px)`;
  const page4Transform = useMotionTemplate`rotateY(${page4Rotate}deg) translateZ(5px)`;
  const page5Transform = useMotionTemplate`rotateY(${page5Rotate}deg) translateZ(3px)`;
  const page6Transform = useMotionTemplate`rotateY(${page6Rotate}deg) translateZ(1px)`;
  const bookFlipTransform = useMotionTemplate`rotateY(${entireBookRotate}deg)`;

  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Handle closing at the end of the book
  const [hasTriggeredClose, setHasTriggeredClose] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.99 && !hasTriggeredClose) {
      setHasTriggeredClose(true);
      setTimeout(() => { if(onClose) onClose(); }, 100); 
    }
  });

  const academicItems = products.filter(p => p.category === "Academic and Educational");
  const categories = {
    c1: { title: "Books & Publications", name: "Books and Publications", subtitle: "01 // Category", items: products.filter(p => p.category === "Books and Publications") },
    c2: { title: "Academic & Educational", name: "Academic and Educational", subtitle: "02 // Category", items: academicItems.slice(0, 4) },
    c3: { title: "Academic & Educational (Cont.)", name: "Academic and Educational", subtitle: "03 // Category", items: academicItems.slice(4) },
    c4: { title: "Marketing & Promotional", name: "Marketing and Promotional Materials", subtitle: "04 // Category", items: products.filter(p => p.category === "Marketing and Promotional Materials") },
    c5: { title: "Business & Corporate", name: "Business and Corporate", subtitle: "05 // Category", items: products.filter(p => p.category === "Business and Corporate") },
    c6: { title: "Banking & Financial", name: "Banking and Financial", subtitle: "06 // Category", items: products.filter(p => p.category === "Banking and Financial") },
    c7: { title: "Product Support Materials", name: "Product Support Materials", subtitle: "07 // Category", items: products.filter(p => p.category === "Product Support Materials") }
  };

  const [spread1Item, setSpread1Item] = useState(categories.c1.items[0]);
  const [spread2Item, setSpread2Item] = useState(categories.c2.items[0]);
  const [spread3Item, setSpread3Item] = useState(categories.c3.items[0]);
  const [spread4Item, setSpread4Item] = useState(categories.c4.items[0]);
  const [spread5Item, setSpread5Item] = useState(categories.c5.items[0]);
  const [spread6Item, setSpread6Item] = useState(categories.c6.items[0]);
  const [spread7Item, setSpread7Item] = useState(categories.c7.items[0]);

  return (
    <div ref={scrollContainerRef} className="fixed inset-0 z-50 bg-[#020513] overflow-y-auto overflow-x-hidden overscroll-none" id="immersive-3d-booklet">
      <div className="w-full relative" style={{ height: "450vh" }}>

        
        {/* Decorative Ambient Lighting */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="fixed top-0 right-0 w-[40vmax] h-[40vmax] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="fixed top-0 left-0 right-0 p-4 md:p-8 flex justify-end z-[60] pointer-events-none">
          <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white transition-colors pointer-events-auto shadow-xl cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <motion.div style={{ opacity: hintOpacity }} className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[60] pointer-events-none">
          <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur border border-white/10 hidden sm:block">
            Scroll To Flip Pages
          </span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-bounce mt-1" />
        </motion.div>

        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[2500px]">
          <motion.div
            className="w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-[min(480px,42vh)] aspect-[1/1.4]"
            style={{ transformStyle: 'preserve-3d', y: yOffset, x: xOffset }}
          >
            <motion.div
              style={{ scale: bookScale, rotateX: initialRotateX, rotateY: initialRotateY, transformStyle: 'preserve-3d' }}
              className="w-full h-full origin-center relative"
            >
              <motion.div className="w-full h-full relative origin-center" style={{ transform: bookFlipTransform, transformStyle: 'preserve-3d' }}>
                <div className="w-full h-full relative origin-left" style={{ transformStyle: 'preserve-3d', transform: 'translateX(0px)' }}> 
                    
                    {/* Spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-[14px] bg-gradient-to-r from-[#818f9e] via-[#cbd5e1] to-[#818f9e] border-r border-[#64748b] pointer-events-none shadow-inner" style={{ transformOrigin: 'left', transform: 'translateZ(-1px) rotateY(-90deg)', transformStyle: 'preserve-3d' }} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00122e] to-[#041c40] rounded-r-xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] pointer-events-none" style={{ transform: 'translateZ(-1px)', transformStyle: 'preserve-3d' }} />

                    {/* Back Cover Outer face */}
                    <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.15)] bg-gradient-to-bl from-[#020617] to-[#0f172a] pointer-events-none flex flex-col justify-center items-center" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(-1.5px) rotateY(180deg)', transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                        <div className="w-full h-full flex flex-col items-center justify-center border-l border-white/5 space-y-4">
                            <span className="font-serif text-white/30 text-2xl italic tracking-wide">feeltheprint.</span>
                            <span className="text-white/20 text-[9px] uppercase tracking-widest font-mono">Premium Offset Printing</span>
                        </div>
                    </div>

                    {/* Inside Back Cover (Category 7) */}
                    <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.15)] bg-[#020513] pointer-events-auto" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                      <CategoryList subtitle="07 // Categories" category={categories.c7} selectedItem={spread7Item} onSelect={setSpread7Item} isDark={true} spine="left" />
                    </div>

                    {/* Flippable Page 6 (Category 6) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page6Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="06 // Categories" category={categories.c6} selectedItem={spread6Item} onSelect={setSpread6Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread7Item} subtitle="07 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Flippable Page 5 (Category 5) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page5Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="05 // Categories" category={categories.c5} selectedItem={spread5Item} onSelect={setSpread5Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread6Item} subtitle="06 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Flippable Page 4 (Category 4) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page4Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="04 // Categories" category={categories.c4} selectedItem={spread4Item} onSelect={setSpread4Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread5Item} subtitle="05 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Flippable Page 3 (Category 3) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page3Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="03 // Categories" category={categories.c3} selectedItem={spread3Item} onSelect={setSpread3Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread4Item} subtitle="04 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Flippable Page 2 (Category 2) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page2Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="02 // Categories" category={categories.c2} selectedItem={spread2Item} onSelect={setSpread2Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread3Item} subtitle="03 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Flippable Page 1 (Category 1) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page1Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <CategoryList subtitle="01 // Categories" category={categories.c1} selectedItem={spread1Item} onSelect={setSpread1Item} isDark={true} spine="left" />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread2Item} subtitle="02 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                    {/* Cover Assembly */}
                    <motion.div className="absolute inset-0 origin-left pointer-events-none" style={{ transform: coverTransform, transformStyle: 'preserve-3d' }}>
                       {/* Outside Cover */}
                       <div className="absolute inset-0 bg-white rounded-r-xl shadow-[20px_40px_80px_rgba(0,0,0,0.55)] border-l border-black/5 overflow-hidden pointer-events-auto" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#e2e8f0] to-[#f8fafc]" />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e3a8a]/5 mix-blend-multiply" />
                          <div className="absolute top-0 bottom-0 left-0 w-[18px] bg-gradient-to-r from-black/10 via-black/[0.02] to-transparent pointer-events-none z-20" />
                          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                          <div className="pl-6 md:pl-8 p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between relative z-10 text-[#0f172a] font-serif border border-slate-200/50 m-1.5 md:m-2 rounded-lg shadow-sm bg-white/40 backdrop-blur-sm">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-1.5 h-1.5 bg-blue-700 rounded-full" />
                                <div className="text-[7.5px] md:text-[8.5px] uppercase tracking-[0.25em] font-sans font-bold text-blue-700 opacity-90">Feel the Print</div>
                              </div>
                              <div className="text-xl sm:text-2xl md:text-[28px] font-bold leading-[1.05] tracking-tight mb-3 text-[#0a0f1d] pb-4 border-b border-slate-300/60">
                                The Product<br/>Showroom
                              </div>
                              <p className="text-slate-600 font-sans text-[8px] md:text-[9px] max-w-[90%] font-semibold uppercase tracking-widest leading-relaxed mt-4">
                                Explore bespoke collections of professional offsets & prints.
                              </p>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <div className="text-[7px] md:text-[8px] font-sans text-slate-400 font-bold uppercase tracking-widest pl-0.5">Est. 1995 • Edition 04</div>
                                <div className="flex gap-1">
                                  <div className="w-10 md:w-12 h-[2px] bg-blue-700" />
                                  <div className="w-2 h-[2px] bg-blue-300" />
                                </div>
                            </div>
                          </div>
                       </div>
                       {/* Inside Cover (Category 1) */}
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f8fafc]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <ImageDisplay item={spread1Item} subtitle="01 // View" isDark={false} spine="right" />
                       </div>
                    </motion.div>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
