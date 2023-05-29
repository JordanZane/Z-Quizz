import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const GeneralKnowledge = () => {
  const categoryName = 'film';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Film <i className="fa-solid fa-video"></i>
              </h2>
              <ul className="difficulty-container">
                <DifficulyNav categoryName={categoryName} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralKnowledge;
