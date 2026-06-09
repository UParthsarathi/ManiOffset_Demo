import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutPageContent } from "@/components/AboutPageContent";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#0d1430] relative selection:bg-[#f29a1b]/30 selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <AboutPageContent />
      </div>
      <Footer />
    </main>
  );
}
