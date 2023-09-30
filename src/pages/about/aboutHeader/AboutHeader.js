import { RxSpeakerQuiet } from "react-icons/rx";

const AboutHeader = () => {
  return (
    <section className="container container__hero">
      <div className="container__left"></div>
      <div className="aboutHeader__right">
        <h1>
          My name is Ajeethhg
          <button className="speakerIcon" aria-describedby="tippy-1">
            <RxSpeakerQuiet />
          </button>
          <br />I am a self-taught Front-end developer with 3 years of
          experience as a Component Engineer.
        </h1>
        <h1>
          Currently, I am working at{" "}
          <a
            href="https://www.vvdntech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia animation"
          >
            VVDN&nbsp;
          </a>
          as a Component Engineer where I specialize in HTML, CSS, and
          JavaScript.
        </h1>
        <p>
          I am passionate about front-end development and constantly learning
          new technologies to enhance my skills. I am actively seeking
          opportunities to join a team as a front-end developer, where I can
          utilize my skills and make a valuable contribution.
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
