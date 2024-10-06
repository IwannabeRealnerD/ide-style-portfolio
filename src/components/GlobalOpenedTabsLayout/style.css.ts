import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";
import { GLOBAL_STYLE } from "@/constants/style";

export const container = style({ display: "flex", height: "100%" });

export const wrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  flexShrink: 0,
  paddingTop: "1.125rem",
  width: GLOBAL_STYLE.SIDE_BAR_WIDTH,
});

export const verticalContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const recentVisitTabWrapper = style({
  borderBottom: `1px solid ${GLOBAL_COLORS.LINE}`,
  display: "flex",
  height: "2.5rem",
});

export const tabWrapper = style({
  display: "flex",
});

export const tab = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  padding: "0 .75rem 0 .875rem",
});

export const activeTab = style({
  color: GLOBAL_COLORS.WHITE,
});
export const deActiveTab = style({
  color: GLOBAL_COLORS.LIGHT_GREY,
});

export const closeButton = style({
  alignItems: "center",
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  color: GLOBAL_COLORS.LIGHT_GREY,
  display: "flex",
  height: "100%",
  padding: "0 .75rem",
  width: "100%",
});

globalStyle(`${closeButton} > svg`, {
  height: "1.125rem",
  width: "1.125rem",
});

export const pageContentWrapper = style({
  display: "flex",
  flex: 1,
});
