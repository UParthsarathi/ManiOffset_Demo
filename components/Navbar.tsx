"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  ChevronDown, 
  Search, 
  Phone, 
  User, 
  ShoppingCart, 
  Book,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categoriesData = [
    {
      name: "Books & Publications",
      subcategories: [
        "Softcover Books (Paperback)",
        "Hardcover Books (Hardbound)",
        "Magazines and Journals",
        "Comics and Graphic Novels",
        "Religious and Spiritual Books"
      ]
    },
    {
      name: "Academic & Educational",
      subcategories: [
        "Textbooks, Guides, and Educational Books",
        "School and College Notebooks",
        "Academic Diaries and Planners",
        "Record Books and Lab Manuals",
        "Application Forms, Answer Sheets",
        "Report Cards, Certificates",
        "Educational and Kids Charts"
      ]
    },
    {
      name: "Marketing & Promotional",
      subcategories: [
        "Flyers, Leaflets, and Pamphlets",
        "Brochures and Booklets",
        "Product Catalogues",
        "Monthly Wall Calendars",
        "Academic and Corporate Invitation",
        "Postcards"
      ]
    },
    {
      name: "Business & Corporate",
      subcategories: [
        "Visiting Cards",
        "Letterheads and Envelopes",
        "Business Diaries and Planners",
        "Company Folders",
        "Certificates and Award Cards"
      ]
    },
    {
      name: "Banking & Financial",
      subcategories: [
        "Passbooks",
        "Challans and Deposit Slips",
        "Banking Forms"
      ]
    },
    {
      name: "Product Support Materials",
      subcategories: [
        "Instruction Manuals and Guides",
        "Product Inserts and Leaflets",
        "Warranty, Registration & Service Cards"
      ]
    }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

    const handleScrollToConfigurator = () => {
      // Navigate to products page instead of scrolling
      router.push("/products");
    };

  return (
    <div className="w-full flex flex-col z-50 sticky top-0 bg-[#0d1430]">
      {/* 1. Thin Notification/Header Top Bar */}
      <div className="w-full bg-[#080d22] text-white py-2 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium tracking-wide border-b border-white/5 gap-2 sm:gap-0">
        <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
          <Mail className="w-3.5 h-3.5 text-blue-400" />
          <span>contact@feeltheprint.com</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-slate-300 font-sans">
          <Link href="#about" className="text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-widest text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold flex items-center gap-1">ABOUT US</Link>
          <Link href="#press" className="hover:text-amber-500 transition-colors uppercase tracking-widest text-[10px]">PRESS</Link>
          <span className="text-slate-600">|</span>
          <Link href="#track" className="hover:text-amber-500 transition-colors uppercase tracking-widest text-[10px]">TRACK ORDER</Link>
          <span className="text-slate-600">|</span>
          <Link href="#help" className="hover:text-amber-500 transition-colors uppercase tracking-widest text-[10px]">HELP</Link>
        </div>
      </div>

      {/* 2. Main High-Fidelity Navigation Bar */}
      <header className="w-full bg-[#0d1430] text-white border-b border-white/5 py-3 px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-1 min-w-fit">
          <Link href="/" className="flex flex-col group">
            {/* Place your logo in the public folder and update the src below */}
            <div className="relative h-10 w-40 sm:h-12 sm:w-48 my-1">
              <Image 
                src="/logo-placeholder.svg" 
                alt="FeelThe Print Logo" 
                fill
                className="object-contain object-left" 
                priority
              />
            </div>

            {/* Slogan */}
            <span className="text-[7.5px] sm:text-[8px] italic font-serif text-slate-400 font-light tracking-wider leading-none">
              Where printing meets perfection.
            </span>
          </Link>
        </div>

        {/* Center Search Widget & Dropdown - Desktop Only */}
        <div className="hidden lg:flex items-center flex-1 max-w-2xl border border-white/10 rounded-lg shadow-sm bg-[#090f24] h-[46px]">
          {/* BROWSE CATEGORIES DROPDOWN TRIGGER */}
          <div className="relative h-full shrink-0" onMouseLeave={() => { setShowCategories(false); setActiveCategory(null); }}>
            <button 
              onMouseEnter={() => setShowCategories(true)}
              className="px-4 h-full bg-[#f29a1b] hover:bg-[#de8710] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer w-64 justify-between rounded-l-lg"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-3.5 h-3.5" />
                <span>Browse Categories</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCategories ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {showCategories && (
              <div className="absolute left-0 top-[46px] flex shadow-2xl z-50 animate-fade-in origin-top-left" style={{ minWidth: activeCategory !== null ? '550px' : '260px' }}>
                {/* Main Categories Panel */}
                <div className="w-[260px] bg-[#111111] text-slate-300 font-sans text-[13px] border border-white/5 py-1">
                  {categoriesData.map((cat, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveCategory(idx)}
                      onClick={() => handleScrollToConfigurator()}
                      className={`w-full px-5 py-3 cursor-pointer flex items-center justify-between transition-colors border-b border-white/5 last:border-0 ${
                        activeCategory === idx ? 'bg-[#1a1a1a] text-white font-semibold' : 'hover:bg-[#1a1a1a] hover:text-white font-medium'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-50" />
                    </div>
                  ))}
                </div>

                {/* Subcategories Flyout Panel */}
                {activeCategory !== null && (
                  <div className="flex-1 bg-[#1a1a1a] text-slate-300 font-sans text-[13px] border border-l-0 border-white/5 py-1 min-w-[290px]">
                    {categoriesData[activeCategory].subcategories.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => {
                          setShowCategories(false);
                          setActiveCategory(null);
                          handleScrollToConfigurator();
                        }}
                        className="w-full px-5 py-3 cursor-pointer transition-colors hover:bg-white/5 hover:text-amber-500 hover:pl-6 duration-200"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SEARCH INPUT BAR */}
          <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center px-4 relative h-full">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products" 
              className="w-full text-sm text-white outline-none placeholder-slate-450 bg-transparent pr-8"
            />
            <button type="submit" className="absolute right-4 text-slate-400 hover:text-white cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* GET QUOTE NAV TRIGGER */}
          <button 
            onClick={handleScrollToConfigurator}
            className="h-full px-5 bg-[#f29a1b] hover:bg-[#de8710] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap rounded-r-lg"
          >
            Get Quote
          </button>
        </div>

        {/* Right Info Widgets: Phone Contact, Profile & Shopping Cart */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Phone call section */}
          <div className="hidden md:flex items-center gap-3">
            <div className="p-2 border border-white/10 bg-white/5 rounded-full text-amber-400">
              <Phone className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col font-sans">
              <span className="text-sm font-black text-white leading-tight">+91 97911 83612</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold leading-none">For Orders Call</span>
            </div>
          </div>

          {/* User/Account Profile icon */}
          <button 
            onClick={handleScrollToConfigurator}
            className="p-1 text-slate-300 hover:text-white transition-colors relative cursor-pointer"
            title="My Profile"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Shopping Cart icon */}
          <button 
            onClick={handleScrollToConfigurator}
            className="p-1 text-slate-300 hover:text-white transition-colors relative cursor-pointer"
            title="Shopping Cart (0)"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-[#f29a1b] text-white font-mono font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-[#0d1430]">
              0
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button 
            className="lg:hidden p-1 text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* 3. Mobile Navigation drawer and quick links */}
      {showMobileMenu && (
        <div className="lg:hidden w-full border-b border-white/10 bg-[#090f24] p-4 space-y-4 shadow-inner flex flex-col font-sans animate-fade-in z-45">
          {/* Quick Categories list */}
          <div className="space-y-1">
            <div className="text-[10.5px] uppercase tracking-widest font-bold text-slate-400 mb-2 px-1">Quick Browse</div>
            <div className="grid grid-cols-2 gap-2">
              {categoriesData.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setShowMobileMenu(false);
                    handleScrollToConfigurator();
                  }}
                  className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-left text-xs text-slate-200 font-semibold hover:bg-white/10 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar for mobile */}
          <form onSubmit={(e) => { e.preventDefault(); setShowMobileMenu(false); handleScrollToConfigurator(); }} className="flex items-center bg-[#0d1430] border border-white/10 rounded-lg p-2.5 shadow-sm">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="flex-1 text-xs outline-none text-slate-200 bg-transparent pr-2"
            />
            <Search className="w-4 h-4 text-slate-400" />
          </form>

          {/* Hot call CTAs */}
          <div className="flex gap-2.5">
            <button 
              onClick={() => { setShowMobileMenu(false); handleScrollToConfigurator(); }}
              className="flex-1 py-2.5 bg-[#f29a1b] hover:bg-[#de8710] text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center shadow-md cursor-pointer transition-colors"
            >
              Get Custom Quote
            </button>
            <a 
              href="tel:+919791183612"
              className="px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1 cursor-pointer hover:bg-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Press</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

