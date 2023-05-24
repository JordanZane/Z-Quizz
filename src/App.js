import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/Menu';
import Categories from './pages/Categories';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
      
  );
}

export default App;
