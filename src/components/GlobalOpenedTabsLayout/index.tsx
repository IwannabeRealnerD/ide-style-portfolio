"use client";

import { ReactNode, FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import clsx from "clsx";
import { RiCloseFill } from "react-icons/ri";

import { GLOBAL_RECENT_TABS } from "@/constants/recentTabs";
import { GLOBAL_INTERNAL_URL } from "@/constants/urls";
import { globalGetLocalStorage, globalSetLocalStorage, globalRemoveLocalStorage } from "@/utils/globalLocalStorage";

import * as styles from "./style.css";

interface GlobalOpenedTabsLayoutProps {
  children: ReactNode;
  pageContent: ReactNode;
}

export const GlobalOpenedTabsLayout: FunctionComponent<GlobalOpenedTabsLayoutProps> = (props) => {
  const [recentTabs, setRecentTabs] = useState<(keyof typeof GLOBAL_RECENT_TABS)[] | null>([]);

  const router = useRouter();

  const pathname = usePathname();

  const onCloseTab = (tab: keyof typeof GLOBAL_RECENT_TABS) => {
    const newTabTitles = recentTabs?.filter((existingTab) => existingTab !== tab) ?? null;
    setRecentTabs(newTabTitles);
    if (newTabTitles === null || newTabTitles.length === 0) {
      globalRemoveLocalStorage("openedMenu");
      router.push(GLOBAL_INTERNAL_URL.ABOUT.INDEX);
      return;
    }
    if (newTabTitles) {
      globalSetLocalStorage("openedMenu", newTabTitles);
      router.push(GLOBAL_RECENT_TABS[newTabTitles[newTabTitles.length - 1]].href);
    }
  };

  useEffect(() => {
    const tabs = globalGetLocalStorage("openedMenu");
    setRecentTabs(tabs);
  }, []);

  useEffect(() => {
    if (pathname === GLOBAL_INTERNAL_URL.ABOUT.INDEX) {
      return;
    }
    const newTabTitle = Object.values(GLOBAL_RECENT_TABS).find((tab) => tab.href === pathname)?.title as
      | keyof typeof GLOBAL_RECENT_TABS
      | undefined;
    const existingTabs = globalGetLocalStorage("openedMenu");
    if (newTabTitle === undefined || (existingTabs && existingTabs.includes(newTabTitle))) {
      return;
    }
    if (existingTabs === null) {
      globalSetLocalStorage("openedMenu", [newTabTitle]);
      setRecentTabs([newTabTitle]);
      return;
    }
    const filteredTabs = existingTabs.filter((tab) => tab !== newTabTitle);
    globalSetLocalStorage("openedMenu", [...filteredTabs, newTabTitle]);
    setRecentTabs([...filteredTabs, newTabTitle]);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{props.children}</div>
      <div className={styles.verticalContainer}>
        <div className={styles.recentVisitTabWrapper}>
          {recentTabs?.map((tab) => {
            const isCurrentTab = pathname === GLOBAL_RECENT_TABS[tab].href;
            return (
              <div key={tab} className={styles.tabWrapper}>
                <Link
                  className={clsx(styles.tab, isCurrentTab ? styles.activeTab : styles.deActiveTab)}
                  href={GLOBAL_RECENT_TABS[tab].href}
                >
                  {GLOBAL_RECENT_TABS[tab].title}
                </Link>
                <button className={styles.closeButton} type="button" onClick={() => onCloseTab(tab)}>
                  <RiCloseFill />
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.pageContentWrapper}>{props.pageContent}</div>
      </div>
    </div>
  );
};
