import React from 'react';
import DifficulyNav from '../../../components/DifficulyNav';

const VideosGames = () => {
  const categoryName = 'videos-games';

  return (
    <main>
      <section className="section subpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>
                Vidéos Games <i class="fa-solid fa-gamepad"></i>
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

export default VideosGames;
