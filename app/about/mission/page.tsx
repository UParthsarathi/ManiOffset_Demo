import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function MissionPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Mission & Values" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Mission & Values
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        The principles that guide our presses.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Our Core Mission</h3>
        <p className="mb-6 text-xl font-medium text-slate-800 border-l-4 border-[#005fb3] pl-4">
          To provide unparalleled commercial printing services that empower businesses to communicate their message with pristine clarity, absolute reliability, and aesthetic excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Uncompromising Quality</h4>
            <p className="text-sm">We believe that every impression matters. From the first sheet to the millionth, our color consistency and registration remain perfect.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Technological Innovation</h4>
            <p className="text-sm">We constantly invest in the latest pre-press, printing, and post-press technologies to deliver faster turnaround times and superior finishes.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Customer Centricity</h4>
            <p className="text-sm">Your deadlines are our deadlines. We build responsive relationships to ensure every custom print requirement is met seamlessly.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Sustainable Practices</h4>
            <p className="text-sm">We are committed to reducing our environmental footprint through responsible sourcing of paper, eco-friendly inks, and comprehensive recycling programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
