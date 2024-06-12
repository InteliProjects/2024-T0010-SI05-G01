import React, { useState } from "react";
import Logo from "../../imgs/logoPreta.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyle } from "../../components/Header/style";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderStyle>
      <img src={Logo} alt="logo" />
      <div id="groupRight">
        <FontAwesomeIcon
          id="user"
          icon={faCircleUser}
          style={{ color: "#1e2225" }}
        />
        <FontAwesomeIcon
          id="bars"
          icon={faBars}
          style={{ color: "#1e2225" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      {menuOpen && (
        <nav
          id="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menuButton">
            <Link to="/validarTransacao" className="link1">Validar transação</Link>
          </button>

          <button className="menuButton">
            <Link to="/RegistrarTransacao" className="link2">Cadastrar transação</Link>
          </button>

          <button className="menuButton">
            <Link to="/instrucoes" className="link3">Instruções</Link>
          </button>

          <button className="logoutBtn" onClick={() => console.log("Sair")}>
            Sair
          </button>
        </nav>
      )}
    </HeaderStyle>
  );
}

export default Header;
