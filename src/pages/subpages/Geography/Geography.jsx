import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const Geography = () => {
  const categoryName = 'Geography';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Geography <i className="fa-solid fa-earth-americas"></i>
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

export default Geography;
