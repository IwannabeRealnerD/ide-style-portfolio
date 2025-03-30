"use client";

import { ReactNode } from "react";
import Link from "next/link";

import { globalCn } from "@/utils/cn";

interface MenuLinkProps {
  title: string;
  link: string;
  icon: ReactNode;
  isActive: boolean;
}

export const MenuLink = (props: MenuLinkProps) => {
  return (
    <Link className="flex items-center gap-2 py-1 pl-12.5" href={props.link}>
      {props.icon}
      <p className={globalCn(props.isActive ? "text-gray-50" : "text-slate-500")}>{props.title}</p>
    </Link>
  );
};
