import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import {
  FaHome,
  FaFileAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaAngleLeft,
} from "react-icons/fa";
import styles from "./sidebarcomponent.module.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SidebarComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      className={styles.customSidebar}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#0e1129",
        },
      }}
    >
      <Menu>
        <MenuItem icon={<FaHome />}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem
          icon={<FaFileAlt />}
          href="https://docs.google.com/document/d/1sJYW5UXxLzkvIRNNnHhB_5-hjAkC1VTUuxFlkv4MJc8/edit?usp=sharing"
          target="_blank"
        >
          Documentação
        </MenuItem>
        <SubMenu label="GitHub" icon={<FaGithub />}>
          <MenuItem
            icon={<FaGithub />}
            href="https://github.com/RobsonFe"
            target="_blank"
          >
            Robson Ferreira
          </MenuItem>
          <MenuItem icon={<FaGithub />} href="" target="_blank">
            Repositório
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<FaInstagram />}
          href="https://www.instagram.com/rob_ferreira88"
          target="_blank"
        >
          Instagram
        </MenuItem>
        <MenuItem
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/robson-ferreira-508247134/"
          target="_blank"
        >
          Linkedin
        </MenuItem>
      </Menu>
      <div className={styles.collapseButton} onClick={toggleCollapse}>
        {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
