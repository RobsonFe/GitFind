import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ButtonGroup: React.FC = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <a
        className="btn btn-primary"
        href="https://www.linkedin.com/in/robson-ferreira-508247134/"
        target="_blank"
        style={{ backgroundColor: "#2867B2", borderColor: "#2867B2" }}
      >
        <FaLinkedin style={{ color: "#f8f9fa" }} /> Linkedin
      </a>
      <a
        className="btn btn-primary"
        href="https://github.com/RobsonFe"
        target="_blank"
        style={{ backgroundColor: "#24292e", borderColor: "#24292e" }}
      >
        <FaGithub style={{ color: "#f8f9fa" }} /> GitHub
      </a>
      <a
        className="btn btn-primary"
        href="https://www.instagram.com/rob_ferreira88"
        target="_blank"
        style={{ backgroundColor: "#8a3ab9", borderColor: "#8a3ab9" }}
      >
        <FaInstagram style={{ color: "#f8f9fa" }} /> Instagram
      </a>
    </div>
  );
};

export default ButtonGroup;
