import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PrintingOptionsPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "Printing Options" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Printing Options
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Understanding the capabilities of our offset presses.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Depending on your specific product—be it a high-end corporate brochure, a mass-market textbook, or essential banking forms—different printing techniques and ink configurations apply. Offset printing remains the gold standard for high-volume commercial production, offering unmatched cost-efficiency at scale alongside variable line screens that outpace digital toners in textural reproduction.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">CMYK Process Printing</h3>
        <p className="mb-6">
          The standard for full-color photographic reproduction. Using Cyan, Magenta, Yellow, and Key (Black), our presses apply layers of microscopic halftone dots in specific rosette patterns to create the optical illusion of millions of distinct colors. By varying the diameter of these dots (AM screening), or the density of uniformly sized dots (FM screening), CMYK process printing effectively creates the tonal graduations required for vivid, lifelike images. Our high-speed four-color and five-color offset presses can apply these four inks dynamically across varying substrates at incredibly high fidelity.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Pantone Matching System (PMS) / Spot Colors</h3>
        <p className="mb-6">
          When absolute brand color accuracy is required (like a specific corporate red, fluorescent neon, or a vibrant solid orange), we utilize pre-mixed PMS spot inks. Spot colors avoid the microscopic dot patterns of CMYK and lay down a solid, perfectly matched hue over the paper surface. This is critical for brand integrity; while CMYK mixtures can suffer from slight color drifting across different papers and press runs due to dot gain variables, a PMS 032 Red will look undeniably like a PMS 032 Red every single time. It is frequently applied on a dedicated 5th or 6th pressing tower alongside standard CMYK.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Aqueous & UV Coatings</h3>
        <p className="mb-6">
          Applied in-line during the printing process through a dedicated coating tower, these clear varnishes serve dual purposes: physical protection against scuffing during transit, and an elevation of the visual &quot;pop&quot; of the underlying ink. Aqueous coatings are water-based, environmentally friendly layers that seal the ink quickly and resist fingerprints, often used on book covers and sales sheets. UV (Ultraviolet) coatings provide a far more dramatic mirror-like gloss or extreme matte finish. Cured instantly via intense UV lamps on the press, this hard shell is frequently applied to premium packaging and high-end collateral to offer striking tactile contrasts.
        </p>
      </div>
    </div>
  );
}
