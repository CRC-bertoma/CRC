import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Section from "../section/Section";
import ExperienceCard from "../experienceCard/ExperienceCard";
import experienceData from "../../data/experience.json";
import extraData from "../../data/extra.json";

const Experience = (props) => {
    console.log(props)
    const data = !props.extra ? experienceData : extraData;
    const title = "Experience"
    return (
        <Section title={title} classname="Experience">
            <div className="experience-content">
                <ul className="experience-list">
                    {" "}
                    {data.experience.reverse().map((exp) => (
                        <li key={`experience-${exp.company}`}>
                            <Fade bottom duration={1000} distance="20px">
                                <ExperienceCard experience={exp} />{" "}
                            </Fade>{" "}
                        </li>
                    ))}{" "}
                </ul>{" "}
            </div>{" "}
        </Section>
    );
};

export default Experience;
