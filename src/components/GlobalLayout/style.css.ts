import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const wrapper = style({
  backgroundColor: GLOBAL_COLORS.DEEP_NAVY,
  border: `1px solid ${GLOBAL_COLORS.LINE}`,
  borderRadius: 10,
  margin: "2.5rem",
  overflow: "hidden",
});

export const headerWrapper = style({
  alignItems: "center",
  borderBottom: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
  fontSize: "1rem",
  height: "3rem",
  justifyContent: "flex-start",
});

export const nameContainer = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  height: "100%",
  minWidth: "13rem",
  padding: "1.125rem 1.375rem",
  width: "15rem",
});
globalStyle(`${nameContainer} p`, {
  color: GLOBAL_COLORS.LIGHT_GREY,
  fontSize: "1rem",
});

export const navContainer = style({
  display: "flex",
  height: "100%",
});
export const navLink = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
});
globalStyle(`${navLink} a`, {
  alignItems: "center",
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  fontSize: "1rem",
  height: "100%",
  justifyContent: "center",
  padding: "0 1rem",
  position: "relative",
  width: "100%",
});
export const activeNavLink = style({
  backgroundColor: GLOBAL_COLORS.ORANGE,
  bottom: 0,
  height: ".25rem",
  left: 0,
  position: "absolute",
  width: "100%",
});

export const footerWrapper = style({
  backgroundColor: GLOBAL_COLORS.DEEP_NAVY,
  borderTop: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
  height: "3.125rem",
  justifyContent: "space-between",
});

export const footerTextWrapper = style({
  alignItems: "center",
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "9.125rem",
});
globalStyle(`${footerTextWrapper} p`, {
  color: GLOBAL_COLORS.LIGHT_GREY,
  fontSize: "1rem",
});

export const footerIconWrapper = style({
  alignItems: "center",
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "3.5rem",
});

export const leftContainer = style({
  display: "flex",
});

export const rightContainer = style({
  borderLeft: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
});

export const githubInfoContainer = style({
  alignItems: "center",
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  gap: ".375rem",
  height: "100%",
  justifyContent: "center",
  padding: "0 1.5rem",
});
