import { links } from "./data";
import { handleCopyEmail } from "../../../data";
import ButtonText from "../../../UI/button/ButtonText";
import { useState } from "react";

const ContactBody = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <section className="container container__body contact__container">
      <div className="container__left">CONTACT</div>
      <div className="containerBody__right">
        <div className="containerBody__right-items">
          <ButtonText
            setOpenDrawer={setOpenDrawer}
            openDrawer={openDrawer}
            handleCopyEmail={handleCopyEmail}
          />
          <div className="containerBody__right-links">
            <ul>
              {links.map(({ id, link, socialMedia }, index) => {
                return (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {socialMedia}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="containerBody__right-contact">
          <div className="containerBody__right-contactLeft">
            <h1>Frontend Developer</h1>
            <div className="containerBody__contact">
              <ul>
                <li>
                  <a
                    href="www.ajeeth.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ajeeth.me
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ajeetheswari14@gma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ajeetheswari14@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @alone_like_men
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="containerBody__right-contactRight">
            <h1>Ajeeth</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
