import { StyleRule } from "@vanilla-extract/css";

const mobileStyle = (rule: StyleRule) => {
  return {
    "screen and (max-width: 480px)": {
      ...rule,
    },
  };
};

const tabletStyle = (rule: StyleRule) => {
  return {
    "screen and (min-width: 481px) and (max-width: 1199px)": {
      ...rule,
    },
  };
};

const pcStyle = (rule: StyleRule) => {
  return {
    "screen and (min-width: 1200px)": {
      ...rule,
    },
  };
};

interface KycResponsiveStyleParams {
  pc?: StyleRule;
  tablet?: StyleRule;
  mobile?: StyleRule;
}

export const globalResponsiveStyle = ({ pc, tablet, mobile }: KycResponsiveStyleParams) => {
  return {
    "@media": {
      ...(mobile && mobileStyle(mobile)),
      ...(tablet && tabletStyle(tablet)),
      ...(pc && pcStyle(pc)),
    },
  };
};
