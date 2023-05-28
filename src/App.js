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
import NaturalScience from './pages/subpages/NaturalScience/NaturalScience';
import NsEasy from './pages/subpages/NaturalScience/NsEasy';
import NsMedium from './pages/subpages/NaturalScience/NsMedium';
import NsHard from './pages/subpages/NaturalScience/NsHard';
import ComputerScience from './pages/subpages/ComputerScience/ComputerScience';
import CsEasy from './pages/subpages/ComputerScience/CsEasy';
import CsMedium from './pages/subpages/ComputerScience/CsMedium';
import CsHard from './pages/subpages/ComputerScience/CsHard';
import AnimManga from './pages/subpages/AnimManga/AnimManga';
import AmEasy from './pages/subpages/AnimManga/AmEasy';
import AmMedium from './pages/subpages/AnimManga/AmMedium';
import AmHard from './pages/subpages/AnimManga/AmHard';
import Mythology from './pages/subpages/Mythology/Mythology';
import MythoEasy from './pages/subpages/Mythology/MythoEasy';

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
        <Route path="/categories/science-nature" element={<NaturalScience />} />
        <Route path="/categories/science-nature-easy" element={<NsEasy />} />
        <Route
          path="/categories/science-nature-medium"
          element={<NsMedium />}
        />
        <Route path="/categories/science-nature-hard" element={<NsHard />} />
        <Route
          path="/categories/science-computer"
          element={<ComputerScience />}
        />
        <Route path="/categories/science-computer-easy" element={<CsEasy />} />
        <Route
          path="/categories/science-computer-medium"
          element={<CsMedium />}
        />
        <Route path="/categories/science-computer-hard" element={<CsHard />} />
        <Route path="/categories/anim-manga-jap" element={<AnimManga />} />
        <Route path="/categories/anim-manga-jap-easy" element={<AmEasy />} />
        <Route
          path="/categories/anim-manga-jap-medium"
          element={<AmMedium />}
        />
        <Route path="/categories/anim-manga-jap-hard" element={<AmHard />} />
        <Route path="/categories/mythology" element={<Mythology />} />
        <Route path="/categories/mythology-easy" element={<MythoEasy />} />
      </Routes>
    </>
  );
}

export default App;
