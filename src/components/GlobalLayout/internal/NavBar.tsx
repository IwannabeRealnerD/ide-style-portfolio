import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { NAV_LINKS } from "./constant";

export const NavBar = () => {
  const pathname = usePathname();
  const isActiveNavLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link.rootLink === "/") {
      return pathname === link.href;
    }
    return pathname.includes(link.rootLink);
  };
  return (
    <div className="flex items-center border-b border-line text-base h-12 justify-start">
      <div className="border-r-1 border-line shrink-0 h-full flex items-center justify-start pl-5.5 w-60">
        <p className="text-base text-light-grey">iwannaberealnerd</p>
      </div>
      <nav className="flex h-full">
        {NAV_LINKS.map((link) => {
          return (
            <div key={link.href} className="border-r border-line">
              <Link
                className={clsx(
                  "items-center flex font-normal text-base h-full justify-center px-4 relative w-full",
                  isActiveNavLink(link) ? "text-white" : "text-grey"
                )}
                href={link.href}
              >
                {link.label}
                {isActiveNavLink(link) && <div className="bg-orange bottom-0 h-1 left-0 absolute w-full" />}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
