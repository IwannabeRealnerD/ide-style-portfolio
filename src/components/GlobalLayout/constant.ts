import { GLOBAL_TECH_STACK_LIST } from "@/constants/techStack";
import { GLOBAL_INTERNAL_URL } from "@/constants/urls";

const projectsSearchParams = new URLSearchParams();

GLOBAL_TECH_STACK_LIST.forEach((techStack) => {
  projectsSearchParams.append("techStack", techStack.name);
});

export const NAV_LINKS = [
  {
    href: GLOBAL_INTERNAL_URL.INDEX,
    label: "home",
    rootLink: GLOBAL_INTERNAL_URL.INDEX,
  },
  {
    href: GLOBAL_INTERNAL_URL.ABOUT.PROFESSIONAL_INFO.WORK,
    label: "about-me",
    rootLink: GLOBAL_INTERNAL_URL.ABOUT.INDEX,
  },
  {
    href: `${GLOBAL_INTERNAL_URL.PROJECTS.INDEX}?${projectsSearchParams.toString()}`,
    label: "projects",
    rootLink: GLOBAL_INTERNAL_URL.PROJECTS.INDEX,
  },
];
