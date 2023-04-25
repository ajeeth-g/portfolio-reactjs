import { Link, NavLink } from "react-router-dom";
import { projects } from "../../pages/work/projects/data";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { handleCopyEmail } from "../../data";
import "./NavbarMobile.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavbarMobile = ({ mode, setMode }) => {
  const work = projects.length;

  const [menuOpen, setMenuOpen] = useState(false);

  // DARK MODE CODE START
  const handleDarkMode = () => {
    setMode((prevTheme) => {
      setMode(!mode);
    });
  };

  return (
    <nav className=" nav__mobile ">
      <div className="navMobile__header">
        <div className="navMobile__log">
          <Link to="/" className="navMobile__logo">
            Ajeeth
          </Link>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="navMobile__Menubtn"
        >
          MENU
          <button className="navMobile__menu-btn">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${menuOpen ? "navMobile__menu" : "close"}`}
      >
        <div className="navMobile__links">
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">
                <div className="navMobileWork__notification">
                  Work <span>{work}</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="navMobile__list">
          <ul>
            <li className="navMobileList__item">
              <a href="mailto:ajeetheswari14@gmail.com">Send me a message</a>
            </li>
            <li onClick={handleCopyEmail} className="navMobileList__item">
              Copy my email address
            </li>
          </ul>
        </div>
        <div className="navMobileContact-list">
          <Link to="https://github.com/ajeeth-g" target="_blank">
            Github
          </Link>
          <Link to="https://www.instagram.com/alone_like_men/" target="_blank">
            Instagram
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100018785507075"
            target="_blank"
          >
            facebook
          </Link>
          <Link to="https://www.naukri.com/mnjuser/homepage" target="_blank">
            Naukri
          </Link>
        </div>
        <button onClick={handleDarkMode} className="navMobileToggle-mode">
          {mode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
