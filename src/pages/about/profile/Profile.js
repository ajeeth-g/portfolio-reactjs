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
              Early in my career, I started as a component engineer at VVDN
              Technologies, where I have gained 3 years of experience in
              component design and development. On the side, I have been
              learning and practicing front-end development skills, such as
              HTML, CSS, JavaScript, ReactJS, GitHub, Material UI, and Figma. I
              am passionate about front-end development and would like to switch
              my career to a front-end developer role. My experience as a
              component engineer has given me a unique perspective when it comes
              to designing and developing front-end solutions that are both
              technically feasible and aesthetically pleasing.
            </p>
            <p>
              While my experience has primarily been in component engineering at
              VVDN Technologies, I am passionate about front-end development and
              eager to transition into a role where I can utilize my skills in
              HTML, CSS, JavaScript, ReactJS, GitHub, Material UI, and Figma. I
              have worked with various clients in different industries and
              gained valuable experience in designing and developing software
              solutions.
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
