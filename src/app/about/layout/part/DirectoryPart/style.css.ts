import { style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const buttonWrapper = style({
  alignItems: "center",
  display: "flex",
  gap: ".5rem",
  justifyContent: "flex-start",
  padding: "0 0 1.125rem .875rem ",
  width: "100%",
});

export const directoryName = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
  fontSize: "1rem",
});
export const inActiveDirectoryName = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
});
export const activeDirectoryName = style({
  color: GLOBAL_COLORS.WHITE,
});

export const chevronIcon = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
  flexShrink: 0,
  height: "1rem",
  width: "1rem",
});

export const folderIcon = style({ color: GLOBAL_COLORS.TURQUOISE, flexShrink: 0, height: "1rem", width: "1rem" });
