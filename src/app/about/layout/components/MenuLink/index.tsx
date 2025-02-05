"use client";

import { ReactNode } from "react";
import Link from "next/link";

import { clsx } from "clsx";

import * as styles from "./style.css";

interface MenuLinkProps {
  title: string;
  link: string;
  icon: ReactNode;
  isActive: boolean;
}

export const MenuLink = (props: MenuLinkProps) => {
  return (
    <Link className={styles.container} href={props.link}>
      {props.icon}
      <p className={clsx(styles.linkText, props.isActive ? styles.activeLinkText : styles.inActiveLinkText)}>
        {props.title}
      </p>
    </Link>
  );
};
