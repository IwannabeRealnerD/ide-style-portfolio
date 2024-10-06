import { GLOBAL_INTERNAL_URL } from "@/constants/urls";

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
    href: GLOBAL_INTERNAL_URL.PROJECTS.INDEX,
    label: "projects",
    rootLink: GLOBAL_INTERNAL_URL.PROJECTS.INDEX,
  },
];
