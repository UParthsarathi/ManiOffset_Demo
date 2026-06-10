import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function IndustryStandardsPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "Industry Standards" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Industry Standards
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        The benchmarks that guide our quality control.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Commercial offset printing is an exact science governed by strict international standards. These specifications ensure predictability, allowing designers and prepress engineers from around the globe to trust that their digital concepts will translate perfectly across different paper stocks, press lines, and geographical locations.
        </p>

        <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">ISO 12647-2</h4>
            <p className="text-sm mb-0">The overarching international standard specifically engineered for sheet-fed and heatset web offset lithographic printing processes. It dictates explicit CIELAB target values for the primary process colors (Cyan, Magenta, Yellow, Black), outlines strict dot gain (Tonal Value Increase - TVI) curve tolerances, specifies paper shade coordinates, and defines the acceptable deviations mathematically via Delta-E tolerances. Mani Offset strictly adheres to ISO 12647-2 through daily spectrophotometric profiling and press recalibrations to lock our output tightly within these parameters.</p>
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Paper Weight Nomenclature</h3>
        <p className="mb-4">Paper weight and density can be profoundly confusing, yet choosing the right stock is arguably the most critical physical calculation in your project. We simplify this into two key metrics:</p>
        <ul className="list-disc pl-5 mb-8 space-y-2">
            <li><strong>GSM (Grams per Square Meter):</strong> The universal metric standard used extensively at Mani Offset to measure the true physical mass of the paper. It describes the weight of a single sheet of paper cut to a one-square-meter size. Common interior book weights span from a lightweight 60 GSM (Bible paper) up to 130 GSM (premium catalogs). Substantial covers, business cards, and packaging boards typically span from 170 GSM up to 400 GSM.</li>
            <li><strong>Caliper (Thickness):</strong> Measured in thousandths of an inch (points) or microns, the physical thickness of a sheet. Critically, two papers of the precise same 120 GSM weight can have vastly varying calipers depending on how tightly their fibers are calendared (compressed) during manufacturing. An uncoated, rough paper will feel significantly thicker and stiffer than a heavily rolled, slick glossy coated paper of the same GSM.</li>
        </ul>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">FOGRA & GRACoL Color Spaces</h3>
        <p className="mb-6">
          These are standardized characterization datasets that define precisely how CMYK colors should reproduce on specific paper grades. FOGRA39 (often used globally for coated stocks) and GRACoL2013 supply the master ICC profiles that you utilize in Adobe Creative Cloud to soft-proof your work. By assigning these profiles to your artwork, and trusting that our presses are calibrated to physically hit the Delta-E metrics they define, we guarantee seamless consistency from your computer monitor to our final printed sheet.
        </p>
      </div>
    </div>
  );
}
