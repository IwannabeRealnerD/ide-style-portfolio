import { StyleRule } from "@vanilla-extract/css";

const kycMobileStyle = (rule: StyleRule) => {
  return {
    "screen and (max-width: 480px)": {
      ...rule,
    },
  };
};

const kycTabletStyle = (rule: StyleRule) => {
  return {
    "screen and (min-width: 481px) and (max-width: 1199px)": {
      ...rule,
    },
  };
};

const kycPcStyle = (rule: StyleRule) => {
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
      ...(mobile && kycMobileStyle(mobile)),
      ...(tablet && kycTabletStyle(tablet)),
      ...(pc && kycPcStyle(pc)),
    },
  };
};
