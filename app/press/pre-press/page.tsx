import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrePressPage() {
  return (
    <div className="w-full">
      <Breadcrumbs current="Pre-Press" />
      
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#20283c] tracking-tight mb-8 font-sans">
        Pre-Press: The Foundation
      </h1>
      
      <div className="space-y-12 text-slate-700 leading-relaxed text-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-square lg:aspect-[4/3] rounded overflow-hidden border border-slate-200">
            <Image 
              src="https://picsum.photos/seed/prepress_plates/1000/800" 
              alt="Pre-press lithographic plates" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 lg:order-2 order-1">
            <p>
              The Pre-Press stage is where the digital files are translated into physical printing 
              templates. Any error here multiplies downstream, making precision paramount.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">1. File Verification (Pre-flighting)</h4>
                <p className="text-sm text-slate-600">
                  Client artworks are checked for proper bleed, margins, color space (CMYK vs RGB), and font embedding.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">2. Color Separation</h4>
                <p className="text-sm text-slate-600">
                  Digital images are separated into cyan, magenta, yellow, and black (CMYK) layers. Each color will get its own physical plate.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-5">
                <h4 className="text-[#20283c] font-bold mb-1">3. CTP (Computer-to-Plate)</h4>
                <p className="text-sm text-slate-600">
                  Using highly precise laser technology, the separated digital layers are exposed directly onto photosensitive aluminum plates. These plates are then chemically processed and ready for the press.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
