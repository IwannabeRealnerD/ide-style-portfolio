import { ReactNode } from "react";

import { SidebarPart } from "./layout/part/SidebarPart";
import * as styles from "./layout/style.css";

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout = (props: ProjectsLayoutProps) => {
  return (
    <div className={styles.container}>
      <SidebarPart />
      {props.children}
    </div>
  );
};

export default ProjectsLayout;
