"use client";

import { ProjectCard } from "./component/ProjectCard";
import * as styles from "./page.css";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
