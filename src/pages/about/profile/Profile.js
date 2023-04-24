import ProfileImg1 from "../../../assets/Profile-1.jpg";
import ProfileImg2 from "../../../assets/Profile-2.jpg";
import { handleCopyEmail } from "../../../data";
import { FiCopy } from "react-icons/fi";
import "../About.css";
import { useState } from "react";
import ButtonText from "../../../UI/button/ButtonText";

const Profile = () => {
  // Open drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <section className="container container__body">
      <div className="container__left">INFO</div>
      <div className="profile__right">
        <div className="profile__right-left">
          <ButtonText setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
          <figure>
            <img
              src={ProfileImg1}
              alt="Profile"
              className="img__profile profileImg__left"
            />
          </figure>
        </div>
        <div className="profile__right-right ">
          <figure>
            <img src={ProfileImg2} alt="Profile" className="img__profile" />
          </figure>
          <div className="content">
            <p>
              Early in my career, I started as a software engineer developing
              financial systems. On the side, I did designs, and developments on
              various landing pages, and CMS sites. Some of my work exposed me
              to learn new languages and frameworks such as Ruby on Rails,
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
            <div className="profile__right-rightMail">
              <span>
                Feel free to{" "}
                <a href="mailto:ajeetheswari14@gmail.com" className="mail">
                  send me a message
                </a>
              </span>
              <button>
                <FiCopy onClick={handleCopyEmail} className="copyIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
