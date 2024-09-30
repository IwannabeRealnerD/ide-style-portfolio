import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { RiFile2Fill, RiFolder3Fill, RiFolderOpenFill } from "react-icons/ri";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

import { MenuLink } from "../../component/MenuLink";

import * as styles from "./style.css";

interface DirectoryPartProps {
  isOpened: boolean;
  onClick: () => void;
  directoryName: string;
  menus: { color: string; links: { href: string; title: string }[] };
}

export const DirectoryPart: FunctionComponent<DirectoryPartProps> = (props) => {
  const pathname = usePathname();
  const isDirectoryActive = pathname.includes(props.directoryName);
  return (
    <>
      <button className={styles.buttonWrapper} type="button" onClick={props.onClick}>
        {props.isOpened ? (
          <>
            <VscChevronDown className={styles.chevronIcon} />
            <RiFolderOpenFill className={styles.folderIcon} />
          </>
        ) : (
          <>
            <VscChevronRight className={styles.chevronIcon} />
            <RiFolder3Fill className={styles.folderIcon} />
          </>
        )}
        <p
          className={clsx(
            styles.directoryName,
            isDirectoryActive ? styles.activeDirectoryName : styles.inActiveDirectoryName
          )}
        >
          {props.directoryName}
        </p>
      </button>
      {props.isOpened && (
        <>
          {props.menus.links.map((menu) => {
            const isMenuActive = pathname.includes(menu.href);
            return (
              <MenuLink
                key={menu.href}
                icon={<RiFile2Fill color={props.menus.color} />}
                isActive={isMenuActive}
                link={menu.href}
                title={menu.title}
              />
            );
          })}
        </>
      )}
    </>
  );
};
