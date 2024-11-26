import { style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";

export const container = style({
  alignItems: "center",
  display: "flex",
  gap: "0.5rem",
});

export const hiddenCheckbox = style({
  display: "none",
});

export const customCheckbox = style({
  border: `1px solid ${GLOBAL_COLORS.LIGHT_GREY}`,
  borderRadius: "2px",
  cursor: "pointer",
  height: "1.125rem",
  position: "relative",
  width: "1.125rem",
});

export const checkIcon = style({
  "::after": {
    border: `solid ${GLOBAL_COLORS.WHITE}`,
    borderWidth: "0 1px 1px 0",
    content: '""',
    height: ".5625rem",
    left: ".375rem",
    position: "absolute",
    top: ".1875rem",
    transform: "rotate(45deg)",
    width: ".25rem",
  },
});

export const checkedCheckBoxWrapper = style({
  backgroundColor: GLOBAL_COLORS.LIGHT_GREY,
});

export const label = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
  fontSize: "1rem",
  fontWeight: "400",
});
