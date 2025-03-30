import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiCloseLine, RiMenuLine } from "react-icons/ri";

import { globalCn } from "@/utils/cn";

import { NAV_LINKS } from "../../constant";
import { isActiveNavLink } from "../utils";

export const MNavButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <button className="h-full cursor-pointer px-3 sm:hidden" type="button" onClick={() => setIsOpen(!isOpen)}>
        <RiMenuLine className="size-6 text-slate-400" />
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10 bg-gray-950/50" />
          <div className="fixed top-0 right-0 z-10 h-full w-40 border border-slate-700 bg-slate-900">
            <div className="relative">
              <button className="absolute top-0 right-0 p-3" type="button" onClick={() => setIsOpen(false)}>
                <RiCloseLine className="size-6 text-slate-400" />
              </button>
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    className={globalCn(
                      "flex justify-center p-4 text-slate-400",
                      isActiveNavLink(link, pathname) ? "text-gray-50" : "text-slate-400"
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
