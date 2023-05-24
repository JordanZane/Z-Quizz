import React from 'react';
import { Link } from 'react-router-dom';
import computerScienceImg from '../assets/images/computer-science.svg';

const Home = () => {
  return (
    <main>
      <section className="header-home-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2>Bienvenue sur Z Quiz !</h2>
              <p>
                Naviguez à travers les différentes catégories ou sélectionner un
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
              <h2>Catégories</h2>
              <p>Sélectionnez une catégorie</p>
              <ul>
                <li>
                  <Link to="/category/general-knowledge">
                    <i className="fa-solid fa-masks-theater"></i> Culture
                    générale
                  </Link>
                </li>
                <li>
                  <Link to="/category/videos-games">
                    <i className="fa-solid fa-masks-theater"></i> Jeux vidéos
                  </Link>
                </li>
                <li>
                  <Link to="/category/science-nature">
                    <i className="fa-solid fa-masks-theater"></i> Science :
                    Nature
                  </Link>
                </li>
                <li>
                  <Link to="/category/science-computer">
                    <i className="fa-solid fa-masks-theater"></i> Science :
                    Ordinateur
                  </Link>
                </li>
                <li>
                  <Link to="/category/anim-manga-jap">
                    <i className="fa-solid fa-masks-theater"></i> Animations
                    Japonaises & Manga
                  </Link>
                </li>
                <li>
                  <Link to="/category/mythology">
                    <i className="fa-solid fa-masks-theater"></i> Mythologie
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="card-container">
                <div className="img-container">
                  <img src={computerScienceImg} alt="computer science" />
                </div>
                <div className="content">
                  <h3>Testez vos connaissances</h3>
                  <p>- Computer Science -</p>
                  <Link className="btn-style" to="/category/science-computer">
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
