import React from "react";
import "./Section.css";
import { Fade } from "react-reveal";

const Section = (props) => {
  const cn = props.classname ?? props.title;
  console.log("🚀 ~ file: Section.js ~ line 7 ~ Section ~ cn", cn)
  return (
    <section className={cn.toLowerCase()}>
      <Fade left duration={1000} distance="70px">
        <h1 className="section-title">{props.title}</h1>
      </Fade>
      <Fade right duration={1000}>
        <div className="underline"></div>
      </Fade>
      {props.children}
    </section>
  );
};

export default Section;
