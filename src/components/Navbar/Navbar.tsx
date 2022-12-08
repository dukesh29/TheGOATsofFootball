import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">Топ-игроки Чемпионата Мира</span>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item d-flex gap-2">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/pages/lionel-messi" className="nav-link">
                Лионель Месси
              </NavLink>
              <NavLink to="/pages/cristiano-ronaldo" className="nav-link">
                Криштиану Роналду
              </NavLink>
              <NavLink to="/pages/kilian-mbappe" className="nav-link">
                Килиан Мбаппе
              </NavLink>
              <NavLink to="/pages/harry-kane" className="nav-link">
                Харри Кейн
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