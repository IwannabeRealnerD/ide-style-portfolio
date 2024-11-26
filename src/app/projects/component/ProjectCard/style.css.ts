import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
  height: "19.625rem",
  width: "23.125rem",
});

export const projectTitleContainer = style({
  display: "flex",
  gap: "1rem",
  marginBottom: ".875rem",
});

globalStyle(`${projectTitleContainer} h2`, {
  color: GLOBAL_COLORS.PURPLE,
  fontSize: "1rem",
  fontWeight: 700,
});

globalStyle(`${projectTitleContainer} p`, {
  color: GLOBAL_COLORS.LIGHT_GREY,
  fontSize: ".875rem",
});

export const wrapper = style({
  backgroundColor: GLOBAL_COLORS.DARK_BLUE,
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  padding: "1.5rem 1.875rem",
  width: "100%",
});

export const viewProjectLink = style({
  backgroundColor: "#1C2B3A",
  borderRadius: "8px",
  color: GLOBAL_COLORS.WHITE,
  padding: ".625rem .875rem",
  width: "fit-content",
});
