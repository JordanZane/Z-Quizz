import React from 'react';
import { Link } from 'react-router-dom';
import computerScienceImg from '../assets/images/computer-science.svg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <section className="header-home-section section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Welcome to Z Quiz !</h2>
              <p>
                Navigate through the different categories and select a quiz
                based on its difficulty to test your knowledge !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="categories-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="categories-container">
                <h2>Categories</h2>
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
                      <i className="fa-sharp fa-solid fa-leaf"></i> Nature
                      Science
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
                </ul>
                <Link className="btn-style" to="/categories">
                  All categories
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 monthly-quiz">
              <h2>Quiz of the month</h2>

              <div className="card-container">
                <div className="img-container">
                  <img src={computerScienceImg} alt="Computer science" />
                </div>
                <div className="content">
                  <h3>Test yout knowledge</h3>
                  <p>- Computer Science -</p>
                  <Link className="btn-style" to="/categories/science-computer">
                    Play
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
