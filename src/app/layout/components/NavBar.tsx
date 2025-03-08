"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { GLOBAL_INTERNAL_URL } from "@/constants/urls";

import { NAV_LINKS } from "../constant";

export const NavBar = () => {
  const pathname = usePathname();
  const isActiveNavLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link.rootLink === "/") {
      return pathname === link.href;
    }
    return pathname.includes(link.rootLink);
  };
  return (
    <div className="flex h-12 shrink-0 items-center justify-start border-b border-slate-700 text-base">
      <div className="flex h-full w-60 shrink-0 items-center justify-start border-r-1 border-slate-700">
        <Link
          className="flex h-full w-full items-center pl-3.5 text-base text-slate-400"
          href={GLOBAL_INTERNAL_URL.INDEX}
        >
          iwannaberealnerd
        </Link>
      </div>
      <nav className="flex h-full">
        {NAV_LINKS.map((link) => {
          return (
            <div key={link.href} className="border-r border-slate-700">
              <Link
                className={clsx(
                  "relative flex h-full w-full items-center justify-center px-4 text-base font-normal",
                  isActiveNavLink(link) ? "text-gray-50" : "text-slate-400"
                )}
                href={link.href}
              >
                {link.label}
                {isActiveNavLink(link) && <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-300" />}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
