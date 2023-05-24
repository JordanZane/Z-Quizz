import React from 'react';
import logoImg from '../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <div className="logo-container">
                <Link to="/">
                  <img src={logoImg} alt="ZQuiz" />
                </Link>
              </div>
              <h1>ZQuiz</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/">Accueil</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories">Catégories</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
