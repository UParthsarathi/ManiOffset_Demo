"use client";

export function Clients() {
  return (
    <section className="w-full bg-[#1e2363] py-14 px-4 sm:px-6 md:px-12 xl:px-24 relative overflow-hidden">
      {/* Decorative Blueprint Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Stark Center Title above the card */}
        <h2 className="text-white text-base sm:text-xl lg:text-2xl font-sans font-black tracking-[0.25em] text-center uppercase mb-8">
          A FEW OF OUR PRESTIGIOUS CLIENTS
        </h2>

        {/* Clean, Majestic stark-white card container */}
        <div className="w-full bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/10 relative z-10 transition-all hover:scale-[1.01]">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center">
            
            {/* Logo 1: SAMSUNG */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="Samsung">
              <span className="font-sans font-extrabold tracking-[#0.02em] text-[#0f3d95] text-xl sm:text-2xl italic">
                SAMSUNG
              </span>
            </div>

            {/* Logo 2: SONY */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="Sony">
              <span className="font-serif font-black tracking-[0.16em] text-black text-xl sm:text-2xl uppercase">
                SONY
              </span>
            </div>

            {/* Logo 3: Bank of Baroda */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform text-center" title="Bank of Baroda">
              <span className="font-sans font-bold text-[#f25e1a] text-sm sm:text-base tracking-tight leading-tight">
                Bank of Baroda
              </span>
            </div>

            {/* Logo 4: UCO BANK */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="UCO Bank">
              <span className="font-serif font-black text-[#0060ad] text-base sm:text-lg tracking-wide">
                UCO BANK
              </span>
            </div>

            {/* Logo 5: Indian Bank */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="Indian Bank">
              <span className="font-sans font-black text-[#024987] text-base sm:text-lg uppercase italic tracking-tighter">
                Indian Bank
              </span>
            </div>

            {/* Logo 6: Indian Overseas Bank */}
            <div className="flex flex-col items-center justify-center p-2 text-center hover:scale-105 transition-transform" title="Indian Overseas Bank">
              <span className="font-sans font-extrabold text-[#0a2353] text-[11px] sm:text-xs tracking-wider uppercase leading-none">
                Indian Overseas
              </span>
              <span className="font-sans font-black text-[#0a2353] text-sm sm:text-base tracking-tight leading-none pt-0.5">
                Bank
              </span>
            </div>

            {/* Logo 7: Sahitya Akademi */}
            <div className="flex items-center justify-center p-2 text-center hover:scale-105 transition-transform" title="Sahitya Akademi">
              <span className="font-serif italic font-medium text-[#891e2b] text-[14px] sm:text-[16px] tracking-tight">
                Sahitya Akademi
              </span>
            </div>

            {/* Logo 8: SURA'S */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="Sura's">
              <span className="font-sans font-black text-[#005fb3] text-lg sm:text-xl uppercase tracking-tighter inline-flex">
                SURA
                <span className="text-[#f29a1b] font-extrabold relative -top-1">&apos;</span>
                S
              </span>
            </div>

            {/* Logo 9: KALACHUVADU */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="Kalachuvadu">
              <span className="font-serif font-black text-[#2e2d2c] tracking-[0.18em] text-xs sm:text-sm uppercase">
                KALACHUVADU
              </span>
            </div>

            {/* Logo 10: உயிர்மை */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform" title="ഉയിർമ്മൈ">
              <span className="font-sans font-black text-[#e51d2e] text-xl sm:text-[23px] tracking-tight font-serif">
                உயிர்மை
              </span>
            </div>

            {/* Logo 11: NEW CENTURY BOOK HOUSE */}
            <div className="flex flex-col items-center justify-center p-2 text-center hover:scale-105 transition-transform" title="New Century Book House">
              <span className="font-sans font-extrabold text-[#0a3fa4] text-[10px] sm:text-xs tracking-wide uppercase leading-tight">
                NEW CENTURY
              </span>
              <span className="font-sans font-semibold text-[#0a3fa4] text-[9.5px] sm:text-[11px] tracking-widest uppercase leading-none">
                BOOK HOUSE
              </span>
            </div>

            {/* Logo 12: ARS Publications */}
            <div className="flex items-center gap-1.5 p-2 hover:scale-105 transition-transform" title="ARS Publications">
              <div className="bg-[#e51d2e] text-white font-sans font-black px-1.5 py-0.5 rounded text-[11px] sm:text-xs">
                ARS
              </div>
              <span className="font-sans font-bold text-slate-800 text-xs sm:text-sm">
                Publications
              </span>
            </div>

            {/* Logo 13: C. SITARAMAN & CO */}
            <div className="flex items-center justify-center p-2 hover:scale-105 transition-transform text-center" title="C. Sitaraman & Co">
              <span className="font-sans font-bold text-[#353842] text-xs sm:text-sm uppercase tracking-wide">
                C. SITARAMAN & CO
              </span>
            </div>

            {/* Logo 14: Discovery Book Palace */}
            <div className="flex items-center gap-1.5 p-2 hover:scale-105 transition-transform border-l-2 border-[#1c8ec7] pl-3" title="Discovery Book Palace">
              <span className="font-sans font-bold text-[#1c8ec7] text-xs sm:text-[13px] leading-tight text-left">
                Discovery Book Palace
              </span>
            </div>

            {/* Logo 15: பாரதி புத்தகாலயம் */}
            <div className="flex items-center justify-center p-1.5 hover:scale-105 transition-transform" title="Bharathi Puthakalayam">
              <div className="border border-red-600 px-3 py-1 rounded text-[#e51d2e] font-bold text-xs sm:text-[13px] tracking-tight text-center leading-normal">
                பாரதி புத்தகாலயம்
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
