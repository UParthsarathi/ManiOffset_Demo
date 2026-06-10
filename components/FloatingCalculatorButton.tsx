"use client";
import { useState } from "react";
import { Calculator } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PriceCalculatorPanel } from "./PriceCalculatorPanel";

export function FloatingCalculatorButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#f29a1b] hover:bg-[#de8710] text-white p-3 rounded-l-xl shadow-2xl flex items-center gap-3 transition-colors border border-r-0 border-[#de8710]/50 group"
          style={{ transformOrigin: "right center" }}
        >
          <Calculator className="w-6 h-6 shrink-0" />
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                animate={{ width: "auto", opacity: 1, marginRight: 8 }}
                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                className="overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-wider block"
              >
                Quick Quote
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <PriceCalculatorPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
