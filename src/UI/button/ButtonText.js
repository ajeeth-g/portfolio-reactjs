import { handleCopyEmail } from "../../data";
import { RxChevronDown } from "react-icons/rx";
import { FiCopy } from "react-icons/fi";
import "./ButtonText.css";

const ButtonText = ({ setOpenDrawer, openDrawer }) => {
  return (
    <div className="profile__right-contact">
      <div className="profile__right-contactText">
        <a href="mailto:ajeetheswari14@gmail.com" className="mail ">
          Send me a message
        </a>
        <button>
          <RxChevronDown
            onClick={() => setOpenDrawer(!openDrawer)}
            className="btn-downArrow"
          />
        </button>
      </div>
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
  );
};

export default ButtonText;
