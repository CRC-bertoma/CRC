import React from "react";
import { skills, Skill } from "./config";
import { v4 as uuidv4 } from "uuid";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skill-icons-gird">
        {skills.map((skill) => {
          return (
            <a key={uuidv4()} href={skill.url} target="_blank">
              <div className="skill">
                <img src={skill.img} alt="Skill logo image" />
              </div>
              <p>{skill.name}</p>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
