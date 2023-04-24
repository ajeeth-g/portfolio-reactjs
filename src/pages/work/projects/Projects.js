import React from "react";
import Card from "../../../UI/card/Card";

const Projects = () => {
  return (
    <section className="container container__body projects__container">
      <div className="container__left">Work</div>
      <div className="work__project-right">
        <div className="btn-work">
          <a href="#work">View my work </a>
        </div>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
