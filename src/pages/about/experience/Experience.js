import { experience } from "./data";

const Experience = () => {
  return (
    <section className="full__width__panel">
      <div className="container  container__body ">
        <div className="container__left">EXPERIENCE</div>
        <div className="about__right-content">
          <div className="experience__left">
            <h1>Experience</h1>
          </div>
          <div className="experience__right">
            {experience.map(({ id, role, mode, details }, index) => {
              return (
                <div key={id} className="job__list">
                  <div className="experience__right-left">
                    <p className="role">{role}</p>
                    <div className="details">
                      {details.map((detail, index) => {
                        return <span key={index}>{detail}</span>;
                      })}
                    </div>
                  </div>

                  <div key={index} className="experience__content-right">
                    {mode}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
