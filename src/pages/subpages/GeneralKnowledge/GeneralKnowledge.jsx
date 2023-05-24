import React from 'react';
import { Link } from 'react-router-dom';

const GeneralKnowledge = () => {
  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Culture générale</h2>
              <ul className="difficulty-container">
                <li className="easy-difficulty">
                  <Link to="/categories/general-knowledge/gk-easy">
                    <i className="fa-solid fa-star"></i>Facile
                  </Link>
                </li>
                <li className="medium-difficulty">
                  <Link to="/categories/general-knowledge/gk-medium">
                    <i className="fa-solid fa-star"></i>Intermédiaire
                  </Link>
                </li>
                <li className="hard-difficulty">
                  <Link to="/categories/general-knowledge/gk-hard">
                    <i className="fa-solid fa-star"></i>Difficle
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralKnowledge;
