import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  alignItems: "center",
  display: "flex",
  gap: ".5rem",
  padding: "0 0 1rem 3.125rem",
});

globalStyle(`${container} svg`, { height: "1rem", width: "1rem" });
export const linkText = style({ fontSize: "1rem" });

export const inActiveLinkText = style({ color: GLOBAL_COLORS.LIGHT_GREY });

export const activeLinkText = style({ color: GLOBAL_COLORS.WHITE });
