"use client";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface GoogleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  // User should replace this with their actual google form embed URL
  formUrl: string; 
}

export function GoogleFormModal({ isOpen, onClose, title, formUrl }: GoogleFormModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col pointer-events-auto h-full max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {title}
                </h3>
                <div className="flex items-center gap-2">
                  <a 
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-[#f29a1b] hover:bg-[#f29a1b]/10 rounded-full transition-colors flex items-center gap-1 text-xs font-bold"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body / Iframe Container */}
              <div className="flex-1 relative bg-slate-50 w-full overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10">
                    <div className="w-8 h-8 border-4 border-slate-200 border-t-[#f29a1b] rounded-full animate-spin mb-3"></div>
                    <p className="text-sm font-medium text-slate-500 animate-pulse">Loading form...</p>
                  </div>
                )}
                
                {/* 
                  To the user: 
                  Replace the 'formUrl' prop passed to this component with your actual Google Form embed link.
                  Example: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
                */}
                <iframe
                  src={formUrl}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full border-0 absolute inset-0 z-0"
                  title={title}
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
