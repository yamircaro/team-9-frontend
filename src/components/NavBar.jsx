import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBarStyles.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Restaurante Sabores de Colombia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">
                Reservación
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Acceder
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboud">
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
