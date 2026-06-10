import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";

export default function AdvancedPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "Advanced Concepts" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Advanced Concepts
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Going beyond the standard CMYK workflow.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Stochastic vs. Halftone Screening</h3>
        <p className="mb-6">
          While traditional AM (Amplitude Modulated) screening uses regular grids of dots of varying sizes, FM (Frequency Modulated) or stochastic screening uses uniformly microscopic dots scattered irregularly. The result? Near-photographic continuous tone that completely eliminates moiré patterns.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Hexachrome & Expanded Color Gamut (ECG)</h3>
        <p className="mb-6">
          By adding Orange and Green (or Violet) to the standard CMYK ink set, ECG printing can hit upwards of 90% of the Pantone spot color library using process color formulas alone. Ideal for rich photographic reproduction and packaging where multiple solid colors are needed.
        </p>
      </div>
    </div>
  );
}
