import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function QualityAssurancePage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Quality Assurance" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Quality Assurance
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Our Commitment to Zero-Defect Printing.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          At Mani Offset, quality is not a final step—it is integrated into every phase of our workflow. We employ a rigorous Multi-Point Inspection Protocol (MPIP) to guarantee absolute consistency across millions of printed impressions.
        </p>

        <div className="relative aspect-[21/9] rounded overflow-hidden shadow-sm border border-slate-200 mb-8 md:mb-10 lg:mb-12">
          <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Quality Assurance Inspection" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Color Management</h4>
            <p className="text-sm text-slate-600">Spectrophotometers and localized densitometers are used continuously on our presses to ensure delta-E values remain well within specific standards. Your brand colors will look identical on the first printed sheet and the hundred-thousandth.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h4 className="text-lg font-bold text-[#20283c] mb-2">Material Verification</h4>
            <p className="text-sm text-slate-600">Every batch of paper and ink arrives with a Certificate of Analysis. Our internal lab cross-verifies moisture content, GSM consistency, and ink tackiness before materials ever touch the press floor.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Automated Defect Detection</h3>
        <p className="mb-6">
          We utilize in-line camera inspection systems that scan every printed sheet at high speed. Any sheet displaying hickies, misregistration, or color fluctuation is automatically flagged and isolated, ensuring zero defective products reach the delivery stack.
        </p>
      </div>
    </div>
  );
}
