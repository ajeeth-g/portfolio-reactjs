import MainHeader from "./mainHeader/MainHeader";
import Profile from "./profile/Profile";
import "./About.css";
import SkillSets from "./skillSet/SkillSets";
import Experience from "./experience/Experience";

const About = () => {
  return (
    <div>
      <MainHeader />
      <Profile />
      <SkillSets/>
      <Experience/>
    </div>
  );
};

export default About;
