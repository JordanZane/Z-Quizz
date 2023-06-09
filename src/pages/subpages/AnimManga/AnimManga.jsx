import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const AnimManga = () => {
  const categoryName = 'anim-manga-jap';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Japanese anime & manga <i className="fa-solid fa-book"></i>
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

export default AnimManga;
