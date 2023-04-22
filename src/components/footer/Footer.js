import "./footer.css";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { socialMedia } from "./data";
import { Link } from "react-router-dom";

const Footer = ({ mode, setMode }) => {
  const handleDarkMode = () => {
    setMode((prevTheme) => {
      setMode(!mode);
    });
  };
  return (
    <footer className="full__width__panel-footer">
      <div className="container footer__container">
        <div className="footer__left">
          <div className="footer__left-all">
            <Link to="about" className="logo">
              Ajeeth
            </Link>
            <p>LAST UPDATED APR 2023</p>
          </div>
        </div>
        <div className="footer__center">
          <div className="footer__center-all">
            <p>Let’s make something together</p>
            <p>
              I am a digital product designer specialising in web applications.
              Feel free to send me a message for possible collaborations, new
              connections, or projects. I should get back to you within 24
              hours.
            </p>
            <a href="mailto:ajeetheswari14@gmail.com">Send me a message</a>
          </div>
        </div>
        <div className="footer__right">
          <div className="social__media">
            <button>Copy my email address</button>
            {socialMedia.map(({ name, link }, index) => {
              return <a href={link}>{name}</a>;
            })}
          </div>
          <div className="footer__right-end">
            <div className="footer__navlinks">
              <a href="">About</a>
              <a href="">Work</a>
              <a href="">Contact</a>
            </div>
            <button onClick={handleDarkMode} className="toggle-mode">
              {mode ? <MdDarkMode /> : <MdOutlineDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
