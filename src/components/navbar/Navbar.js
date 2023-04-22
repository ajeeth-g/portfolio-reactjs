import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxChevronDown } from "react-icons/rx";
import { BsSend } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { handleCopyEmail } from "../../data";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "./navbar.css";

const Navbar = ({ mode, setMode }) => {
  const [panel, setPanel] = useState(false);
  const downArrowRef = useRef(null);
  // console.log(downArrowRef);


  // DARK MODE CODE START
  const handleDarkMode = () => {
    setMode((prevTheme) => {
      setMode(!mode);
    });
  };

  useEffect(() => {
    document.body.style.setProperty("--bg-main", mode ? "#212224" : "#f6f7f2");
    document.body.style.setProperty("--text-main", mode ? "#fff" : "#23282e");
    document.body.style.setProperty("--text-muted", mode ? "#fff" : "#4f5358");
    document.body.style.setProperty(
      "--bg-main-300",
      mode ? "#2e2e31" : "#ebebe8"
    );
    document.body.style.setProperty("--bg-panel", mode ? "#2e2e31" : "#e6e6dd");
    document.body.style.setProperty(
      "--para-secondary",
      mode ? "rgba(255, 255, 255, 0.6)" : "#4f5358"
    );
    document.body.style.setProperty(
      "--bg-main-300",
      mode ? "#2e2e31" : "#ebebe8"
    );

    const handleClickOutside = (event) => {
      if (
        panel &&
        !event.target.closest(".nav__downArrow-info") &&
        downArrowRef.current &&
        !downArrowRef.current.contains(event.target)
      ) {
        setPanel(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mode, panel]);

  // DARK MODE CODE END

  return (
    <nav className="container nav__container">
      <div className="nav__left">
        <Link to="/" className="logo">
          Ajeeth
        </Link>
      </div>
      <div className="nav__right">
        <div className="nav__right-menu">
          <ul className="nav__links">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">
                <div className="work__notification">
                  Work <span>4</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="nav__downArrow-info" ref={downArrowRef}>
            <button>
              <RxChevronDown
                onClick={() => setPanel(!panel)}
                className="btn-downArrow"
              />
            </button>
            <div
              className={`nav__downArrow-panel ${panel ? "" : "panelClose"}`}
            >
              <div className="nav__list">
                <ul className="nav__lists">
                  <li className="list__item">
                    <button>
                      <BsSend />
                    </button>
                    <a href="mailto:ajeetheswari14@gmail.com">
                      Send me a message
                    </a>
                  </li>
                  <li onClick={handleCopyEmail} className="list__item">
                    <button>
                      <FiCopy />{" "}
                    </button>{" "}
                    Copy my email address
                  </li>
                </ul>
              </div>
              <div className="contact-list">
                <Link to="https://github.com/ajeeth-g" target="_blank">
                  Github
                </Link>
                <Link
                  to="https://www.instagram.com/alone_like_men/"
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php?id=100018785507075"
                  target="_blank"
                >
                  facebook
                </Link>
                <Link
                  to="https://www.naukri.com/mnjuser/homepage"
                  target="_blank"
                >
                  Naukri
                </Link>
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
