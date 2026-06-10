import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function LogisticsPage() {
  return (
    <div className="w-full">
      <Breadcrumbs items={[
        { label: "Printing Academy", href: "/press" },
        { label: "Logistics" }
      ]} />
      
      <h1 className="text-[36px] md:text-[44px] font-bold text-[#20283c] tracking-tight mb-2 font-sans">
        Logistics & Distribution
      </h1>
      <p className="text-sm text-slate-500 mb-8 font-sans">
        Ensuring your print arrives perfectly.
      </p>

      <div className="prose prose-slate max-w-none text-[15px] leading-relaxed text-slate-700">
        <p className="mb-6">
          Once the ink dries and the binding is set, the job is only half complete. At Mani Offset, our logistics wing ensures that your ton-scale printed products are distributed safely.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Carton Selection & Weight Metrics</h3>
        <p className="mb-6">
          We utilize double-wall corrugated cartons optimized for paper density. Books are astronomically heavy—a single pallet of books can easily weight over 1,500 kilograms. Cartons are loaded algorithmically to not exceed 15kg to comply with manual lifting safety limits for couriers.
        </p>

        <h3 className="text-2xl font-bold text-[#20283c] mb-4 mt-8">Palletization</h3>
        <p className="mb-6">
          Pallets are built in structural, interlocking brick patterns. We utilize heavy-gauge stretch film wrapping and edge protectors. This ensures the cargo sustains no crushing or lateral shifting during cross-country freight transit.
        </p>
      </div>
    </div>
  );
}
