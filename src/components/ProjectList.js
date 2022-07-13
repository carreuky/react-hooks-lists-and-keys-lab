import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const cards=projects.map(card=>
    <ProjectItem key={card.id} name={card.name} about={card.about} technologies={card.technologies}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render Projectcard components here */}
      {cards}
      </div>
    </div>
  );
}

export default ProjectList;
