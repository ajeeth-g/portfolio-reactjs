import React from "react";

const ContactHeader = () => {
  return (
    <section className="container container__hero">
      <div className="container__left"></div>
      <div className="containerHeader__right">
        <h1>
          Let's make something{" "}
          <span className="contactAnimation">together</span>
        </h1>
      </div>
    </section>
  );
};

export default ContactHeader;
