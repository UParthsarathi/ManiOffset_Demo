import Link from "next/link";

export function PressFooter() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 py-6 px-4 sm:px-6 md:px-8 text-sm text-slate-500 mt-auto">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Mani Offset. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-[#005fb3] transition-colors">
            FeelThePrint Home
          </Link>
          <Link href="/about" className="hover:text-[#005fb3] transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
