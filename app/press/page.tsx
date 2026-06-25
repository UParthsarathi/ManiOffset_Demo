import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Printer, Settings } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Printing Academy',
  description: 'Demystifying the science, terminology, and mechanics behind high-volume industrial offset lithography.',
};

export default function PressOverviewPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Printing Academy" }]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-3 font-sans">
        Printing Academy
      </h1>
      <p className="text-base text-slate-500 mb-10 max-w-2xl font-sans leading-relaxed">
        Demystifying the science, terminology, and brutal mechanics behind high-volume industrial offset lithography. Stop guessing, prepare files perfectly, and understand exactly what happens to your artwork on the factory floor.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-8 text-lg font-medium text-slate-800 leading-snug">
          Commercial printing is fundamentally distinct from the office laser-jet. It is heavy manufacturing. The physical reality of squeezing rapidly drying oil-based ink onto thousands of miles of moving paper at extreme velocity dictates severe limitations and complex rules for digital designers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <Link href="/press/pre-press" className="group flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-[#005fb3] hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#20283c] mb-2 m-0 mt-0">Pre-Press Algorithms</h3>
                <p className="text-sm text-slate-600 mb-4 m-0 leading-relaxed max-w-sm">From strict PDF/X-4 compliance protocols to Total Area Coverage (TAC) logic and thermal CTP platemaking.</p>
                <div className="mt-auto flex items-center text-sm font-bold text-[#005fb3]">
                    Explore Pre-Press <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            <Link href="/press/printing" className="group flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-[#005fb3] hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Printer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#20283c] mb-2 m-0 mt-0">Press Operations</h3>
                <p className="text-sm text-slate-600 mb-4 m-0 leading-relaxed max-w-sm">Delve into the physics of offset lithography, CMYK ink transfer, microscopic dot gain, and high-speed registration.</p>
                <div className="mt-auto flex items-center text-sm font-bold text-[#005fb3]">
                    Explore The Press <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            <Link href="/press/post-press" className="group flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-[#005fb3] hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#20283c] mb-2 m-0 mt-0">Post-Press Anatomy</h3>
                <p className="text-sm text-slate-600 mb-4 m-0 leading-relaxed max-w-sm">Understand structural folding, die-cut tolerances, EVA vs PUR perfect binding, and protective aqueous coatings.</p>
                <div className="mt-auto flex items-center text-sm font-bold text-[#005fb3]">
                    Explore Bindery <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            <Link href="/press/checklist" className="group flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-[#005fb3] hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#20283c] mb-2 m-0 mt-0">File Setup Checklists</h3>
                <p className="text-sm text-slate-600 mb-4 m-0 leading-relaxed max-w-sm">Stop rejection errors before they happen. Critical parameters for bleeding, creep margins, and DPI scaling.</p>
                <div className="mt-auto flex items-center text-sm font-bold text-[#005fb3]">
                    View Cheat-sheets <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}
