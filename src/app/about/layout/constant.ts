import { GLOBAL_COLORS } from "@/constants/colors";
import { GLOBAL_INTERNAL_URL } from "@/constants/urls";

export const PROFESSIONAL_INFO_MENU = {
  color: GLOBAL_COLORS.PEACH,
  links: [{ href: GLOBAL_INTERNAL_URL.ABOUT.PROFESSIONAL_INFO.WORK, title: "work.tsx" }],
};

export const PERSONAL_INFO_MENU = {
  color: GLOBAL_COLORS.PEACH,
  links: [
    { href: GLOBAL_INTERNAL_URL.ABOUT.PERSONAL_INFO.BIO, title: "bio.tsx" },
    { href: GLOBAL_INTERNAL_URL.ABOUT.PERSONAL_INFO.EDUCATION, title: "education.tsx" },
  ],
};
