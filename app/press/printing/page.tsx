import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrintingPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: "Printing Academy", href: "/press" }, { label: "Press" }]} />

      <h1 className="text-[36px] md:text-[42px] font-bold text-[#20283c] tracking-tight mb-8 font-sans">
        The Offset Printing Run
      </h1>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          The press room is where digital data is brutalized into physical reality. At the core of commercial printing is lithography—an elemental principle derived from the chemical reality that oil (ink) and water (fountain solution) violently repel each other. Combined with massive rotational mechanics, heavy fluid viscosities, and pneumatic feeds, the offset printing press is one of the most mechanically complex mass-manufacturing devices ever engineered.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Principle of Lithography</h3>
        <p className="mb-6">
          The aluminum plates generated in Pre-Press are not 3D stamps; they are perfectly flat (planographic). The image area on the plate has been hardened by lasers to attract heavy, oil-based ink. The non-image area is treated to attract water. As the plate cylinder spins at thousands of revolutions per hour, dampening rollers coat the plate in a thin film of water, which adheres only to the blank spaces. Immediately, ink rollers follow, laying down thick offset ink. The water physically forces the ink away from the blank spaces, forcing it to adhere strictly to the laser-etched image. 
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The &apos;Offset&apos; Transfer</h3>
        <p className="mb-6">
          The plate cylinder never touches the actual paper. If it did, the abrasive texture of the paper and its loose fibers would rapidly degrade the microscopic dots etched into the aluminum plate, ruining the image after a few thousand impressions. Instead, the plate cylinder stamps the inverted ink image onto a secondary cylinder wrapped in a specialized, highly resilient rubber blanket. This soft rubber blanket squishes gently against the paper, perfectly &apos;offsetting&apos; the right-reading image onto the substrate. This gentle transfer allows for printing on rough, heavily textured surfaces without losing dot fidelity or shattering the master plate.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Register, Calibration, & Velocity</h3>
        <p className="mb-6">
          A standard Heidelberg or Komori offset press consists of multiple printing &apos;towers&apos; lined up sequentially—one massive tower mechanism entirely dedicated to Cyan, one for Magenta, one for Yellow, one for Black, and often additional towers for custom Pantone spots or protective UV varnishes. A single sheet of paper must be passed from tower to tower using mechanical grippers traveling at violent speeds, receiving a layer of wet ink from each rotating blanket. If the paper shifts by a fraction of a millimeter during this journey, the microscopic CMYK halftone dots will misalign, causing the image to blur horribly (Registration Failure). To counteract this, modern presses utilize immense suction vacuums, precisely machined bearer rings, inline spectrophotometric cameras monitoring color density, and automatic computerized adjustments to keep registration locked tight while running upwards of 15,000 sheets per hour.
        </p>
      </div>
    </div>
  );
}
