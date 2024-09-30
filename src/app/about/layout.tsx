"use client";

import { FunctionComponent, ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import { GlobalOpenedTabsLayout } from "@/components/GlobalOpenedTabsLayout";

import { PERSONAL_INFO_MENU, PROFESSIONAL_INFO_MENU } from "./layout/constant";
import { ContactPart } from "./layout/part/ContactPart";
import { DirectoryPart } from "./layout/part/DirectoryPart";

interface OpenedMenu {
  personalInfo: boolean | null;
  professionalInfo: boolean | null;
}

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout: FunctionComponent<AboutLayoutProps> = (props) => {
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
    <GlobalOpenedTabsLayout pageContent={props.children}>
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
    </GlobalOpenedTabsLayout>
  );
};

export default AboutLayout;
