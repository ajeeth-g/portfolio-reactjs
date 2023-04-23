import "./Card.css";

const Card = () => {
  return (
    <article id="work" className="cards">
      <div className="card">
        <p>01 - Product</p>
        <h2>Netflix Clone</h2>
        <h3>Projects created by reactjs</h3>
        <figure>
          <img
            src="https://cdn.dribbble.com/userupload/6461520/file/original-30ee4e8379a4ca568959902de9e93b4b.png?compress=1&resize=400x300&vertical=top"
            alt="work"
          />
        </figure>
        <div className="work__links">
          <a
            href="https://github.com/ajeeth-g/netfilx-clone-react"
            target="_blank"
            className="btn-medium"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/ajeeth-g/netfilx-clone-react"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-medium btn-bg"
          >
            View Demo
          </a>
        </div>
      </div>
      <div className="card">
        <p>01 - Product</p>
        <h2>Re-imagining contracts</h2>
        <h3>Digital contracts management for travel-guide publishers</h3>
        <figure>
          <img
            src="https://cdn.dribbble.com/userupload/6461520/file/original-30ee4e8379a4ca568959902de9e93b4b.png?compress=1&resize=400x300&vertical=top"
            alt="work"
          />
        </figure>
        <div className="work__links">
          <a href="">Github</a>
          <a href="">View Demo</a>
        </div>
      </div>
    </article>
  );
};

export default Card;
