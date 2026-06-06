import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white">
      <h2 className="text-4xl font-serif mb-4">Not Found</h2>
      <p className="text-slate-400 mb-8">Could not find requested resource</p>
      <Link href="/" className="px-6 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full hover:bg-blue-800/40 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
