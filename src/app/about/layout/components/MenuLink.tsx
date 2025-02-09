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
    <Link className="flex items-center gap-2 pb-4 pl-12.5" href={props.link}>
      {props.icon}
      <p className={clsx("size-4", props.isActive ? "text-white" : "text-grey")}>{props.title}</p>
    </Link>
  );
};
