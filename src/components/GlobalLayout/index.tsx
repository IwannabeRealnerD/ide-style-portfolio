"use client";

import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RiGithubFill, RiTwitterFill } from "@remixicon/react";

import { links } from "./constant";
import * as styles from "./style.css";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = (props) => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.nameContainer}>
          <p>iwannaberealnerd</p>
        </div>
        <nav className={styles.navContainer}>
          {links.map((link) => (
            <div className={styles.navLink}>
              <Link key={link.href} href={link.href}>
                {link.label}
                {pathname === link.href && <div className={styles.activeNavLink} />}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      {props.children}
      <div className={styles.footerWrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.footerTextWrapper}>
            <p>find me in:</p>
          </div>
          <a
            className={styles.footerIconWrapper}
            href="https://x.com/WannabeRealnerD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RiTwitterFill />
          </a>
        </div>
        <div className={styles.rightContainer}>
          <a
            className={styles.githubInfoContainer}
            href="https://github.com/IwannabeRealnerD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>@IwannabeRealnerD</p>
            <RiGithubFill />
          </a>
        </div>
      </div>
    </div>
  );
};
