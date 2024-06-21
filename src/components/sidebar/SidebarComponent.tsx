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

  interface MenuItemStyleProps {
    active: boolean;
  }

  const menuItemStyles = {
    button: ({ active }: MenuItemStyleProps) => ({
      backgroundColor: active ? "#0e1129" : undefined,
      color: active ? "white" : undefined,
      "&:hover": {
        backgroundColor: "#1976D2",
        color: "white",
        textDecoration: "none",
      },
    }),
    subMenuContent: {
      backgroundColor: "#0e1129",
    },
    label: {
      color: "white",
    },
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
      <div className={styles.menuContainer}>
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem icon={<FaHome />}>
            <Link to="/">Home</Link>
          </MenuItem>
          <SubMenu icon={<FaFileAlt />} label="Documentos">
            <MenuItem
              icon={<FaFileAlt />}
              href="https://docs.google.com/document/d/1sJYW5UXxLzkvIRNNnHhB_5-hjAkC1VTUuxFlkv4MJc8/edit?usp=sharing"
              target="_blank"
            >
              Instruções
            </MenuItem>
            <MenuItem
              icon={<FaFileAlt />}
              href="https://docs.google.com/document/d/1rg0E-S7HjE9chbFbpI8EiZ7bWL2m900FQOHwCWXqAyA/edit?usp=sharing"
              target="_blank"
            >
              Documentação
            </MenuItem>
          </SubMenu>
          <SubMenu label="GitHub" icon={<FaGithub />}>
            <MenuItem
              icon={<FaGithub />}
              href="https://github.com/RobsonFe"
              target="_blank"
            >
              Autor
            </MenuItem>
            <MenuItem
              icon={<FaGithub />}
              href="https://github.com/RobsonFe/GitFind"
              target="_blank"
            >
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
      </div>
      <div className={styles.collapseButton} onClick={toggleCollapse}>
        {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
