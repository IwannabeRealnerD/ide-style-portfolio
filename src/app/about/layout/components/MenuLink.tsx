"use client";

import { ReactNode } from "react";
import Link from "next/link";

import { clsx } from "clsx";

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
      <p className={clsx(props.isActive ? "text-white" : "text-grey")}>{props.title}</p>
    </Link>
  );
};
