"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the core flip book to avoid SSR issues with react-pageflip
const FlipBookCore = dynamic(
  () => import("./FlipBookCore").then((mod) => mod.FlipBookCore),
  { ssr: false, loading: () => <div className="fixed inset-0 z-50 bg-[#020513] flex items-center justify-center text-white font-mono text-sm">Loading 3D Booklet...</div> }
);

const MobileFlipBook = dynamic(
  () => import("./MobileFlipBook").then((mod) => mod.MobileFlipBook),
  { ssr: false, loading: () => <div className="fixed inset-0 z-50 bg-[#020513] flex items-center justify-center text-white font-mono text-sm">Loading 3D Booklet...</div> }
);

export function BookExperience({ onClose }: { onClose?: () => void }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => { 
      document.body.style.overflow = ""; 
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile === null) return null; // Avoid rendering until mobile check is done

  return isMobile ? <MobileFlipBook onClose={onClose} /> : <FlipBookCore onClose={onClose} />;
}
