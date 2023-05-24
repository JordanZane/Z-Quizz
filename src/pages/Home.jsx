import React from 'react';
import { Link } from 'react-router-dom';
import computerScienceImg from '../assets/images/computer-science.svg';

const Home = () => {
  return (
    <main>
      <section className="header-home-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Bienvenue sur Z Quiz !</h2>
              <p>
                Naviguez à travers les différentes catégories et sélectionner un
                quiz selon sa difficulté et testez vos connaissances !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="categories-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="categories-container">
                <h2>Catégories</h2>
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
                      <i className="fa-solid fa-masks-theater"></i> Jeux vidéos
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/science-nature">
                      <i className="fa-solid fa-masks-theater"></i> Science :
                      Nature
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/science-computer">
                      <i className="fa-solid fa-masks-theater"></i> Science :
                      Ordinateur
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories/anim-manga-jap">
                      <i className="fa-solid fa-masks-theater"></i> Animations
                      Japonaises & Manga
                    </Link>
                  </li>
                </ul>
                <Link className="btn-style" to="/categories">
                  Toutes les catégories
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <h2>Quiz du mois</h2>

              <div className="card-container">
                <div className="img-container">
                  <img src={computerScienceImg} alt="computer science" />
                </div>
                <div className="content">
                  <h3>Testez vos connaissances</h3>
                  <p>- Computer Science -</p>
                  <Link className="btn-style" to="/categories/science-computer">
                    Jouez
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
