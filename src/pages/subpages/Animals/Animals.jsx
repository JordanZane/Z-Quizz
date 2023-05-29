import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const Animals = () => {
  const categoryName = 'animals';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Animals <i className="fa-solid fa-hippo"></i>
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

export default Animals;
