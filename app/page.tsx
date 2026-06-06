"use client";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProductsSection } from "../components/ProductsSection";
import { Clients } from "../components/Clients";
import { PromoCallouts } from "../components/PromoCallouts";
import { Footer } from "../components/Footer";
import { BookExperience } from "../components/BookExperience";

export default function Home() {
  const [isBookletActive, setIsBookletActive] = useState(false);

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#04081e] relative">
      {/* 3D Interactive Booklet Standalone Showroom (Bypasses regular page flow when launched) */}
      {isBookletActive && (
        <BookExperience 
          onClose={() => setIsBookletActive(false)} 
        />
      )}

      {/* 1. Header & Navigation (Mimicking Screenshot 1) */}
      <Navbar />

      {/* 2. Hero Section - With stacked overlapping mockups (Mimicking Screenshot 1) */}
      <Hero 
        onLaunchBooklet={() => setIsBookletActive(true)} 
      />

      {/* 3. Products Section - Searchable grid of printing services */}
      <ProductsSection />

      {/* 5. Double Promo Callous Row - High-volume and Fast deadlines boxes (Mimicking Screenshot 3) */}
      <PromoCallouts />

      {/* 4. Prestigious Clients Section - Grid of genuine corporate client logos (Mimicking Screenshot 2) */}
      <Clients />

      {/* 6. High-Fidelity Custom Sitemap Footer (Mimicking Screenshot 3 foot) */}
      <Footer />
    </main>
  );
}
