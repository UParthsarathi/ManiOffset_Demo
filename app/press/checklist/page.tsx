import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";

export default function ChecklistPage() {
  const steps = [
    { title: "CMYK Color Space Translation", desc: "Digital screens display RGB (light), but printing utilizes CMYK (ink). Ensure your document’s master color mode is set to CMYK. Do not rely on automated conversions during PDF export; manually convert vivid RGB elements and correct any stark gamut shifts. Avoid dense ink limits (TAC over 300%) which can cause drying issues and offsetting." },
    { title: "Image Resolution Protocols", desc: "Standard web imagery (72 DPI) will appear violently pixelated in offset print. All raster graphics (photos, textures) must be minimum 300 DPI at their 100% placed, actual printed size. Upsampling a small image to 300 DPI will not artificially create quality. Vector graphics (logos, illustrations) bypass this entirely." },
    { title: "The Bleed Area Margin", desc: "If background colors or images need to reach the physical edge of the final trimmed page, they must extend 3mm (0.125 inches) past the document's trim edge in your layout software. Offset presses experience microscopic paper shifting; without this extra 'bleed' buffer, your final trimmed copies may show glaring white hairline borders." },
    { title: "Quiet Safe Zones", desc: "The opposite of bleed. Keep all critical elements (page numbers, body text, essential graphics) at least 5mm (0.2 inches) inward from the final trim edge. Thick perfect-bound books also require extra safe margins in the gutter (page center) to prevent text from disappearing into the spine fold (creep allowance)." },
    { title: "Font Embedding & Vectorization", desc: "Never assume our servers have your custom desktop fonts. All Adobe fonts must be definitively embedded upon PDF export. If utilizing highly stylized, erratic script typography or specialized glyphs, forcefully outline (convert to curves/vector shapes) the text to guarantee the geometry of the characters cannot fail or substitute." },
    { title: "PDF/X Compilation Standard", desc: "Do not send 'Interactive' PDFs or unprotected native files. For bulletproof reliability, enforce the international commercial print standards on export: Use PDF/X-1a (for flattened transparencies and pure CMYK lock-in) or the more modern PDF/X-4 (which correctly maintains live transparencies and complex layering). Ensure crop marks are toggled on, and bleed data is included in the output." }
  ];

  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "File Setup Checklist" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        File Setup Checklist
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Ensure your artwork is fundamentally press-ready.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          The predominant cause of timeline-busting delays in the printing industry is incorrectly prepared digital artwork. Rejections during our automated pre-flight require returning the files, triggering designer revisions, and restarting the entire queue cycle. We forcefully recommend validating your files against this critical checklist prior to generating your final PDF transmission.
        </p>

        <div className="flex flex-col gap-4 mt-8">
            {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 border border-slate-200 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                    <div>
                        <h4 className="font-bold text-[#20283c] text-[17px] m-0 mb-2">{step.title}</h4>
                        <p className="text-sm text-slate-600 m-0 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
