import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  display: "flex",
  gap: "7.5rem",
  justifyContent: "center",
  marginBottom: "11.25rem",
  padding: "0 10rem",
  position: "relative",
});

export const contentContainer = style({ margin: "16.25rem 0 5rem 0" });

export const greetingContainer = style({
  marginBottom: "5rem",
});

export const greetingMessage1 = style({
  color: "#E5E9F0",
  fontSize: "1.125rem",
});

export const greetingMessage2 = style({
  color: "#E5E9F0",
  fontSize: "3.875rem",
  lineHeight: "1.3",
});

export const greetingMessage3 = style({
  color: GLOBAL_COLORS.LAVENDER,
  fontSize: "1.125rem",
});

export const subMessageContainer = style({});

export const subMessage1 = style({ color: GLOBAL_COLORS.LIGHT_GREY, fontSize: "1rem", marginBottom: ".625rem" });

export const subMessage2 = style({ color: GLOBAL_COLORS.LIGHT_GREY, fontSize: "1rem", marginBottom: ".625rem" });

export const code = style({});
globalStyle(`${code} span:first-of-type`, {
  color: GLOBAL_COLORS.LAVENDER,
});
globalStyle(`${code} span:nth-of-type(2)`, {
  color: GLOBAL_COLORS.TURQUOISE,
});
globalStyle(`${code} span:nth-of-type(3)`, {
  color: GLOBAL_COLORS.WHITE,
});
globalStyle(`${code} span:nth-of-type(4)`, {
  color: GLOBAL_COLORS.PEACH,
});

export const gameContainer = style({
  height: "29.6875rem",
  marginTop: "11.25rem",
  position: "relative",
  right: 0,
  top: 0,
  width: "31.875rem",
});

export const greenBlur = style({
  height: "35rem",
  left: 0,
  position: "absolute",
  top: "-6.25rem",
  width: "30rem",
});

export const blueBlur = style({
  height: "35rem",
  position: "absolute",
  right: "-10rem",
  top: "5rem",
  width: "35rem",
});
