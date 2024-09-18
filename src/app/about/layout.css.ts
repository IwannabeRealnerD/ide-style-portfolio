import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";
import { GLOBAL_STYLE } from "@/constants/style";

export const wrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  width: GLOBAL_STYLE.SIDE_BAR_WIDTH,
});

export const container = style({
  display: "flex",
});

export const sideIconWrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  width: "4.25rem",
});

globalStyle(`${sideIconWrapper} button`, {
  color: GLOBAL_COLORS.LIGHT_GREY,
  height: "1.5rem",
  width: "1.5rem",
});

export const dropdownContainer = style({ flexGrow: 1 });

export const dropdownButton = style({
  alignItems: "center",
  borderBottom: `1px solid ${GLOBAL_COLORS.LINE}`,
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  gap: ".625rem",
  justifyContent: "flex-start",
  padding: ".625rem .875rem",
  width: "100%",
});

globalStyle(`${dropdownButton} svg`, {
  color: GLOBAL_COLORS.LIGHT_GREY,
  height: "0.5rem",
  width: "0.5rem",
});

export const closedMenuIcon = style({
  transform: "rotate(180deg)",
});
