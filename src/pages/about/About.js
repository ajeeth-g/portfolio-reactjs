import AboutHeader from "./aboutHeader/AboutHeader";
import Profile from "./profile/Profile";
import "./About.css";
import SkillSets from "./skillSet/SkillSets";
import Experience from "./experience/Experience";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <Profile />
      <SkillSets />
      <Experience />
    </div>
  );
};

export default About;
