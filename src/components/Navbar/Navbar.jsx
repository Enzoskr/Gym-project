import React from "react";
import { Link } from "react-router-dom";
import { DivLogo, Logo, Menu, MenuItem, Nav } from "./NavbarStyles";
import LogoGym from "../../assets/assetsNavbar/LogoGym.webp";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={LogoGym} alt="logo" />
      </Link>

      <Menu>
        <MenuItem>
          <Link to="/">Inicio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/plans">Planes</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/Rutinas">Rutinas</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/members">Miembros</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
