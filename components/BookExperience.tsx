"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamically import the core flip book to avoid SSR issues with react-pageflip
const FlipBookCore = dynamic(
  () => import("./FlipBookCore").then((mod) => mod.FlipBookCore),
  { ssr: false, loading: () => <div className="fixed inset-0 z-50 bg-[#020513] flex items-center justify-center text-white font-mono text-sm">Loading 3D Booklet...</div> }
);

export function BookExperience({ onClose }: { onClose?: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return <FlipBookCore onClose={onClose} />;
}
