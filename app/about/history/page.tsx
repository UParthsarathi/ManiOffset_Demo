import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function HistoryPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Our History" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Our History
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        A legacy of precision printing since 1995.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Founded in Sivakasi by visionary print artisans, Mani Offset began as a small-scale letterpress operation. With a focus on quality and unwavering commitment to deadlines, we quickly gained the trust of local businesses and academic institutions. What started in a modest 2,000-square-foot facility with hand-fed treadle presses evolved into a sprawling industrial operation, driven by a philosophy that continuous reinvestment in technology is the only way to remain competitive and relevant in a rapidly shifting print landscape.
        </p>

        <div className="relative aspect-[21/9] rounded overflow-hidden shadow-sm border border-slate-200 mb-8 md:mb-10 lg:mb-12">
          <Image src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" alt="Vintage Printing Press" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">The Early Years (1995 - 2005)</h3>
        <p className="mb-6">
          During our first decade, we perfected the art of manual binding and transitioned into multi-color offset printing. This period marked our expansion into comprehensive educational material production, handling large-scale textbook runs for universities across the state. Our initial foray into automation saw the installation of single and two-color sheetfed offset presses, which dramatically increased our output capacity. We established early precedents for our quality control mechanisms during this era, ensuring that even as volumes scaled, the attention to detail did not waver. We also expanded our logistics capabilities, moving from local deliveries to interstate supply chains.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Technological Leap (2006 - 2018)</h3>
        <p className="mb-6">
          Understanding the demands of modern commercial printing, we heavily invested in automated Pre-Press systems and high-speed offset machines imported from Germany. This allowed us to reduce turnaround times by 60% while simultaneously elevating print quality. Computer-to-Plate (CTP) technology replaced traditional film processing, vastly improving image fidelity and registration precision. We integrated in-line coating units and fully automated bindery lines, including perfect binding, saddle stitching, and automated section folding. During this period, our facility grew to over 100,000 square feet, and we began serving national-level FMCG brangs with stringent packaging requirements.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Modern Era & Digital Integration (2019 - Present)</h3>
        <p className="mb-6">
          Today, Mani Offset and our digital storefront FeelThePrint stand at the intersection of traditional craftsmanship and digital efficiency. We offer a seamless web-to-print experience, catering to clients nationwide with our fleet of automated print engines and precision finishing equipment. The implementation of ERP systems has digitized our entire workflow, from quoting and material procurement to shop-floor tracking and final dispatch. AI-assisted quality control, rigorous eco-friendly practices, and expanded warehousing capabilities define our current operations. As we look to the future, we continue to bridge the tangible weight of high-quality print with the frictionless convenience of modern e-commerce.
        </p>
      </div>
    </div>
  );
}
