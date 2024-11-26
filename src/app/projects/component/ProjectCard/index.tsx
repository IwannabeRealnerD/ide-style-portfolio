"use client";

import * as styles from "./style.css";

export const ProjectCard = () => {
  return (
    <article className={styles.container}>
      <div className={styles.projectTitleContainer}>
        <h2>Projects</h2>
        <p>{` // short project description`}</p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <p>lorem ipsum dolor sit</p>
        </div>
        <button className={styles.viewProjectLink} type="button">
          view-project
        </button>
      </div>
    </article>
  );
};
