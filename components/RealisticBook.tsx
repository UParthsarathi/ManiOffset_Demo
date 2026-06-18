"use client";
import Image from "next/image";

interface RealisticBookProps {
  title: string;
  image: string;
  tag: string;
  theme: string;
  rotation: string; // Tailwind class like '-rotate-6'
  delay: string; // Framer motion / Tailwind delay class
  href?: string;
  onClick?: () => void;
  thickness?: number; // 20px, 30px etc
}

export function RealisticBook({ 
  title, 
  image, 
  tag, 
  theme, 
  rotation, 
  delay,
  onClick,
  thickness = 20
}: RealisticBookProps) {
  return (
    <div 
      className={`group relative w-[180px] h-[250px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[340px] perspective-[2500px] cursor-pointer z-10 hover:z-50 transition-all duration-500 ease-out ${rotation}`}
      onClick={onClick}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] rotate-y-[-25deg] rotate-x-[15deg] group-hover:rotate-y-[0deg] group-hover:rotate-x-[0deg] group-hover:-translate-y-6 group-hover:scale-105"
      >
        {/* Dynamic drop shadow */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/40 blur-xl rounded-lg transition-all duration-700 ease-out transform translate-y-6 translate-x-4 opacity-50 group-hover:translate-y-16 group-hover:translate-x-6 group-hover:blur-2xl group-hover:opacity-20"
          style={{ transform: 'translateZ(-50px)' }}
        />
        
        {/* Front Cover */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#111] rounded-r-md rounded-l-sm overflow-hidden shadow-[inset_4px_0_10px_rgba(0,0,0,0.5)] z-20">
          <Image 
            src={image} 
            alt={title} 
            fill 
            sizes="300px" 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Cover gradient / vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-white/10 opacity-90" />
          
          {/* Gloss/glare effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          {/* Content Tag */}
          <div className={`absolute bottom-4 left-4 right-4 bg-[#010101]/95 backdrop-blur-md border border-white/10 ${theme} text-[8px] sm:text-[10px] md:text-xs font-bold text-center tracking-widest uppercase py-2.5 rounded shadow-2xl`}>
            {tag}
          </div>
          
          {/* Book hinge/joint groove line (where cover meets spine) */}
          <div className="absolute top-0 bottom-0 left-[8px] w-[2px] bg-gradient-to-r from-black/80 via-black/40 to-transparent shadow-[1px_0_2px_rgba(255,255,255,0.15)] pointer-events-none" />
          {/* Book hinge shadow */}
          <div className="absolute top-0 bottom-0 left-[1px] w-[14px] bg-gradient-to-r from-transparent via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Spine */}
        <div 
          className="absolute top-0 left-0 h-full origin-left bg-[#111] overflow-hidden flex flex-col justify-center items-center py-8 z-10 border-l border-white/10"
          style={{ 
            width: `${thickness}px`, 
            transform: 'rotateY(-90deg)' 
          }}
        >
          {/* Spine texture/lighting to make it look rounded */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-white/10 to-black/90 shadow-[inset_0_0_15px_rgba(0,0,0,0.9)]" />
          
          <span className="text-white/80 font-serif text-[10px] md:text-[12px] tracking-[0.2em] font-medium uppercase shrink-0 whitespace-nowrap rotate-[-90deg]" style={{ transformOrigin: 'center' }}>
            {title}
          </span>
        </div>

        {/* Right Page Edges (Opposite the spine) */}
        <div 
          className="absolute top-[2px] right-[2px] bottom-[2px] origin-right bg-[#e8e8e8] flex rounded-r-[2px] overflow-hidden border-y border-r border-[#d0d0d0]"
          style={{ 
            width: `${thickness - 2}px`, 
            transform: 'translateZ(-1px) rotateY(90deg)'
          }}
        >
          {/* Simulate paper pages layer */}
          <div className="w-full h-full opacity-40 flex flex-col justify-between py-[2px]">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-black/[0.08]" />
            ))}
          </div>
          
          {/* Inner shadow simulating cover overhang */}
          <div className="absolute inset-0 shadow-[inset_4px_0_10px_rgba(0,0,0,0.15)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/10" />
        </div>

        {/* Top Page Edges */}
        <div 
          className="absolute top-[2px] left-[2px] right-[2px] origin-top bg-[#e8e8e8] flex overflow-hidden border-x border-[#d0d0d0] z-0 rounded-t-[1px]"
          style={{ 
            height: `${thickness - 2}px`, 
            transform: 'translateZ(-1px) rotateX(-90deg)'
          }}
        >
          <div className="w-full h-full opacity-40 flex justify-between px-[2px]">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="h-full w-[1px] bg-black/[0.08]" />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10 shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)]" />
        </div>

        {/* Bottom Page Edges */}
        <div 
          className="absolute bottom-[2px] left-[2px] right-[2px] origin-bottom bg-[#e8e8e8] flex overflow-hidden border-x border-[#d0d0d0] z-0 rounded-b-[1px]"
          style={{ 
            height: `${thickness - 2}px`, 
            transform: 'translateZ(-1px) rotateX(90deg)'
          }}
        >
          <div className="w-full h-full opacity-40 flex justify-between px-[2px]">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="h-full w-[1px] bg-black/[0.08]" />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15)]" />
        </div>
        
        {/* Back Cover */}
        <div 
          className="absolute inset-0 bg-[#0f0f0f] border border-white/10 rounded-l-md rounded-r-sm"
          style={{ transform: `translateZ(-${thickness}px) rotateY(180deg)` }}
        >
           <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
           <div className="absolute top-0 bottom-0 right-[8px] w-[2px] bg-black/60 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
