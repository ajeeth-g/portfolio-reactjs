import AboutPage from "./aboutPage/AboutPage";
import Process from "./process/Process";
import Projects from "./projects/Projects";
import "./Work.css";
import WorkHeader from "./workHeader/WorkHeader";

const Work = () => {
  return (
    <>
      <WorkHeader />
      <Projects />
      <Process />
      <AboutPage />
    </>
  );
};

export default Work;
