"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { GLOBAL_INTERNAL_URL } from "@/constants/urls";
import { globalCn } from "@/utils/cn";

import { NAV_LINKS } from "../../constant";
import { isActiveNavLink } from "../utils";

import { MNavButtons } from "./MNavButtons";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="relative flex h-12 shrink-0 items-center justify-between border-b border-slate-700 text-base sm:justify-start">
      <div className="flex h-full w-60 shrink-0 items-center justify-start border-slate-700 sm:border-r-1">
        <Link
          className="flex h-full w-full items-center pl-3.5 text-base text-slate-400"
          href={GLOBAL_INTERNAL_URL.INDEX}
        >
          iwannaberealnerd
        </Link>
      </div>
      <nav className="h-full">
        <div className="relative block h-full sm:hidden">
          <MNavButtons />
        </div>
        <div className="hidden h-full sm:flex">
          {NAV_LINKS.map((link) => {
            return (
              <div key={link.href} className="border-r border-slate-700">
                <Link
                  className={globalCn(
                    "relative flex h-full w-full items-center justify-center px-4 text-base font-normal",
                    isActiveNavLink(link, pathname) ? "text-gray-50" : "text-slate-400"
                  )}
                  href={link.href}
                >
                  {link.label}
                  {isActiveNavLink(link, pathname) && (
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-300" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        <div />
      </nav>
    </div>
  );
};
