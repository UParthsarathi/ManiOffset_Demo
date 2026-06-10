"use client";
import { useState, useEffect } from "react";
import { X, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PriceCalculatorPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PriceCalculatorPanel({ isOpen, onClose }: PriceCalculatorPanelProps) {
  const [productType, setProductType] = useState("books");
  const [quantity, setQuantity] = useState("500");
  const [paperQuality, setPaperQuality] = useState("standard");
  const [isCalculating, setIsCalculating] = useState(false);
  const [price, setPrice] = useState<number | null>(null);

  // Simple pricing logic
  const calculatePrice = () => {
    setIsCalculating(true);
    setPrice(null);

    setTimeout(() => {
      let basePrice = 0;
      switch (productType) {
        case "books": basePrice = 200; break; // Base per 100 units
        case "catalogs": basePrice = 150; break;
        case "brochures": basePrice = 80; break;
        case "business_cards": basePrice = 20; break;
        default: basePrice = 100;
      }

      let multiplier = 1;
      if (paperQuality === "premium") multiplier = 1.5;
      if (paperQuality === "recycled") multiplier = 1.2;

      const qtyMultiplier = parseInt(quantity, 10) / 100;
      
      const finalPrice = Math.floor(basePrice * qtyMultiplier * multiplier);
      setPrice(finalPrice);
      setIsCalculating(false);
    }, 800); // Fake calculation delay for animation
  };

  useEffect(() => {
    // Reset price when inputs change
    setPrice(null);
  }, [productType, quantity, paperQuality]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col border-l border-slate-200"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#f29a1b]/10 rounded-lg">
                    <Calculator className="w-5 h-5 text-[#f29a1b]" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Quick Quote</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-6">
                  {/* Product Type */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Product Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "books", label: "Books & Manuals" },
                        { id: "catalogs", label: "Catalogs" },
                        { id: "brochures", label: "Brochures" },
                        { id: "business_cards", label: "Business Cards" },
                      ].map((type) => (
                        <div
                          key={type.id}
                          onClick={() => setProductType(type.id)}
                          className={`p-3 border rounded-lg cursor-pointer transition-all text-sm font-medium ${
                            productType === type.id
                              ? "border-[#f29a1b] bg-[#f29a1b]/5 text-[#de8710] shadow-sm"
                              : "border-slate-200 hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          {type.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Estimated Volume
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full accent-[#f29a1b]"
                    />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400 font-medium">100 units</span>
                      <span className="font-bold text-lg text-slate-800">{quantity} units</span>
                      <span className="text-slate-400 font-medium">10k+ units</span>
                    </div>
                  </div>

                  {/* Paper Quality */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Paper Stock Quality
                    </label>
                    <select
                      value={paperQuality}
                      onChange={(e) => setPaperQuality(e.target.value)}
                      className="w-full p-3 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#f29a1b]/20 focus:border-[#f29a1b] transition-all cursor-pointer"
                    >
                      <option value="standard">Standard (80gsm - 100gsm)</option>
                      <option value="premium">Premium Matte/Gloss (130gsm+)</option>
                      <option value="recycled">Recycled Eco-Friendly (100gsm)</option>
                    </select>
                  </div>
                </form>

                {/* Calculation Area */}
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <button
                    onClick={calculatePrice}
                    disabled={isCalculating || price !== null}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 group"
                  >
                    {isCalculating ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Calculating...
                      </span>
                    ) : price !== null ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Price Updated
                      </span>
                    ) : (
                      <>
                        Calculate Estimate
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {price !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-5 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100 rounded-xl flex flex-col items-center justify-center text-center space-y-1"
                      >
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                          Estimated Cost
                        </span>
                        <div className="text-4xl font-black text-emerald-900 tracking-tight">
                          ${price.toLocaleString()}
                        </div>
                        <span className="text-xs text-emerald-700 font-medium pt-2">
                          *Excludes shipping and applicable taxes.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
