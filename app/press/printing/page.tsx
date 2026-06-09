import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrintingPage() {
  return (
    <div className="w-full">
      <Breadcrumbs current="Press" />

      <h1 className="text-[36px] md:text-[42px] font-bold text-[#20283c] tracking-tight mb-8 font-sans">
        The Offset Printing Run
      </h1>

      <div className="space-y-12 text-slate-700 leading-relaxed text-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p>
              The printing phase is physical, fast, and driven by complex chemistry. The aluminum plates created in Pre-Press are clamped onto the plate cylinders of the printing press.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">The Ink &amp; Water Balance</h4>
                <p className="text-sm text-slate-600">
                  Offset lithography works on the principle that oil (ink) and water do not mix. Rollers apply a water-based dampening solution to the plate. The blank areas attract the water, while the image areas repel it and accept the oil-based ink.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">The Offset Transfer</h4>
                <p className="text-sm text-slate-600">
                  The plate cylinder does not touch the paper directly. Instead, it &quot;offsets&quot; the ink onto a softer rubber blanket cylinder. This rubber blanket then presses the inked image onto the paper as it feeds through.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">High-Speed Precision</h4>
                <p className="text-sm text-slate-600">
                  A single sheet of paper travels through 4 to 6 color units (C, M, Y, K, plus special protective varnishes or pantone spot colors) at speeds up to 15,000 sheets per hour, with alignment tolerances measured in fractions of a millimeter.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3] rounded overflow-hidden border border-slate-200">
            <Image 
              src="https://picsum.photos/seed/printing_offset/1000/800" 
              alt="Multi-color offset printing press in action" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
