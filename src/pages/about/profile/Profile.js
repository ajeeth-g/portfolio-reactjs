import ProfileImg1 from "../../../assets/Profile-1.jpg";
import ProfileImg2 from "../../../assets/Profile-2.jpg";
import { RxChevronDown } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";
import "../About.css";
import { useState } from "react";

const Profile = () => {
  // CopyToClipBoard
  const email = "ajeetheswari14@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert(`Email copied to clipboard: ${email} `);
      })
      .catch((err) => {
        alert(`Failed to copy email to clipboard: ${err}`);
      });
  };

  // Open drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <section className="container about__container profile__header">
      <div className="about-left">INFO</div>
      <div className="about__right">
        <div className="profile__right-all">
          <div className="profile-left">
            <div className="profile__contact">
              <a
                href="mailto:ajeetheswari14@gmail.com"
                className="mail profileMail--left"
              >
                Send me a message
              </a>
              <div className="copyEmailId">
                <button>
                  <RxChevronDown
                    onClick={() => setOpenDrawer(!openDrawer)}
                    className="btn-downArrow"
                  />
                </button>
                <div
                  onClick={handleCopyEmail}
                  className={`${openDrawer ? "openDrawer" : "closeDrawer"}`}
                >
                  <button>
                    <FiCopy />
                  </button>
                  Copy my email address
                </div>
              </div>
            </div>
            <figure>
              <img
                src={ProfileImg1}
                alt="Profile"
                className="profile__img profileImg--left"
              />
            </figure>
          </div>
          <div className="profile-right ">
            <div className="profile--right-content">
              <figure>
                <span></span>
                <img src={ProfileImg2} alt="Profile" className="profile__img" />
              </figure>
              <p>
                Early in my career, I started as a software engineer developing
                financial systems. On the side, I did designs, and developments
                on various landing pages, and CMS sites. Some of my work exposed
                me to learn new languages and frameworks such as Ruby on Rails,
                Elixir, and ReactJS. I see this as my advantage in designing
                feasible solutions and communicating ideas to engineers. I have
                since focused on design. I have held positions in various
                industries such as banking, advertising, and startups.
              </p>
              <p>
                Here are some of the companies and brands I have worked with:
                Lonely Planet, Simmons & Simmons, OP Games, Toyota Philippines,
                Mashup Garage, Eastwest Banking Corporation, PAREF Southridge
                School, IdeasXMachina, and Lorenzana Food Corp.
              </p>
              <div className="profile--right-mail">
                <p>
                  Feel free to{" "}
                  <a href="mailto:ajeetheswari14@gmail.com" className="mail">
                    send me a message
                  </a>
                </p>
                <button>
                  <FiCopy onClick={handleCopyEmail} className="copyIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
