"use client";

import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";

import { NAV_LINKS } from "./constant";
import * as styles from "./style.css";

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
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.nameContainer}>
          <p>iwannaberealnerd</p>
        </div>
        <nav className={styles.navContainer}>
          {NAV_LINKS.map((link) => {
            return (
              <div key={link.href} className={styles.navLinkWrapper}>
                <Link
                  className={clsx(
                    styles.navLink,
                    isActiveNavLink(link) ? styles.activeNavLink : styles.inActiveNavLink
                  )}
                  href={link.href}
                >
                  {link.label}
                  {isActiveNavLink(link) && <div className={styles.activeNavBar} />}
                </Link>
              </div>
            );
          })}
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
