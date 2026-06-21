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
        {/* Ambient Drop Shadow (Soft, Distant) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/40 blur-[25px] rounded-sm transition-all duration-700 ease-out transform translate-y-6 translate-x-6 opacity-70 group-hover:translate-y-14 group-hover:translate-x-10 group-hover:blur-[35px] group-hover:opacity-40"
          style={{ transform: 'translateZ(-60px)' }}
        />
        
        {/* Contact Drop Shadow (Sharp, Close) */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-black/60 blur-[8px] rounded-sm transition-all duration-700 ease-out transform translate-y-1 translate-x-1 opacity-90 group-hover:translate-y-4 group-hover:translate-x-3 group-hover:blur-[15px] group-hover:opacity-50"
          style={{ transform: 'translateZ(-10px)' }}
        />
        
        {/* Front Cover Container */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#111] rounded-r-md rounded-l-sm overflow-hidden z-20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_4px_0_10px_rgba(0,0,0,0.8)] border-r border-[#222]">
          <Image 
            src={image} 
            alt={title} 
            fill 
            sizes="300px" 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Cover vignette / deep shadow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/10 to-white/10 opacity-90 mix-blend-multiply" />
          
          {/* Subtle paper/leather texture overlay */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          {/* Gloss/glare lighting sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none mix-blend-overlay rotate-[-10deg] scale-150" />
          
          {/* Content Tag - Gold Foil Style */}
          <div className={`absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-amber-500/30 ${theme} text-[8px] sm:text-[10px] md:text-xs font-bold text-center tracking-widest uppercase py-2.5 rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]`}>
            {/* Inner shimmer on tag */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent pointer-events-none rounded-sm" />
            <span className="relative z-10 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent filter drop-shadow-sm">{tag}</span>
          </div>
          
          {/* Book hinge/joint groove line (where cover meets spine) - deeper for realism */}
          <div className="absolute top-0 bottom-0 left-[6px] w-[6px] bg-gradient-to-r from-black/60 via-black/90 to-black/60 shadow-[1px_0_2px_rgba(255,255,255,0.1),-1px_0_2px_rgba(0,0,0,0.8)] pointer-events-none" />
          {/* Edge highlights */}
          <div className="absolute inset-0 border border-white/10 rounded-r-md rounded-l-sm pointer-events-none" />
        </div>

        {/* Spine */}
        <div 
          className="absolute top-0 left-0 h-full origin-left bg-[#0a0a0a] overflow-hidden flex flex-col justify-center items-center py-8 z-10 border-l border-[#333]"
          style={{ 
            width: `${thickness}px`, 
            transform: `translateZ(-${thickness}px) rotateY(-90deg)` 
          }}
        >
          {/* Spine texture/lighting to make it look rounded - harsh lighting for gloss */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-white/10 to-black shadow-[inset_0_0_10px_rgba(0,0,0,0.9)]" />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/10 blur-[1px]" />
          
          <span className="text-amber-500/90 font-serif text-[10px] md:text-[12px] tracking-[0.2em] font-medium uppercase shrink-0 whitespace-nowrap rotate-[180deg] style-[writing-mode:vertical-rl] filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" style={{ transformOrigin: 'center' }}>
            {title}
          </span>
        </div>

        {/* Right Page Edges (Opposite the spine) */}
        <div 
          className="absolute top-[3px] right-[2px] bottom-[3px] origin-right bg-[#e6e2d3] flex overflow-hidden border-y border-[#b5af9c]"
          style={{ 
            width: `${thickness - 4}px`, 
            transform: `translateZ(-${thickness - 2}px) rotateY(90deg)`
          }}
        >
          {/* Realistic paper stripes using CSS repeating gradient */}
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }} />
          
          {/* Edge shadow simulation / concavity */}
          <div className="absolute inset-0 shadow-[inset_4px_0_15px_rgba(0,0,0,0.4)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
        </div>

        {/* Top Page Edges */}
        <div 
          className="absolute top-[2px] left-[3px] right-[4px] origin-top bg-[#e6e2d3] flex overflow-hidden border-x border-[#b5af9c] z-0"
          style={{ 
            height: `${thickness - 4}px`, 
            transform: `translateZ(-${thickness - 2}px) rotateX(90deg)`
          }}
        >
          {/* Paper stripes top */}
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 shadow-[inset_0_4px_12px_rgba(0,0,0,0.3)]" />
        </div>

        {/* Bottom Page Edges */}
        <div 
          className="absolute bottom-[2px] left-[3px] right-[4px] origin-bottom bg-[#e6e2d3] flex overflow-hidden border-x border-[#b5af9c] z-0"
          style={{ 
            height: `${thickness - 4}px`, 
            transform: `translateZ(-${thickness - 2}px) rotateX(-90deg)`
          }}
        >
          {/* Paper stripes bottom */}
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(to top, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }} />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 shadow-[inset_0_-4px_12px_rgba(0,0,0,0.3)]" />
        </div>
        
        {/* Back Cover */}
        <div 
          className="absolute inset-0 bg-[#0f0f0f] border border-[#222] rounded-l-md rounded-r-sm"
          style={{ transform: `translateZ(-${thickness}px) rotateY(180deg)` }}
        >
           <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
           <div className="absolute top-0 bottom-0 right-[8px] w-[2px] bg-black/60 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
