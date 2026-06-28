"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, Package, Check, ChevronRight, Info } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data';
import Image from 'next/image';

export function QuoteCalculator() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  
  const selectedProduct = productId ? products.find(p => String(p.id) === productId) : null;

  const [pages, setPages] = useState(88);
  const [copies, setCopies] = useState(1000);
  const [sizeFormat, setSizeFormat] = useState('A4 (210 x 297 mm)');
  const [innerColor, setInnerColor] = useState('4 Color (CMYK)');
  const [innerPaper, setInnerPaper] = useState('130 GSM Art Paper (Gloss)');
  const [wrapper, setWrapper] = useState('300 GSM Art Board with Thermal Lamination');
  const [binding, setBinding] = useState('Perfect Binding');
  
  // Dummy calculation
  const basePrice = 2500;
  const perPageCost = innerColor.includes('4 Color') ? 0.08 : 0.03;
  const perCopyCost = binding === 'Hard Bound' ? 15 : 5;
  const sizeMultiplier = sizeFormat.includes('A4') ? 1.5 : 1;
  
  const estimatedPrice = basePrice + (pages * copies * perPageCost * sizeMultiplier) + (copies * perCopyCost);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
      
      {/* Left Column: Form Parameters */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Configure Specifications</h2>
          <p className="text-slate-500">Adjust the parameters below to get an instant cost estimate for your project.</p>
        </div>

        {selectedProduct && (
          <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl mb-6">
            <div className="relative w-16 h-16 bg-white rounded-lg border border-slate-200 overflow-hidden shrink-0">
              <Image 
                src={selectedProduct.imageUrl} 
                alt={selectedProduct.title}
                fill
                sizes="64px"
                className="object-contain p-2 mix-blend-multiply"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{selectedProduct.categoryLabel}</p>
              <h3 className="text-sm font-bold text-slate-900">{selectedProduct.title}</h3>
            </div>
          </div>
        )}

        <form className="space-y-8">
          {/* Section 1: Volume */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-900 text-xs font-bold">1</span>
              <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Volume & Scale</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Total Copies
                  <span className="text-[10px] text-slate-400 font-normal normal-case">Min: 500</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={copies}
                    onChange={(e) => setCopies(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors font-mono text-base mb-3"
                  />
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="100"
                    value={copies}
                    onChange={(e) => setCopies(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono uppercase tracking-widest">
                    <span>500</span>
                    <span>50k+</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Pages per Copy
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={pages}
                    onChange={(e) => setPages(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors font-mono text-base"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Materials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-900 text-xs font-bold">2</span>
              <h3 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Materials & Finish</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Size Format</label>
                <select 
                  value={sizeFormat}
                  onChange={(e) => setSizeFormat(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>1/8 Demy</option>
                  <option>1/4 Demy</option>
                  <option>A4 (210 x 297 mm)</option>
                  <option>A5 (148 x 210 mm)</option>
                  <option>Crown</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Binding Type</label>
                <select 
                  value={binding}
                  onChange={(e) => setBinding(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>Perfect Binding</option>
                  <option>Center Pinning</option>
                  <option>Section Sewing</option>
                  <option>Hard Bound</option>
                  <option>Wiro Binding</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Inner Color</label>
                <select 
                  value={innerColor}
                  onChange={(e) => setInnerColor(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>4 Color (CMYK)</option>
                  <option>Single Color (Black)</option>
                  <option>2 Color</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Inner Paper Quality</label>
                <select 
                  value={innerPaper}
                  onChange={(e) => setInnerPaper(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>70 GSM NS Maplitho</option>
                  <option>80 GSM NS Maplitho</option>
                  <option>100 GSM Maplitho</option>
                  <option>130 GSM Art Paper (Gloss)</option>
                  <option>130 GSM Art Paper (Matte)</option>
                </select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Wrapper / Board</label>
                <select 
                  value={wrapper}
                  onChange={(e) => setWrapper(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded py-3 px-4 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>300 GSM Art Board with Thermal Lamination</option>
                  <option>250 GSM Art Board</option>
                  <option>Self Cover (Same as inner)</option>
                  <option>Hard Cover with Spot UV</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Right Column: Sticky Estimate Box */}
      <div className="w-full lg:w-[400px] shrink-0">
        <div className="sticky top-32 bg-[#f8f9fa] border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
              <Calculator className="w-5 h-5 text-gray-900" />
              <h3 className="text-lg font-bold text-gray-900">Estimate Summary</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Volume</span>
                <span className="text-gray-900 font-medium">{copies.toLocaleString()} units</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Pages</span>
                <span className="text-gray-900 font-medium">{pages} per unit</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Format</span>
                <span className="text-gray-900 font-medium">{sizeFormat.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Binding</span>
                <span className="text-gray-900 font-medium">{binding}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 mb-8 bg-white -mx-6 md:-mx-8 px-6 md:px-8 py-6">
              <div>
                <div className="flex flex-col mb-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Total</span>
                  <span className="text-4xl font-bold text-gray-900 tracking-tight">
                    ₹{estimatedPrice.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-xs text-gray-500">excl. GST & Freight</div>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                type="button" 
                className="w-full flex items-center justify-center py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded transition-colors shadow-sm"
              >
                Request Official Quote
              </button>
            </div>
            
            <div className="mt-6 flex items-start gap-3 p-4 bg-white rounded border border-gray-200 shadow-sm">
              <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-gray-500">
                This is a preliminary estimate. Final pricing may vary based on exact artwork requirements, shipping destination, and material fluctuations.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-600">
            <Package className="w-4 h-4 text-gray-400" />
            Standard production time: <strong className="text-gray-900">5-7 Days</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
