import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PostPressPage() {
  return (
    <div className="w-full">
      <Breadcrumbs current="Post-Press" />

      <h1 className="text-[36px] md:text-[42px] font-bold text-[#20283c] tracking-tight mb-8 font-sans">
        Post-Press &amp; Final Finishing
      </h1>

      <div className="space-y-12 text-slate-700 leading-relaxed text-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-square lg:aspect-[4/3] rounded overflow-hidden border border-slate-200 lg:order-1 order-2">
            <Image 
              src="https://picsum.photos/seed/postpress_binding/1000/800" 
              alt="Post-press finishing and binding operations" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 lg:order-2 order-1">
            <p>
              Printing creates large, flat sheets with multiple pages or products printed on them. 
              The Post-Press stage transforms these raw press sheets into functional, finished books, boxes, or cards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <h4 className="text-[#20283c] font-bold mb-1">Cutting</h4>
                <p className="text-sm text-slate-600">
                  Programmable guillotine cutters slice large parent sheets down to their final trim sizes with absolute precision.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <h4 className="text-[#20283c] font-bold mb-1">Folding</h4>
                <p className="text-sm text-slate-600">
                  High-speed machines fold printed sheets into &apos;signatures&apos;—booklets of 8, 16, or 32 pages ready for binding.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <h4 className="text-[#20283c] font-bold mb-1">Binding</h4>
                <p className="text-sm text-slate-600">
                  Signatures are gathered and bound together using methods like perfect binding, saddle-stitching, or section-sewing.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded p-4">
                <h4 className="text-[#20283c] font-bold mb-1">Finishing</h4>
                <p className="text-sm text-slate-600">
                  Value-added enhancements are applied, including thermal lamination, UV coating, foil stamping, or die-cutting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
