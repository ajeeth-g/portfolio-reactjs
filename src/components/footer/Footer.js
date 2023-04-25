import { socialMedia } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <section className="full__width__footer">
      <footer className="container container__footer ">
        <div className="social">
          {socialMedia.map(({ icon, className, link }, index) => {
            return (
              <button key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {icon}
                </a>
              </button>
            );
          })}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
