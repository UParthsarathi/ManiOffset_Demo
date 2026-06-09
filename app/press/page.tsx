import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function PressOverviewPage() {
  return (
    <div className="w-full">
      <Breadcrumbs />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Printing Academy
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Published July 7, 2015 · Updated March 26, 2026
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-4">
          Welcome to Mani Offset&apos;s Printing Academy!
        </p>
        <p className="mb-8">
          At Mani Offset, we constantly strive to better our process and ourselves. We love learning more about all the <Link href="#cool" className="text-[#005fb3] font-bold hover:underline">cool things</Link> that we can achieve with offset printing. If you share the same passion for advancing your knowledge, here&apos;s an intro guide to the entire offset printing process, complete with videos, photos, and expertise from those in the printing business. Exploring the pages in our Printing Academy will help you learn more about the process, so you&apos;ll be able to understand what&apos;s happening when you get your project printed with us. And we think that&apos;s pretty cool!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://picsum.photos/seed/press1/600/400" alt="Pre-Press Setup" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Link href="/press/pre-press" className="text-[#005fb3] text-[15px] hover:underline">Pre-Press Process</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://picsum.photos/seed/press2/600/400" alt="Printing Press" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Link href="/press/printing" className="text-[#005fb3] text-[15px] hover:underline">The Printing Press</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-slate-200">
              <Image src="https://picsum.photos/seed/press3/600/400" alt="Post-Press Binding" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Link href="/press/post-press" className="text-[#005fb3] text-[15px] hover:underline">Post-Press &amp; Binding</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
