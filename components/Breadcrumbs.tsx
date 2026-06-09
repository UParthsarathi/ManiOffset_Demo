import Link from "next/link";

export function Breadcrumbs({ current }: { current?: string }) {
  return (
    <div className="text-[13px] font-sans mb-8 text-[#e51d2e] flex items-center flex-wrap gap-1.5">
      <Link href="/" className="hover:underline">Home</Link>
      <span className="text-slate-400">›</span>
      <Link href="/press" className={`hover:underline ${!current ? 'text-slate-900' : ''}`}>Printing Academy</Link>
      {current && (
        <>
          <span className="text-slate-400">›</span>
          <span className="text-slate-900">{current}</span>
        </>
      )}
    </div>
  );
}
