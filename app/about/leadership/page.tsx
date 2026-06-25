import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function LeadershipPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "About Us", href: "/about" },
        { label: "Leadership" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Leadership
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        The team steering Mani Offset&apos;s vision for the future.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-8">
          Mani Offset is guided by a team of industry veterans and forward-thinking innovators. Our leadership combines extensive experience in traditional print craftsmanship with modern digital expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full sm:w-64 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="CEO" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#20283c] mb-1">Mani K.</h3>
              <p className="text-[#005fb3] font-semibold text-sm mb-2">Founder & Chairman</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With over four decades of experience in the printing industry, Mani K. established the foundation of unwavering quality that the company stands on today.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full sm:w-64 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Managing Director" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#20283c] mb-1">S. Karthik</h3>
              <p className="text-[#005fb3] font-semibold text-sm mb-2">Managing Director</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Spearheading modern operations and digital integration, Karthik oversees the expansion of FeelThePrint and continuous infrastructural enhancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
