import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function FacilitiesPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Our Facilities" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Our Facilities
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        State-of-the-art production infrastructure in Sivakasi.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Spread across a sprawling campus in Sivakasi, Mani Offset houses one of the most advanced printing setups in South India. Our infrastructure spans over 200,000 square feet of dedicated production space, meticulously designed for automated material flow, strict environmental controls, and 24/7 high-volume throughput. We have engineered our facility to eliminate operational bottlenecks, with logical, linear movements from raw material intake through pre-press, printing, finishing, and finally logistics.
        </p>
        
        <div className="relative aspect-video rounded overflow-hidden shadow-sm border border-slate-200 mb-8">
          <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Mani Offset Production Floor" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Pre-Press Division</h3>
        <p className="mb-6">
          Equipped with cutting-edge Computer-to-Plate (CTP) technology, our pre-press division ensures flawless digital-to-analog translation. High-end proofing engines and color-calibrated monitors allow our prepress technicians to deliver true-to-color proofs prior to final printing. Our pre-press environment is strictly climate-controlled to maintain the integrity of our thermal plates and high-end proofing inkjet plotters. We utilize advanced imposition software that seamlessly integrates into our RIP (Raster Image Processor) queues, optimizing sheet layouts to minimize paper waste and ensuring razor-sharp rendering of vector graphics, typography, and high-frequency stochastic screens.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Press Room</h3>
        <p className="mb-6">
          The heartbeat of our operations features a formidable array of multi-color offset presses from leading global manufacturers like Heidelberg and Komori. Whether running 2-color precision document printing or complex 8-color packaging tasks with in-line aqueous and UV coating, our machines deliver precise registration at speeds exceeding 15,000 sheets per hour. Our press floor is reinforced to dampen vibration, and atmospheric controls maintain absolute humdity levels to prevent paper stretching or curling—critical factors when passing a single sheet through multiple impression cylinders to achieve tight register over massive production runs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative aspect-video rounded overflow-hidden shadow-sm border border-slate-200">
                <Image src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Offset Press" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-video rounded overflow-hidden shadow-sm border border-slate-200">
                <Image src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" alt="Bindery Segment" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
            </div>
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Post-Press & Warehousing</h3>
        <p className="mb-6">
          Finishing is handled by automated programmable guillotines, high-speed folders, perfect binders, saddle stitchers, and die-cutting units. We offer a vast array of specialized finishing, from foil stamping and embossing to lamination and spot UV. Our extensive warehousing facility features specialized climate-controlled zones for sensitive virgin paper stocks. An integrated, multi-bay logistics center equipped with automated pallet wrapping and dock levelers ensures that our massive daily output is swiftly organized, barcode-scanned, and loaded onto heavy-haul freight vehicles for immediate nationwide dispatch.
        </p>
      </div>
    </div>
  );
}
