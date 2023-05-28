import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const Mythology = () => {
  const categoryName = 'Mythology';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Mythology <i className="fa-sharp fa-solid fa-bolt"></i>
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

export default Mythology;
