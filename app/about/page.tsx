import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="text-[13px] font-sans mb-8 text-[#e51d2e] flex items-center flex-wrap gap-1.5">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="text-slate-400">›</span>
        <span className="text-slate-900">About Us</span>
      </div>
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        About Mani Offset
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Established 1995 · Updated June 10, 2026
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-4 text-xl text-slate-800 font-medium">
          Crafting Precision Since 1995.
        </p>
        <p className="mb-8">
          Welcome to Mani Offset Press, the parent enterprise behind FeelThePrint. We have been the backbone of high-volume commercial printing operations for nearly three decades, combining heritage craftsmanship with modern technology to deliver unmatched quality to our clients.
        </p>

        <div className="relative aspect-[21/9] rounded overflow-hidden shadow-sm border border-slate-200 mb-10">
          <Image 
            src="https://picsum.photos/seed/printingpress1/1200/500" 
            alt="Mani Offset Facility" 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Our Mission</h3>
        <p className="mb-6">
          At Mani Offset, our primary mission is to deliver uncompromising print quality through rigorous standard operating procedures. We bridge the gap between traditional offset techniques and contemporary automation, ensuring that every batch—from secure financial forms to premium packaging—meets exact client specifications.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Legacy</h3>
        <p className="mb-6">
          Founded in Sivakasi, the heart of India&apos;s printing industry, Mani Offset began as a modest operation focused on meticulous manual binding and rudimentary offset work. Over the decades, we&apos;ve expanded our footprint, acquiring state-of-the-art multi-color machines and establishing a rigorous quality assurance protocol.
        </p>
        <p className="mb-8">
          Today, our name stands as a benchmark for reliability in the commercial print sector across South India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://picsum.photos/seed/pressfacility/600/400" alt="Our Facilities" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Link href="/about/facilities" className="text-[#005fb3] text-[15px] hover:underline font-semibold">Explore Our Facilities</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://picsum.photos/seed/pressquality/600/400" alt="Quality Assurance" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Link href="/about/quality-assurance" className="text-[#005fb3] text-[15px] hover:underline font-semibold">Our Quality Protocol</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
