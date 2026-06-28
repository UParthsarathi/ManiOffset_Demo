"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  mainImageUrl: string;
  title: string;
}

export function ProductGallery({ mainImageUrl, title }: ProductGalleryProps) {
  // Use the provided main image and generate 4 placeholder variations based on the title
  // In a real app, these would come from the product data array
  const images = [
    mainImageUrl,
    `https://picsum.photos/seed/${encodeURIComponent(title + '1')}/800/800`,
    `https://picsum.photos/seed/${encodeURIComponent(title + '2')}/800/800`,
    `https://picsum.photos/seed/${encodeURIComponent(title + '3')}/800/800`,
    `https://picsum.photos/seed/${encodeURIComponent(title + '4')}/800/800`,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image */}
      <div className="bg-[#f4f4f4] rounded-2xl p-8 lg:p-16 flex items-center justify-center aspect-[4/3] relative overflow-hidden border border-gray-100">
        <Image 
          src={images[activeIndex]}
          alt={`${title} - view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain p-8 mix-blend-multiply drop-shadow-xl transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              activeIndex === idx ? 'border-amber-500 shadow-md ring-2 ring-amber-100 ring-offset-1' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="absolute inset-0 bg-[#f4f4f4]" />
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="96px"
              className="object-contain p-2 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
