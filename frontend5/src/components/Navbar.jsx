import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mb-4 bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h4 className="text-white">EaseTicket</h4>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <NavLink
                className="nav-link active me-5"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
