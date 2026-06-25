import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function SustainabilityPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Sustainability" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Sustainability Initiatives
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Because taking care of paper means taking care of forests.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          The printing industry has a profound connection to the environment. At Mani Offset, we take our ecological responsibility seriously, implementing comprehensive waste-reduction protocols and utilizing sustainable resources wherever possible.
        </p>

        <div className="relative aspect-video rounded overflow-hidden shadow-sm border border-slate-200 mb-8">
          <Image src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200" alt="Sustainable Printing Practices" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 border-l-4 border-l-green-500">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Vegetable-Based Inks</h4>
            <p className="text-sm">We&apos;ve transitioned a significant portion of our production to soy and vegetable-based inks. These emit fewer Volatile Organic Compounds (VOCs) and make the paper recycling process significantly easier.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 border-l-4 border-l-green-500">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Responsible Paper Sourcing</h4>
            <p className="text-sm">We provide options for recycled stock and ensure that our primary virgin paper suppliers comply with sustainable forestry certifications.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 border-l-4 border-l-green-500">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Industrial Waste Recycling</h4>
            <p className="text-sm">100% of our paper offcuts, makeready sheets, and corrugated packaging waste are gathered and sent directly to recycling plants for repulping.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 border-l-4 border-l-green-500">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Plate Recycling</h4>
            <p className="text-sm">The thousands of aluminum plates we use annually in our CTP process are collected and sold to architectural and automotive recycling foundries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
