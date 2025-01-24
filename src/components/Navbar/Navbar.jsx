import React from "react";
import { Link } from "react-router-dom";
import { DivLogo, Logo, Menu, MenuItem, Nav } from "./NavbarStyles";
import logoGym from "../../assets/assetsNavbar/logoGym.webp";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={logoGym} alt="logo" />
      </Link>

      <Menu>
        <MenuItem>
          <Link to="/">Inicio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/plans">Planes</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contacto</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/members">Miembros</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
