import { GLOBAL_INTERNAL_URL } from "@/constants/urls";

export const NAV_LINKS = [
  {
    href: GLOBAL_INTERNAL_URL.INDEX,
    label: "home",
    rootLink: GLOBAL_INTERNAL_URL.INDEX,
  },
  {
    href: GLOBAL_INTERNAL_URL.ABOUT.PROFESSIONAL_INFO.WORK,
    label: "about-me.tsx",
    rootLink: GLOBAL_INTERNAL_URL.ABOUT.INDEX,
  },
  {
    href: GLOBAL_INTERNAL_URL.PROJECTS.INDEX,
    label: "project.tsx",
    rootLink: GLOBAL_INTERNAL_URL.PROJECTS.INDEX,
  },
];
