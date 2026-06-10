import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function ProcessPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "The Process" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        The Complete Process
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        From digital file to bound physical product.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Understanding the intricate lifecycle of a commercial printing job allows you to plan your project timelines more effectively, communicate better with prepress engineers, and ultimately avoid expensive, momentum-killing errors. Unlike a standard office printer, an offset press run is an industrial manufacturing process involving high-tech metallurgy, fluid dynamics, and automated robotics. Below is the detailed sequential workflow a job follows at Mani Offset.
        </p>

        <ol className="list-decimal pl-5 space-y-4">
            <li><strong>File Intake & Pre-flight Diagnostics:</strong> Your PDF enters our digital gateway. Automated RIP (Raster Image Processor) software performs a strict pre-flight check, analyzing image resolution, hunting for un-embedded fonts, verifying CMYK color profiles, and confirming adequate bleeds and creep allowances. Any flag triggers a manual review by an engineer.</li>
            <li><strong>Digital Imposition:</strong> The individual 8.5x11 pages of your project are not printed one by one. Advanced software mathematically arranges (imposes) 8, 16, or 32 pages onto a massive, single digital master sheet (e.g., 28x40 inches). These layouts account for how the paper will eventually be folded and trimmed so the pages fall in perfect sequential order downstream.</li>
            <li><strong>Platemaking (CTP - Computer to Plate):</strong> The digital imposition is dispatched to a high-power laser etching machine. The laser burns away the un-needed coating on massive, light-sensitive aluminum plates—one plate for each CMYK color. The remaining hardened polymer on the plate will act to attract the oil-based ink while repelling water.</li>
            <li><strong>Makeready & Press Calibration:</strong> The massive aluminum plates are clamped onto the high-speed cylinders of the offset press. The press is loaded with several hundred pounds of paper and fresh ink. Operators initiate a &quot;makeready&quot; run, printing a few hundred test sheets while adjusting microscopic ink keys until spectrophotometers verify that the colors have hit the exact Delta-E target tolerances specified by the profiling standards.</li>
            <li><strong>The Core Production Run:</strong> Once calibrated, the press ramps up to full mechanical velocity—often pushing 15,000 to 18,000 sheets per hour. Massive vacuums and air jets manipulate the paper through towering inking units, precisely transferring the image from plate to rubber blanket, and finally stamping the wet ink onto the paper substrate. Inline cameras monitor consistency, flagging tiny defects in milliseconds.</li>
            <li><strong>Finishing (Post-Press Bindery):</strong> The vast printed master sheets proceed to the bindery. Programmable folding machines rapidly collapse the broadsheets into concentrated &quot;signatures&quot;. For books, these signatures are collated, the spines are milled and heavily glued into covers (Perfect Binding) or stitched with industrial wire (Saddle Stitching). Powerful robotic guillotines then shear the edges cleanly to the final bleed dimensions.</li>
            <li><strong>Logistics & Freight:</strong> Final products are meticulously counted, shrink-wrapped to protect against atmospheric humidity, packed in reinforced double-wall corrugated cartons, and strapped securely to heavy-duty lumber pallets. From our dock levelers, your project enters our nationwide freight distribution network for final dispatch.</li>
        </ol>
      </div>
    </div>
  );
}
