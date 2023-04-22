import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxChevronDown } from "react-icons/rx";
import { BsSend } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "./navbar.css";

const Navbar = ({ mode, setMode }) => {
  const [panel, setPanel] = useState(false);

  // DARK MODE
  const handleDarkMode = () => {
    setMode((prevTheme) => {
      setMode(!mode);
    });
  };

  useEffect(() => {
    document.body.style.setProperty("--bg-main", mode ? "#212224" : "#f6f7f2");
    document.body.style.setProperty("--text-main", mode ? "#fff" : "#23282e");
  }, [mode]);

  return (
    <nav className={`container nav__container`}>
      <div className="nav__left">
        <Link to="/" className="logo">
          Ajeeth
        </Link>
      </div>
      <div className="nav__right">
        <div className="nav__menu">
          <ul className="nav__links">
            <li>
              <NavLink to="/">About</NavLink>
              <NavLink to="/work">
                <div className="work__notification">
                  Work <span>4</span>
                </div>
              </NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="nav__info">
            <RxChevronDown
              onClick={() => setPanel(!panel)}
              className="btn-downArrow"
            />
            <div className={`nav__panel ${panel ? "" : "panelOpen"}`}>
              <div className="nav__panel-1">
                <ul className="nav__info--details">
                  <li>
                    <a href="mailto:ajeetheswari14@gmail.com">
                      <BsSend className="icon" /> Send me a message
                    </a>
                  </li>
                  <li>
                    <FiCopy className="icon" /> Copy my email address
                  </li>
                </ul>
              </div>
              <div className="nav__panel-2">
                <Link to="https://github.com/ajeeth-g">Github</Link>
                <Link to="https://www.instagram.com/">Instagram</Link>
                <Link to="https://www.facebook.com/">facebook</Link>
                <Link to="https://www.naukri.com/mnjuser/homepage">Naukri</Link>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleDarkMode} className="toggle-mode">
          {mode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
