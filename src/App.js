import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Categories from './pages/Categories';
import GeneralKnowledge from './pages/subpages/GeneralKnowledge/GeneralKnowledge';
import GkEasy from './pages/subpages/GeneralKnowledge/GkEasy';
import GkMedium from './pages/subpages/GeneralKnowledge/GkMedium';
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
      </Routes>
    </>
  );
}

export default App;
