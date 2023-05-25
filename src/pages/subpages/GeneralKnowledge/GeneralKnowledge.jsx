import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const GeneralKnowledge = () => {
  const categoryName = 'general-knowledge';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Culture générale <i className="fa-solid fa-masks-theater"></i>
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
