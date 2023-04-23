import "./Card.css";
import { projects } from "../../pages/work/projects/data";

const Card = () => {
  return (
    <article id="work" className="cards">
      {projects.map(
        ({ id, overtitle, title, description, photo, github }, index) => {
          return (
            <div key={index} className="card">
              <p>
                {id} - {overtitle}
              </p>
              <h2>{title}</h2>
              <h3>{description}</h3>
              <figure>
                <img src={photo} alt="work" />
              </figure>
              <div className="work__links">
                <a
                  href={github}
                  target="_blank"
                  className="btn-medium"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-medium btn-bg"
                >
                  View Demo
                </a>
              </div>
            </div>
          );
        }
      )}
    </article>
  );
};

export default Card;
