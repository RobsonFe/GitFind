import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./sidebarBComponent.css";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarBComponent: React.FC = () => {
  return (
    <nav
      className="navbar fixed-top navMenu"
      style={{ backgroundColor: "#0e1129", color: "#f8f9fa" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to="/" style={{ color: "#f8f9fa" }}>
            <FaHome />
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ backgroundColor: "#0e1129", color: "#f8f9fa" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <Link to="/" style={{ color: "#f8f9fa" }}>
                <FaHome /> Home
              </Link>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ backgroundColor: "#f8f9fa" }}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#f8f9fa" }}
                >
                  <FaFileAlt /> Documentos
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#0e1129" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://docs.google.com/document/d/1sJYW5UXxLzkvIRNNnHhB_5-hjAkC1VTUuxFlkv4MJc8/edit?usp=sharing"
                      target="_blank"
                      style={{ color: "#f8f9fa" }}
                    >
                      <FaFileAlt /> Instruções
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://docs.google.com/document/d/1rg0E-S7HjE9chbFbpI8EiZ7bWL2m900FQOHwCWXqAyA/edit?usp=sharing"
                      target="_blank"
                      style={{ color: "#f8f9fa" }}
                    >
                      <FaFileAlt /> Documentação
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "#f8f9fa" }}
                >
                  <FaGithub /> GitHub
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#0e1129" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/RobsonFe"
                      target="_blank"
                      style={{ color: "#f8f9fa" }}
                    >
                      <FaGithub /> Autor
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/RobsonFe/GitFind"
                      target="_blank"
                      style={{ color: "#f8f9fa" }}
                    >
                      <FaGithub /> Repositório
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/robson-ferreira-508247134/"
                  target="_blank"
                  style={{ color: "#f8f9fa" }}
                >
                  <FaLinkedin /> Linkedin
                </a>
                <a
                  className="nav-link"
                  href="https://www.instagram.com/rob_ferreira88"
                  target="_blank"
                  style={{ color: "#f8f9fa" }}
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarBComponent;
