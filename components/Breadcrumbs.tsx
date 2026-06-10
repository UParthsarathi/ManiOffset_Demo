import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="text-[13px] font-sans mb-8 text-[#e51d2e] flex items-center flex-wrap gap-1.5">
      <Link href="/" className="hover:underline">Home</Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <span className="text-slate-400">›</span>
          {item.href ? (
            <Link href={item.href} className="hover:underline">{item.label}</Link>
          ) : (
            <span className="text-slate-900">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
