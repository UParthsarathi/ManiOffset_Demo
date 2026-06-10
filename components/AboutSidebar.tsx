"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function AboutSidebar() {
  const pathname = usePathname();

  const resourceLinks = [
    { href: "/about", label: "About Us", isActive: pathname === "/about" || (pathname.startsWith("/about/") && !["/about/history", "/about/mission", "/about/leadership", "/about/careers"].includes(pathname)) },
    { href: "/about/history", label: "Our History", isActive: pathname.startsWith("/about/history") },
    { href: "/about/mission", label: "Mission & Values", isActive: pathname.startsWith("/about/mission") },
    { href: "/about/leadership", label: "Leadership", isActive: pathname.startsWith("/about/leadership") },
    { href: "/about/careers", label: "Careers", isActive: pathname.startsWith("/about/careers") },
  ];

  const academyLinks = [
    { href: "/about", label: "Overview" },
    { href: "/about/facilities", label: "Our Facilities" },
    { href: "/about/quality-assurance", label: "Quality Assurance" },
    { href: "/about/sustainability", label: "Sustainability" },
  ];

  return (
    <div className="flex flex-col gap-8 text-[13.5px]">
      {/* Resource Center */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 pl-3">
          COMPANY
        </h3>
        <ul className="flex flex-col">
          {resourceLinks.map((link) => {
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded transition-colors ${
                    link.isActive
                      ? "bg-slate-100 text-[#20283c] font-semibold"
                      : "text-[#005fb3] hover:text-[#004a8f] hover:bg-slate-50 hover:underline"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Printing Academy */}
      <div>
        <h3 className="text-base font-bold text-[#20283c] mb-2 pl-3">
          Deep Dive
        </h3>
        <ul className="flex flex-col">
          {academyLinks.map((link) => {
            const isActive = pathname === link.href;
            const isIntro = link.label === "Overview";
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`flex items-center px-3 py-2 transition-colors ${
                    isActive
                      ? "text-[#005fb3] font-bold"
                      : "text-slate-700 hover:text-[#005fb3] hover:underline"
                  } ${!isIntro ? "pl-5" : ""}`}
                >
                  {!isIntro && (
                    <ChevronRight className={`w-3 h-3 mr-2 ${isActive ? "text-[#005fb3]" : "text-slate-400"}`} />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
