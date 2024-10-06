import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";
import { GLOBAL_STYLE } from "@/constants/style";

export const wrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  height: "100%",
  width: GLOBAL_STYLE.SIDE_BAR_WIDTH,
});

export const button = style({
  borderBottom: `1px solid ${GLOBAL_COLORS.LINE}`,
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  gap: ".5rem",
  justifyContent: "flex-start",
  padding: ".625rem 0 .625rem 1.375rem",
  width: "100%",
});

export const checkboxContainer = style({
  display: "flex",
  flexDirection: "column",
});
globalStyle(`${checkboxContainer} > label`, {
  padding: "1.125rem 0 0 1.375rem",
});

export const label = style({
  alignItems: "center",
  display: "flex",
  gap: ".5rem",
});
