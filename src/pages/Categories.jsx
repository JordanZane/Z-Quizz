import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <main>
      <section className="header-categories-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Catégories</h2>
              <div className="categories-container">
                <p>Sélectionnez votre quiz parmis de nombreuses catégories !</p>
                <ul>
                  <li>
                    <Link to="/categories/general-knowledge">
                      <i className="fa-solid fa-masks-theater"></i> Culture
                      générale
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/videos-games">
                      <i className="fa-solid fa-gamepad"></i> Jeux vidéos
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
                      : Ordinateur
                    </Link>
                  </li>

                  <li>
                    <Link to="/categories/anim-manga-jap">
                      <i className="fa-solid fa-book"></i> Animations Japonaises
                      & Manga
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/mythology">
                      <i className="fa-sharp fa-solid fa-bolt"></i> Mythologie
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
                      <i className="fa-solid fa-earth-americas"></i> Géographie
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
