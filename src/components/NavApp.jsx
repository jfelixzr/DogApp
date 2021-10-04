import React from "react";
import { Link } from "react-router-dom";
const NavApp = ({ searchMovie }) => {
  return (
    <>
      <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
        <span ClassName="navbar-toggler-icon"></span>

        <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul ClassName="navbar-nav mr-auto">
            <li ClassName="nav-item active">
              <Link ClassName="nav-link" to="/inicio">
                Inicio{" "}
              </Link>
            </li>
            <li ClassName="nav-item">
              <Link ClassName="nav-link" to="/add">
                Agregar Receta
              </Link>
            </li>

            <li ClassName="nav-item">
              <Link ClassName="nav-link" to="/login/">
                login
              </Link>
            </li>
            <li ClassName="nav-item">
              <Link ClassName="nav-link" to="/registro/">
                registro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavApp;
