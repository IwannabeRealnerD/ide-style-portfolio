"use client";

import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { RiFile2Fill, RiFolder3Fill, RiFolderOpenFill } from "react-icons/ri";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import { MenuLink } from "../components/MenuLink";

interface DirectoryPartProps {
  isOpened: boolean;
  onClick: () => void;
  directoryName: string;
  menus: { color: string; links: { href: string; title: string }[] };
}

export const DirectoryPart: FunctionComponent<DirectoryPartProps> = (props) => {
  const pathname = usePathname();
  const isDirectoryActive = pathname.includes(props.directoryName);
  return (
    <>
      <button
        className="flex w-full cursor-pointer content-start items-center gap-2 p-2"
        type="button"
        onClick={props.onClick}
      >
        {props.isOpened ? (
          <>
            <VscChevronDown className="size-4 shrink-0 text-slate-500" />
            <RiFolderOpenFill className="size-4 shrink-0 text-teal-400" />
          </>
        ) : (
          <>
            <VscChevronRight className="size-4 shrink-0 text-slate-500" />
            <RiFolder3Fill className="size-4 shrink-0 text-teal-400" />
          </>
        )}
        <p className={clsx("text-base", isDirectoryActive ? "text-gray-50" : "text-slate-500")}>
          {props.directoryName}
        </p>
      </button>
      {props.isOpened && (
        <div className="">
          {props.menus.links.map((menu) => {
            const isMenuActive = pathname.includes(menu.href);
            return (
              <MenuLink
                key={menu.href}
                icon={<RiFile2Fill color={props.menus.color} />}
                isActive={isMenuActive}
                link={menu.href}
                title={menu.title}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
