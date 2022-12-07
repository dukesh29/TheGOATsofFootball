import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">Home-65</span>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item d-flex gap-2">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/pages/argentina" className="nav-link">
                Argentina
              </NavLink>
              <NavLink to="/pages/portugal" className="nav-link">
                Portugal
              </NavLink>
              <NavLink to="/pages/france" className="nav-link">
                France
              </NavLink>
              <NavLink to="/pages/england" className="nav-link">
                England
              </NavLink>
              <NavLink to="/pages/admin" className="nav-link">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;