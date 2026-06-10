import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrePressPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Printing Academy", href: "/press" }, { label: "Pre-Press" }]} />
      
      <h1 className="text-[36px] md:text-[42px] font-bold text-[#20283c] tracking-tight mb-8 font-sans">
        Pre-Press: The Foundation
      </h1>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Pre-press acts as the hyper-vigilant gatekeeper between raw digital designs and the massive industrial mechanics of the press room. This division is tasked with ensuring that a designer&apos;s creative vision is mathematically and mechanically sound for physical reproduction. If a flaw sneaks past pre-press and hits the aluminum plates, the mistake will be flawlessly replicated thousands of times per hour. Therefore, pre-press is an environment governed by strict algorithmic checks, intense color management theory, and absolute paranoia.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Pre-Flight & RIP Algorithms</h3>
        <p className="mb-6">
          When a client&apos;s PDF arrives, it immediately enters our Raster Image Processor (RIP). But before it converts the artwork into printable dot patterns, the file undergoes automated &quot;pre-flighting&quot;. The software aggressively scans for missing fonts, low-resolution raster elements (sub 250-DPI), hidden transparent layers that might flatten strangely, and color spaces (RGB vs CMYK). It also calculates Total Area Coverage (TAC) parameters—if an area contains too much dense ink (e.g., 100% C, M, Y, and K stacked together), the ink will never dry on the press, tearing the paper. The RIP algorithms flag these issues, allowing our engineers to surgically adjust trap lines and gamut mappings before a single plate is burned.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Imposition: Master Sheet Architecture</h3>
        <p className="mb-6">
          Books and magazines are not printed in their final read sequence. They are arranged via digital &apos;Imposition&apos; onto massive press sheets (often 28x40 inches). This architecture is a highly complex puzzle; the pages are laid out seemingly out of order and rotated in various directions so that when the heavy sheet is folded 4 or 5 times in the bindery, the pages will suddenly fall into flawless sequential order. Imposition software must account for &quot;creep&quot; (the physical bulk of paper causing inner pages to push outward during saddle stitching), margins, cut marks, bleed expansions, and the exact gripping mechanism of the printing press to prevent the sheet from slipping in the rollers.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Computer-To-Plate (CTP) Etching</h3>
        <p className="mb-6">
          Once the imposition matrix is finalized and approved via high-definition color proofs by the client, the data is pushed to our CTP (Computer-to-Plate) machinery. CTP bypasses the archaic film-negative process, using high-intensity thermal lasers to burn the exact CMYK separations directly onto sprawling, emulsion-coated aluminum plates. An 8-color print job might require 8 massive aluminum plates precisely imaged. These plates are then chemically developed, baked for endurance, and inspected for microscopic imperfections. They become the physical masters that will transfer the image to the offset blankets on the production floor.
        </p>
      </div>
    </div>
  );
}
