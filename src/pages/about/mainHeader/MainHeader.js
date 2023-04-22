import { RxSpeakerQuiet } from "react-icons/rx";

const MainHeader = () => {
  return (
    <section className="container about__container mainHeader">
      <div className="about-left"></div>
      <div className="about__right">
        <div className="about-all">
          <div className="about-1">
            <h1>
              My name is Ajeeth
              <button className="speaker" aria-describedby="tippy-1">
                <RxSpeakerQuiet className="downarrow" />
              </button>
              <br />
              I've been a product, and web designer for a combination of 9
              years.
            </h1>
            <h1>
              I am currently working at{" "}
              <a
                href="https://github.com/ajeeth-g"
                target="_blank"
                rel="noopener noreferrer"
                className="socialMedia"
              >
                GitHub&nbsp;
              </a>
              as a product designer, helping build the tools for people who like
              building software.
            </h1>
          </div>
          <div className="about-2">
            <p>
              I was previously the Head of Design at LawAdvisor. Before the
              pandemic hit, I was fortunate to be sent to London, Melbourne, and
              Brisbane for client collaborations. During my tenure, I have
              worked on legal project management, digital contracts, resourcing
              solution, tender management, and its core SaaS product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
