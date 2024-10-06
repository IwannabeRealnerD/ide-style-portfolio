import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";
import { globalResponsiveStyle } from "@/utils/responsiveStyles";

export const wrapper = style({
  backgroundColor: GLOBAL_COLORS.DEEP_NAVY,
  border: `1px solid ${GLOBAL_COLORS.LINE}`,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  height: "calc(100svh - 5rem)",
  margin: "2.5rem",
  overflow: "hidden",
  ...globalResponsiveStyle({
    mobile: {
      margin: 0,
    },
    pc: { margin: "2.5rem" },
    tablet: { margin: "1.25rem" },
  }),
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
  flexShrink: 0,
  height: "100%",
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

export const navLinkWrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
});
export const navLink = style({
  alignItems: "center",
  display: "flex",
  fontSize: "1rem",
  height: "100%",
  justifyContent: "center",
  padding: "0 1rem",
  position: "relative",
  width: "100%",
});

export const inActiveNavLink = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
});

export const activeNavLink = style({
  color: GLOBAL_COLORS.WHITE,
});

export const activeNavBar = style({
  backgroundColor: GLOBAL_COLORS.ORANGE,
  bottom: 0,
  height: ".25rem",
  left: 0,
  position: "absolute",
  width: "100%",
});

export const contentWrapper = style({
  flexGrow: 1,
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
globalStyle(`${footerIconWrapper} svg`, {
  height: "1.2rem",
  width: "1.2rem",
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

globalStyle(`${githubInfoContainer} svg`, {
  height: "1.2rem",
  width: "1.2rem",
});
