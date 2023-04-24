import { RxSpeakerQuiet } from "react-icons/rx";

const AboutHeader = () => {
  return (
    <section className="container container__hero">
      <div className="container__left"></div>
      <div className="aboutHeader__right">
        <h1>
          My name is Ajeeth
          <button className="speakerIcon" aria-describedby="tippy-1">
            <RxSpeakerQuiet />
          </button>
          <br />
          I've been a product, and web designer for a combination of 9 years.
        </h1>
        <h1>
          I am currently working at{" "}
          <a
            href="https://github.com/ajeeth-g"
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia animation"
          >
            GitHub&nbsp;
          </a>
          as a product designer, helping build the tools for people who like
          building software.
        </h1>
        <p>
          I was previously the Head of Design at LawAdvisor. Before the pandemic
          hit, I was fortunate to be sent to London, Melbourne, and Brisbane for
          client collaborations. During my tenure, I have worked on legal
          project management, digital contracts, resourcing solution, tender
          management, and its core SaaS product.
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
