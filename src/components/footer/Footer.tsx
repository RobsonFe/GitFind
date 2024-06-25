import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  const anoAtual = new Date().getFullYear().toString();

  return (
    <footer
      className=" text-light text-center py-3"
      style={{ backgroundColor: "#0e1129" }}
    >
      <div className="container">
        <p>Obrigado pela Visita!</p>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/RobsonFe" target="_blank">
            Robson Ferreira
          </a>
        </p>
        <p>
          Copyright
          <FaRegCopyright /> {anoAtual}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
