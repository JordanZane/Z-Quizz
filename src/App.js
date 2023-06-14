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
import MythoMedium from './pages/subpages/Mythology/MythoMedium';
import MythoHard from './pages/subpages/Mythology/MythoHard';
import Film from './pages/subpages/Film/Film';
import FilmEasy from './pages/subpages/Film/FilmEasy';
import FilmMedium from './pages/subpages/Film/FilmMedium';
import FilmHard from './pages/subpages/Film/FilmHard';
import Sport from './pages/subpages/Sport/Sport';
import SportEasy from './pages/subpages/Sport/SportEasy';
import SportMedium from './pages/subpages/Sport/SportMedium';
import SportHard from './pages/subpages/Sport/SportHard';
import Geography from './pages/subpages/Geography/Geography';
import GeoEasy from './pages/subpages/Geography/GeoEasy';
import GeoMedium from './pages/subpages/Geography/GeoMedium';
import GeoHard from './pages/subpages/Geography/GeoHard';
import Animals from './pages/subpages/Animals/Animals';
import AnimalsEasy from './pages/subpages/Animals/AnimalsEasy';
import AnimalsMedium from './pages/subpages/Animals/AnimalsMedium';
import AnimalsHard from './pages/subpages/Animals/AnimalsHard';
import Legal from './pages/Legal';
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
        <Route path="/categories/mythology-medium" element={<MythoMedium />} />
        <Route path="/categories/mythology-hard" element={<MythoHard />} />
        <Route path="/categories/films" element={<Film />} />
        <Route path="/categories/film-easy" element={<FilmEasy />} />
        <Route path="/categories/film-medium" element={<FilmMedium />} />
        <Route path="/categories/film-hard" element={<FilmHard />} />
        <Route path="/categories/sports" element={<Sport />} />
        <Route path="/categories/sports-easy" element={<SportEasy />} />
        <Route path="/categories/sports-medium" element={<SportMedium />} />
        <Route path="/categories/sports-hard" element={<SportHard />} />
        <Route path="/categories/geography" element={<Geography />} />
        <Route path="/categories/geography-easy" element={<GeoEasy />} />
        <Route path="/categories/geography-medium" element={<GeoMedium />} />
        <Route path="/categories/geography-hard" element={<GeoHard />} />
        <Route path="/categories/animals" element={<Animals />} />
        <Route path="/categories/animals-easy" element={<AnimalsEasy />} />
        <Route path="/categories/animals-medium" element={<AnimalsMedium />} />
        <Route path="/categories/animals-hard" element={<AnimalsHard />} />
        <Route path="/legal" element={<Legal />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
