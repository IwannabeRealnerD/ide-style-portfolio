import { NAV_LINKS } from "../constant";

export const isActiveNavLink = (link: (typeof NAV_LINKS)[number], pathname: string) => {
  if (link.rootLink === "/") {
    return pathname === link.href;
  }
  return pathname.includes(link.rootLink);
};
