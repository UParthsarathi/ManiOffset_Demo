"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { ChevronDown, X, ArrowUpRight } from "lucide-react";

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const PageContent = ({ title, items, subtitle, align = 'left', isDark = false }: any) => (
  <div className={`w-full h-full p-4 sm:p-5 md:p-7 flex flex-col relative overflow-hidden shadow-inner ${isDark ? 'bg-[#020513] text-white border-white/10' : 'bg-[#f8fafc] text-slate-900 border-black/5'} border`}>
     <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
     {/* Subtle crease shadow for book depth */}
     <div className={`absolute top-0 bottom-0 w-8 md:w-12 pointer-events-none z-10 ${align === 'left' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} ${isDark ? 'from-black/40 to-transparent' : 'from-black/[0.08] to-transparent'}`} />
     
     <div className={`relative z-20 h-full flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className={`flex items-center gap-2 mb-3 md:mb-5 w-full ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
          {align === 'left' && <div className={`w-3 h-[1px] md:w-5 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />}
          <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.25em] font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
             {subtitle}
          </span>
          {align === 'right' && <div className={`w-3 h-[1px] md:w-5 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />}
        </div>

        {title && (
          <h3 className={`text-[13px] sm:text-[15px] md:text-xl xl:text-2xl font-serif font-bold mb-3 md:mb-5 leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-[#020617]'}`}>
            {title}
          </h3>
        )}

        <div className="w-full flex-1 flex flex-col justify-start gap-0.5 sm:gap-1 mt-1">
           {items.map((item: {id: number, title: string}, i: number) => {
             return (
             <div key={i} className={`group flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} w-full relative`}>
                <Link href={`/product/${item.id}`} className={`text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-medium tracking-wide whitespace-normal leading-snug pointer-events-auto transition-all duration-300 ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'} pb-1.5 md:pb-2 border-b border-dashed ${isDark ? 'border-white/10 group-hover:border-white/40' : 'border-slate-200 group-hover:border-slate-400'} w-full flex items-center ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                   {align === 'right' && <ArrowUpRight className={`w-2.5 h-2.5 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                   {item.title}
                   {align === 'left' && <ArrowUpRight className={`w-2.5 h-2.5 ml-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />}
                </Link>
             </div>
           )})}
        </div>

        <div className={`mt-auto pt-3 w-full flex justify-between items-center opacity-40 hover:opacity-80 transition-opacity ${isDark ? 'border-white/20' : 'border-[#020617]/20'} border-t`}>
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
  const [hasTriggeredClose, setHasTriggeredClose] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // When scroller reaches the end
    if (latest >= 0.99 && !hasTriggeredClose) {
      setHasTriggeredClose(true);
      setTimeout(() => { if(onClose) onClose(); }, 150); 
    }
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.75, 0.9, 0.9, 0.75]);
  const desktopScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 0.95, 0.95, 0.8]);
  const bookScale = isMobile ? mobileScale : desktopScale;

  const yOffset = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["8%", "3%", "3%", "-8%"]);
  const initialRotateX = useTransform(scrollYProgress, [0, 0.1], [15, 0]);
  const initialRotateY = useTransform(scrollYProgress, [0, 0.1], [-25, 0]);

  // Flipping pages (Spread 1 -> Spread 2 -> Spread 3 -> Back Cover Flip)
  const coverRotate = useTransform(scrollYProgress, [0.15, 0.35], [0, -180]);
  const page1Rotate = useTransform(scrollYProgress, [0.36, 0.56], [0, -180]);
  const page2Rotate = useTransform(scrollYProgress, [0.57, 0.77], [0, -180]);
  const entireBookRotate = useTransform(scrollYProgress, [0.78, 0.98], [0, -180]);

  const coverTransform = useMotionTemplate`rotateY(${coverRotate}deg) translateZ(11px)`;
  const page1Transform = useMotionTemplate`rotateY(${page1Rotate}deg) translateZ(9px)`;
  const page2Transform = useMotionTemplate`rotateY(${page2Rotate}deg) translateZ(7px)`;
  const bookFlipTransform = useMotionTemplate`rotateY(${entireBookRotate}deg)`;

  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const categories = {
    c1: { title: "Books & Publications", subtitle: "01 // Left", items: [{id: 1, title: "Softcover Books"}, {id: 2, title: "Hardcover Books"}, {id: 3, title: "Magazines and Journals"}, {id: 4, title: "Comics and Graphic Novels"}, {id: 5, title: "Religious and Spiritual Books"}] },
    c2: { title: "Academic & Educational", subtitle: "01 // Right", items: [{id: 6, title: "Textbooks & Guides"}, {id: 7, title: "School Notebooks"}, {id: 8, title: "Academic Diaries"}, {id: 9, title: "Record Books"}, {id: 10, title: "Application Forms"}, {id: 11, title: "Report Cards & Certificates"}, {id: 12, title: "Educational Charts"}] },
    c3: { title: "Marketing & Promotional", subtitle: "02 // Left", items: [{id: 13, title: "Flyers & Leaflets"}, {id: 14, title: "Brochures and Booklets"}, {id: 15, title: "Product Catalogues"}, {id: 16, title: "Monthly Wall Calendars"}, {id: 17, title: "Corporate Invitations"}, {id: 18, title: "Postcards"}] },
    c4: { title: "Business & Corporate", subtitle: "02 // Right", items: [{id: 19, title: "Visiting Cards"}, {id: 20, title: "Letterheads and Envelopes"}, {id: 21, title: "Business Planners"}, {id: 22, title: "Company Folders"}, {id: 23, title: "Certificates & Awards"}] },
    c5: { title: "Banking & Financial", subtitle: "03 // Left", items: [{id: 24, title: "Passbooks"}, {id: 25, title: "Challans & Deposit Slips"}, {id: 26, title: "Banking Forms"}] },
    c6: { title: "Product Support Materials", subtitle: "03 // Right", items: [{id: 27, title: "Instruction Manuals"}, {id: 28, title: "Product Inserts"}, {id: 29, title: "Warranty & Service Cards"}] }
  };

  return (
    <div ref={scrollContainerRef} className="fixed inset-0 z-50 bg-[#020513] overflow-y-auto overflow-x-hidden overscroll-none" id="immersive-3d-booklet">
      <div className="w-full relative" style={{ height: "400vh" }}>
        
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
            style={{ transformStyle: 'preserve-3d', y: yOffset }}
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

                    {/* Inside Back Cover (Category 6) */}
                    <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.15)] bg-[#f4f7f9] pointer-events-auto" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                      <PageContent subtitle={categories.c6.subtitle} title={categories.c6.title} items={categories.c6.items} isDark={false} />
                    </div>

                    {/* Flippable Page 2 (Category 4 & 5) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page2Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f4f7f9]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <PageContent subtitle={categories.c4.subtitle} title={categories.c4.title} items={categories.c4.items} isDark={false} />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <PageContent subtitle={categories.c5.subtitle} title={categories.c5.title} items={categories.c5.items} align="right" isDark={true} />
                       </div>
                    </motion.div>

                    {/* Flippable Page 1 (Category 2 & 3) */}
                    <motion.div className="absolute inset-0 origin-left outline-none pointer-events-none" style={{ transform: page1Transform, transformStyle: 'preserve-3d' }}>
                       <div className="absolute inset-0 rounded-r-xl overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#f4f7f9]" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <PageContent subtitle={categories.c2.subtitle} title={categories.c2.title} items={categories.c2.items} isDark={false} />
                       </div>
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <PageContent subtitle={categories.c3.subtitle} title={categories.c3.title} items={categories.c3.items} align="right" isDark={true} />
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
                       <div className="absolute inset-0 rounded-l-xl overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.1)] pointer-events-auto bg-[#020513]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)', transformStyle: 'preserve-3d' }}>
                          <PageContent subtitle={categories.c1.subtitle} title={categories.c1.title} items={categories.c1.items} align="right" isDark={true} />
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
