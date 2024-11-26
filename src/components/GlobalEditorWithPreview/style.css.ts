import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  display: "flex",
  height: "100%",
  width: "100%",
});

export const editorWrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  height: "calc(100% - 2.5rem)",
  paddingTop: "1rem",
  width: "50%",
});

export const previewWrapper = style({
  backgroundColor: "#101010",
  color: GLOBAL_COLORS.WHITE,
  flexShrink: 0,
  height: "calc(100% - 2.5rem)",
  overflow: "auto",
  padding: "1rem",
  width: "50%",
});

globalStyle(`${previewWrapper} h1`, {
  fontSize: "1.5rem",
  marginTop: "1.5rem",
});

globalStyle(`${previewWrapper} h2`, {
  fontSize: "1.25rem",
  marginTop: "1.25rem",
});

globalStyle(`${previewWrapper} h3`, {
  fontSize: "1.1rem",
  marginTop: "1.1rem",
});

globalStyle(`${previewWrapper} p`, {
  fontSize: "1rem",
  marginTop: "0.5rem",
});
