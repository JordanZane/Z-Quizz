import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Categories from './pages/Categories';
import GeneralKnowledge from './pages/subpages/GeneralKnowledge/GeneralKnowledge';
import GkEasy from './pages/subpages/GeneralKnowledge/GkEasy';
import GkMedium from './pages/subpages/GeneralKnowledge/GkMedium';
import GkHard from './pages/subpages/GeneralKnowledge/GkHard';
import VideosGames from './pages/subpages/VideosGames/VideosGames';
import VgEasy from './pages/subpages/VideosGames/VgEasy';
import VgMedium from './pages/subpages/VideosGames/VgMedium';
import VgHard from './pages/subpages/VideosGames/VgHard';

import './styles/_scss/styles.scss';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/general-knowledge"
          element={<GeneralKnowledge />}
        />
        <Route path="/categories/general-knowledge-easy" element={<GkEasy />} />
        <Route
          path="/categories/general-knowledge-medium"
          element={<GkMedium />}
        />
        <Route path="/categories/general-knowledge-hard" element={<GkHard />} />
        <Route path="/categories/videos-games" element={<VideosGames />} />
        <Route path="/categories/videos-games-easy" element={<VgEasy />} />
        <Route path="/categories/videos-games-medium" element={<VgMedium />} />
        <Route path="/categories/videos-games-hard" element={<VgHard />} />
      </Routes>
    </>
  );
}

export default App;
