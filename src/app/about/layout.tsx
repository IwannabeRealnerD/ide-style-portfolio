"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { PERSONAL_INFO_MENU, PROFESSIONAL_INFO_MENU } from "./layout/constant";
import { ContactPart } from "./layout/part/ContactPart";
import { DirectoryPart } from "./layout/part/DirectoryPart";
import * as styles from "./layout/part/DirectoryPart/layout.css";

interface OpenedMenu {
  personalInfo: boolean | null;
  professionalInfo: boolean | null;
}

const AboutLayout = () => {
  const [openedMenu, setOpenedMenu] = useState<OpenedMenu>({
    personalInfo: null,
    professionalInfo: null,
  });

  const pathname = usePathname();

  if (pathname.includes("professional-info") && openedMenu.professionalInfo === null) {
    setOpenedMenu((prev) => ({
      ...prev,
      professionalInfo: true,
    }));
  }
  if (pathname.includes("personal-info") && openedMenu.personalInfo === null) {
    setOpenedMenu((prev) => ({
      ...prev,
      personalInfo: true,
    }));
  }

  return (
    <div className={styles.wrapper}>
      <DirectoryPart
        directoryName="professional-info"
        isOpened={openedMenu.professionalInfo ?? false}
        menus={PROFESSIONAL_INFO_MENU}
        onClick={() =>
          setOpenedMenu((prev) => ({
            ...prev,
            professionalInfo: !prev.professionalInfo,
          }))
        }
      />
      <DirectoryPart
        directoryName="personal-info"
        isOpened={openedMenu.personalInfo ?? false}
        menus={PERSONAL_INFO_MENU}
        onClick={() =>
          setOpenedMenu((prev) => ({
            ...prev,
            personalInfo: !prev.personalInfo,
          }))
        }
      />
      <ContactPart />
    </div>
  );
};

export default AboutLayout;
