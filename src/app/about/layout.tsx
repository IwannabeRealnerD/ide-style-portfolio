"use client";

import { useState } from "react";

import { RiFolder3Fill, RiTriangleFill } from "@remixicon/react";
import clsx from "clsx";

import { GLOBAL_COLORS } from "@/constants/colors";

import { MenuLink } from "./component";
import * as styles from "./layout.css";

interface OpenedMenu {
  personalInfo: boolean;
  contacts: boolean;
}

const AboutLayout = () => {
  const [openedMenu, setOpenedMenu] = useState<OpenedMenu>({
    contacts: false,
    personalInfo: false,
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sideIconWrapper}>
          <button type="button">T</button>
          <button type="button">O</button>
          <button type="button">G</button>
        </div>
        <div className={styles.dropdownContainer}>
          <div>
            <button
              className={styles.dropdownButton}
              type="button"
              onClick={() =>
                setOpenedMenu((prev) => ({
                  ...prev,
                  personalInfo: !prev.personalInfo,
                }))
              }
            >
              <div className={clsx(!openedMenu.personalInfo && styles.closedMenuIcon)}>
                <RiTriangleFill />
              </div>
              personalInfo
            </button>
            {openedMenu.personalInfo && (
              <MenuLink
                icon={<RiFolder3Fill color={GLOBAL_COLORS.PEACH} />}
                link="/personalInfo"
                title="personalInfo"
              />
            )}
          </div>
          <div>
            <button
              className={styles.dropdownButton}
              type="button"
              onClick={() =>
                setOpenedMenu((prev) => ({
                  ...prev,
                  contacts: !prev.contacts,
                }))
              }
            >
              <div className={clsx(!openedMenu.personalInfo && styles.closedMenuIcon)}>
                <RiTriangleFill />
              </div>
              contacts
            </button>
            {openedMenu.contacts && (
              <div>
                <MenuLink icon={<RiFolder3Fill color={GLOBAL_COLORS.PEACH} />} link="/contacts" title="contacts" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
