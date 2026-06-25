import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Mani Offset, the premier commercial offset printing enterprise in Sivakasi, South India.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "About Us" }]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        About Mani Offset
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Established 1995 · Updated June 10, 2026
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-4 text-xl text-slate-800 font-medium leading-snug">
          Crafting Precision at Industrial Scale. Three decades of print perfection.
        </p>
        <p className="mb-8">
          Welcome to Mani Offset Press, the expansive parent enterprise powering the digital storefront FeelThePrint. Situated in the heart of Sivakasi, South India&apos;s historic printing hub, we have operated as the silent backbone for high-volume commercial offset printing operations for nearly three decades. We seamlessly bridge the heritage of tactile craftsmanship with the relentless efficiency of an ultra-modern, automated supply chain—delivering unmatched structural quality, razor-sharp color fidelity, and absolute logistical reliability to our national and international partners.
        </p>

        <div className="relative aspect-[21/9] rounded overflow-hidden shadow-sm border border-slate-200 mb-10">
          <Image 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            alt="Mani Offset Facility" 
            fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer" 
          />
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Scope of Our Operations</h3>
        <p className="mb-6">
          Commercial printing is no longer just about putting ink on paper; it is an exercise in complex industrial manufacturing logistics. Our sprawling 200,000-square-foot production campus is engineered for 24/7 continuous throughput. From the meticulous processing of massive thermal plates in our climate-sealed Pre-Press laboratories to the earth-shaking velocity of our German-engineered multi-color Heidelberg press lines running at 18,000 impressions per hour, we handle monumental workloads. We mass-produce high-end educational catalogs, rigidly verified secure financial forms, mathematically complex heavy-duty packaging structures, and massive runs of corporate collateral.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Philosophy of &apos;Zero-Defect&apos;</h3>
        <p className="mb-6">
          At Mani Offset, our foundational mission is to eliminate print variance. To us, quality control is not an endpoint inspection but a deeply integrated obsession throughout the lifecycle of the job. We rely heavily on spectrophotometric analysis, delta-E monitoring, high-speed inline mechanical camera arrays, and an unrelenting commitment to global ISO color standards. Whether we are producing the primary run of a sensitive cosmetics carton or a multi-million page educational digest, our mandate is that the final output maintains absolute structural integrity and optical fidelity from sheet #1 to sheet #200,000.
        </p>
        <p className="mb-8">
          Through intense technological investments and standard operating procedures refined over thousands of press shifts, the Mani Offset banner has become synonymous with the highest benchmark of reliability in the commercial print sector. We don&apos;t just execute jobs; we engineer perfect predictability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col gap-3 group">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Our Facilities" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <Link href="/about/facilities" className="text-[#005fb3] text-[15px] hover:underline font-semibold tracking-wide">Take a Tour of Our Facilities →</Link>
          </div>
          <div className="flex flex-col gap-3 group">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Quality Assurance" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <Link href="/about/quality-assurance" className="text-[#005fb3] text-[15px] hover:underline font-semibold tracking-wide">Review Our ISO Quality Protocols →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
