import { Link } from "react-router-dom";
import React from "react";

const AboutPage = () => {
  return (
    <section className="container aboutPage__container">
      <div className="container__left">About</div>
      <h2 className="aboutPage">
        <Link to="/">Learn more about me</Link>
      </h2>
    </section>
  );
};

export default AboutPage;
