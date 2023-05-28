import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const NaturalScience = () => {
  const categoryName = 'science-nature';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Natural Science <i className="fa-sharp fa-solid fa-leaf"></i>
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

export default NaturalScience;
