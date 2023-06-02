import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <main>
      <section className="header-categories-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Categories</h2>
              <div className="categories-container">
                <p>Select your categories !</p>
                <ul>
                  <li>
                    <Link to="/categories/general-knowledge">
                      <i className="fa-solid fa-masks-theater"></i> General
                      Knowledge
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/videos-games">
                      <i className="fa-solid fa-gamepad"></i> Videos Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/science-nature">
                      <i className="fa-sharp fa-solid fa-leaf"></i> Science :
                      Nature
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/science-computer">
                      <i className="fa-sharp fa-solid fa-computer"></i> Science
                      : Computer
                    </Link>
                  </li>

                  <li>
                    <Link to="/categories/anim-manga-jap">
                      <i className="fa-solid fa-book"></i> Japaneses Animations
                      & Manga
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/mythology">
                      <i className="fa-sharp fa-solid fa-bolt"></i> Mythology
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/films">
                      <i className="fa-solid fa-video"></i> Movies
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/sports">
                      <i className="fa-solid fa-baseball"></i> Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/geography">
                      <i className="fa-solid fa-earth-americas"></i> Géography
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/animals">
                      <i className="fa-solid fa-hippo"></i> Animals
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
