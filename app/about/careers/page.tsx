import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CareersPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Careers" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Careers
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Join our team of dedicated professionals in Sivakasi.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          At Mani Offset, our greatest asset is our people. From prepress engineers and experienced offset operators to customer service representatives and logistics experts, it takes a diverse team to deliver perfection.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Why Work With Us?</h3>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li><strong>Continuous Learning:</strong> Access to cross-training on the latest printing equipment.</li>
          <li><strong>Health & Safety:</strong> We maintain a rigorous, ISO-compliant workplace prioritizing operator safety.</li>
          <li><strong>Stability:</strong> Join a company with nearly 30 years of sustained growth and industry leadership.</li>
        </ul>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mt-10 text-center">
            <h4 className="text-xl font-bold text-[#20283c] mb-2">Current Openings</h4>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">We are always looking for skilled talent. While we might not have immediate openings in all departments, we welcome your application.</p>
            
            <a href="mailto:careers@feeltheprint.com" className="inline-block bg-[#f29a1b] hover:bg-[#de8710] text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition-colors">
                Email Your Resume
            </a>
            <p className="text-xs text-slate-500 mt-4 font-mono">careers@feeltheprint.com</p>
        </div>
      </div>
    </div>
  );
}
