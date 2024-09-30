import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",
  padding: "1.125rem .875rem",
});

export const contactLink = style({
  alignItems: "center",
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  fontSize: "0.85rem",
  gap: ".5rem",
  wordBreak: "break-word",
});

globalStyle(`${contactLink} svg`, {
  flexShrink: 0,
  height: "1.2rem",
  width: "1.2rem",
});

globalStyle(`${contactLink} p`, {
  fontSize: ".7rem",
});
