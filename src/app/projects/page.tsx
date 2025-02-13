"use client";

import { ProjectCard } from "./components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="flex flex-wrap content-start gap-10 p-10">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
