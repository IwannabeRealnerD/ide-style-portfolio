import { style } from "@vanilla-extract/css";

import { GLOBAL_COLORS } from "@/constants/colors";
import { GLOBAL_STYLE } from "@/constants/style";

export const wrapper = style({
  borderRight: `1px solid ${GLOBAL_COLORS.LINE}`,
  paddingTop: "1.125rem",
  width: GLOBAL_STYLE.SIDE_BAR_WIDTH,
});
