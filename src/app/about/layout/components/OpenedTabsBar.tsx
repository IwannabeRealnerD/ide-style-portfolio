"use client";

import { ReactNode, FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { RiCloseFill } from "react-icons/ri";

import { GLOBAL_RECENT_TABS } from "@/constants/recentTabs";
import { GLOBAL_INTERNAL_URL } from "@/constants/urls";
import { globalCn } from "@/utils/cn";
import { globalGetLocalStorage, globalSetLocalStorage, globalRemoveLocalStorage } from "@/utils/globalLocalStorage";

interface OpenedTabsBarProps {
  children: ReactNode;
  pageContent: ReactNode;
}

export const OpenedTabsBar: FunctionComponent<OpenedTabsBarProps> = (props) => {
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
    <div className="flex h-full">
      <div className="w-60 shrink-0 border-r border-slate-700 pt-4.5">{props.children}</div>
      <div className="flex w-full flex-col">
        <div className="flex h-10 shrink-0 border-b border-slate-700">
          {recentTabs?.map((tab) => {
            const isCurrentTab = pathname === GLOBAL_RECENT_TABS[tab].href;
            return (
              <div key={tab} className="flex">
                <Link
                  className={globalCn(
                    "flex items-center pr-3 pl-3.5",
                    isCurrentTab ? "text-gray-50" : "text-slate-500"
                  )}
                  href={GLOBAL_RECENT_TABS[tab].href}
                >
                  {GLOBAL_RECENT_TABS[tab].title}
                </Link>
                <button
                  className="flex cursor-pointer items-center border-r border-slate-700 px-3 text-slate-500 hover:text-slate-600"
                  type="button"
                  onClick={() => onCloseTab(tab)}
                >
                  <RiCloseFill className="size-4.5" />
                </button>
              </div>
            );
          })}
        </div>
        {props.pageContent}
      </div>
    </div>
  );
};
