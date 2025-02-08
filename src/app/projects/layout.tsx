"use client";

import { ReactNode, useState } from "react";
import { useSearchParams } from "next/navigation";

import { VscChevronDown, VscChevronRight, VscListFlat } from "react-icons/vsc";

import { GlobalCheckBox } from "@/components/GlobalCheckBox";
import { GLOBAL_TECH_STACK_LIST } from "@/constants/techStack";
import { useGlobalRouterPush } from "@/hooks/useRouterPush";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout = (props: ProjectsLayoutProps) => {
  const [isSelectBoxOpened, setIsSelectBoxOpened] = useState(true);

  const searchParams = useSearchParams();

  const { routerPush } = useGlobalRouterPush();

  const currentSelectedTechStacks = searchParams.getAll("techStack") || [];
  return (
    <div className="flex h-full overflow-hidden">
      <div className="border-line w-60 shrink-0 overflow-auto border-r">
        <button
          className="border-line text-light-grey flex w-full content-start gap-2 border-b pt-2.5 pr-5.5 pb-2.5"
          type="button"
          onClick={() => setIsSelectBoxOpened((prev) => !prev)}
        >
          {isSelectBoxOpened ? <VscChevronRight /> : <VscChevronDown />} tech stack
        </button>
        {isSelectBoxOpened && (
          <div className="flex flex-col gap-4.5 px-4.5 py-5.5">
            <GlobalCheckBox
              isChecked={currentSelectedTechStacks.length === 4}
              label={
                <div className="flex items-center gap-2">
                  <VscListFlat />
                  All
                </div>
              }
              onChange={() => {
                if (currentSelectedTechStacks.length === 4) {
                  routerPush({ techStack: [] });
                  return;
                }
                routerPush({ techStack: GLOBAL_TECH_STACK_LIST.map((stack) => stack.name) });
              }}
            />
            {GLOBAL_TECH_STACK_LIST.map((techStack) => {
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
                    <div className="flex items-center gap-2">
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
      <div className="overflow-auto">{props.children}</div>
    </div>
  );
};

export default ProjectsLayout;
