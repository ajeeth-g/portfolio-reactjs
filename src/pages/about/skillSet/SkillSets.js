import React from "react";
import { skills } from "./data";

const SkillSets = () => {
  return (
    <section className="container  skillsets__container">
      <div className="container__left"></div>
      <div className="about__right-content">
        <div className="skillset__left">
          <h1>Skillset</h1>
        </div>
        <div className="skillset__right">
          {skills.map(({ heading, skillsets, className }, index) => {
            return (
              <div key={index} className="skill__content">
                <h1 className={className[0]}>{heading}</h1>
                {skillsets.map((skillsets, index) => {
                  return (
                    <p
                      key={index}
                      className={className[1]}
                      style={{
                        marginBottom: "0.9375rem",
                        lineHeight: "26px",
                      }}
                    >
                      {skillsets}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSets;
