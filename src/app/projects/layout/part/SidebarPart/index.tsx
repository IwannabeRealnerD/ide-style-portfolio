"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { VscChevronDown, VscChevronRight, VscListFlat } from "react-icons/vsc";

import { GlobalCheckBox } from "@/components/GlobalCheckBox";
import { useGlobalRouterPush } from "@/hooks/useRouterPush";

import { TECH_STACK_LIST } from "./constant";
import * as styles from "./style.css";

export const SidebarPart = () => {
  const [isSelectBoxOpened, setIsSelectBoxOpened] = useState(true);

  const searchParams = useSearchParams();

  const { routerPush } = useGlobalRouterPush();

  const currentSelectedTechStacks = searchParams.getAll("techStack") || [];

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={() => setIsSelectBoxOpened((prev) => !prev)}>
        {isSelectBoxOpened ? <VscChevronRight /> : <VscChevronDown />} tech stack
      </button>
      {isSelectBoxOpened && (
        <div className={styles.checkboxContainer}>
          <GlobalCheckBox
            isChecked={currentSelectedTechStacks.length === 4}
            label={
              <div className={styles.label}>
                <VscListFlat />
                All
              </div>
            }
            onChange={() => {
              if (currentSelectedTechStacks.length === 4) {
                routerPush({ techStack: [] });
                return;
              }
              routerPush({ techStack: TECH_STACK_LIST.map((stack) => stack.name) });
            }}
          />
          {TECH_STACK_LIST.map((techStack) => {
            const isChecked = currentSelectedTechStacks.includes(techStack.name);
            const handleChange = () => {
              const updatedTechStacks = isChecked
                ? currentSelectedTechStacks.filter((stack) => stack !== techStack.name)
                : [...currentSelectedTechStacks, techStack.name];

              routerPush({ techStack: updatedTechStacks });
            };

            return (
              <GlobalCheckBox
                key={techStack.name}
                isChecked={isChecked}
                label={
                  <div className={styles.label}>
                    <techStack.icon />
                    {techStack.name}
                  </div>
                }
                onChange={handleChange}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
