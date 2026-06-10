import { PressHeader } from "@/components/PressHeader";
import { PressFooter } from "@/components/PressFooter";
import { AboutSidebar } from "@/components/AboutSidebar";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white text-slate-800 font-sans selection:bg-[#024987]/20 selection:text-slate-900 relative">
      <PressHeader title="About FeelThePrint" />
      <div className="flex-grow w-full max-w-[1100px] mx-auto flex flex-col md:flex-row px-4 sm:px-6 md:px-8 py-8 md:py-12 gap-8 lg:gap-14">
        <aside className="w-full md:w-60 lg:w-64 flex-shrink-0">
          <div className="sticky top-[100px]">
            <AboutSidebar />
          </div>
        </aside>
        <div className="flex-1 min-w-0 pb-16">
          {children}
        </div>
      </div>
      <PressFooter />
    </main>
  );
}
