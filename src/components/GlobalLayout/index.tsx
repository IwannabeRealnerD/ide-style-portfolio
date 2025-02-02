"use client";

import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

import { NAV_LINKS } from "./constant";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = (props) => {
  const pathname = usePathname();

  const isActiveNavLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link.rootLink === "/") {
      return pathname === link.href;
    }
    return pathname.includes(link.rootLink);
  };

  return (
    <div className="bg-deep-navy border border-line rounded-lg flex flex-col m-10 ">
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
      <div>{props.children}</div>
      <div className="bg-deep-navy border-t border-line flex h-12.5 justify-between">
        <div className="flex">
          <div className="border-r border-line flex items-center justify-center w-36.5">
            <p className="text-grey text-base font-normal">find me in:</p>
          </div>
          <a
            className="items-center border-r border-line flex justify-center w-14"
            href="https://x.com/WannabeRealnerD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RiTwitterFill className="size-4.5 text-grey" />
          </a>
        </div>
        <div className="border-l border-line flex">
          <a
            className="items-center border-r border-line flex justify-center px-6 gap-1.5 text-grey"
            href="https://github.com/IwannabeRealnerD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>@IwannabeRealnerD</p>
            <RiGithubFill className="size-4.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
