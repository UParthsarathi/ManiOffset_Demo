"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const staticClients = [
  {
    id: "samsung",
    content: (
      <span className="font-sans font-extrabold tracking-[#0.02em] text-[#0f3d95] text-xl sm:text-2xl italic">
        SAMSUNG
      </span>
    ),
    title: "Samsung",
  },
  {
    id: "sony",
    content: (
      <span className="font-serif font-black tracking-[0.16em] text-black text-xl sm:text-2xl uppercase">
        SONY
      </span>
    ),
    title: "Sony",
  },
  {
    id: "bob",
    content: (
      <span className="font-sans font-bold text-[#f25e1a] text-sm sm:text-base tracking-tight leading-tight">
        Bank of Baroda
      </span>
    ),
    title: "Bank of Baroda",
  },
];

const dynamicClients = [
  {
    id: "uco",
    title: "UCO Bank",
    content: (
      <span className="font-serif font-black text-[#0060ad] text-base sm:text-lg tracking-wide">
        UCO BANK
      </span>
    ),
  },
  {
    id: "ib",
    title: "Indian Bank",
    content: (
      <span className="font-sans font-black text-[#024987] text-base sm:text-lg uppercase italic tracking-tighter">
        Indian Bank
      </span>
    ),
  },
  {
    id: "iob",
    title: "Indian Overseas Bank",
    content: (
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-sans font-extrabold text-[#0a2353] text-[11px] sm:text-xs tracking-wider uppercase leading-none">
          Indian Overseas
        </span>
        <span className="font-sans font-black text-[#0a2353] text-sm sm:text-base tracking-tight leading-none pt-0.5">
          Bank
        </span>
      </div>
    ),
  },
  {
    id: "sahitya",
    title: "Sahitya Akademi",
    content: (
      <span className="font-serif italic font-medium text-[#891e2b] text-[14px] sm:text-[16px] tracking-tight">
        Sahitya Akademi
      </span>
    ),
  },
  {
    id: "suras",
    title: "Sura's",
    content: (
      <span className="font-sans font-black text-[#005fb3] text-lg sm:text-xl uppercase tracking-tighter inline-flex">
        SURA
        <span className="text-[#f29a1b] font-extrabold relative -top-1">
          &apos;
        </span>
        S
      </span>
    ),
  },
  {
    id: "kalachuvadu",
    title: "Kalachuvadu",
    content: (
      <span className="font-serif font-black text-[#2e2d2c] tracking-[0.18em] text-xs sm:text-sm uppercase">
        KALACHUVADU
      </span>
    ),
  },
  {
    id: "uyirmai",
    title: "ഉയിർമ്മൈ",
    content: (
      <span className="font-sans font-black text-[#e51d2e] text-xl sm:text-[23px] tracking-tight font-serif">
        உயிர்மை
      </span>
    ),
  },
  {
    id: "ncbh",
    title: "New Century Book House",
    content: (
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-sans font-extrabold text-[#0a3fa4] text-[10px] sm:text-xs tracking-wide uppercase leading-tight">
          NEW CENTURY
        </span>
        <span className="font-sans font-semibold text-[#0a3fa4] text-[9.5px] sm:text-[11px] tracking-widest uppercase leading-none">
          BOOK HOUSE
        </span>
      </div>
    ),
  },
  {
    id: "ars",
    title: "ARS Publications",
    content: (
      <div className="flex items-center gap-1.5">
        <div className="bg-[#e51d2e] text-white font-sans font-black px-1.5 py-0.5 rounded text-[11px] sm:text-xs">
          ARS
        </div>
        <span className="font-sans font-bold text-slate-800 text-xs sm:text-sm">
          Publications
        </span>
      </div>
    ),
  },
  {
    id: "sitaraman",
    title: "C. Sitaraman & Co",
    content: (
      <span className="font-sans font-bold text-[#353842] text-xs sm:text-sm uppercase tracking-wide">
        C. SITARAMAN & CO
      </span>
    ),
  },
  {
    id: "discovery",
    title: "Discovery Book Palace",
    content: (
      <span className="font-sans font-bold text-[#1c8ec7] text-xs sm:text-[13px] leading-tight text-left border-l-2 border-[#1c8ec7] pl-3">
        Discovery Book Palace
      </span>
    ),
  },
  {
    id: "bharathi",
    title: "Bharathi Puthakalayam",
    content: (
      <div className="border border-red-600 px-3 py-1 rounded text-[#e51d2e] font-bold text-xs sm:text-[13px] tracking-tight text-center leading-normal">
        பாரதி புத்தகாலயம்
      </div>
    ),
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 2 >= dynamicClients.length ? 0 : prev + 2
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeDynamicClients = [
    dynamicClients[currentIndex],
    dynamicClients[(currentIndex + 1) % dynamicClients.length],
  ];

  return (
    <section className="w-full bg-[#1e2363] py-14 px-4 sm:px-6 md:px-12 xl:px-24 relative overflow-hidden">
      {/* Decorative Blueprint Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Stark Center Title above the card */}
        <h2 className="text-white text-base sm:text-xl lg:text-3xl font-serif tracking-[0.1em] text-center mb-10 opacity-90 font-light">
          A few of our <strong className="font-bold">prestigious clients</strong>
        </h2>

        {/* Clean, Majestic stark-white card container */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/10 relative z-10 transition-all hover:scale-[1.01]">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
            
            {staticClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-2 hover:scale-105 transition-transform h-[60px] w-full text-center"
                title={client.title}
              >
                {client.content}
              </div>
            ))}

            {/* Dynamic Client 1 */}
            <div className="flex items-center justify-center p-2 h-[60px] w-full relative">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeDynamicClients[0].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute flex items-center justify-center w-full hover:scale-105 transition-transform text-center"
                  title={activeDynamicClients[0].title}
                >
                  {activeDynamicClients[0].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Client 2 */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1 flex items-center justify-center p-2 h-[60px] w-full relative">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeDynamicClients[1].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute flex items-center justify-center w-full hover:scale-105 transition-transform text-center"
                  title={activeDynamicClients[1].title}
                >
                  {activeDynamicClients[1].content}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
