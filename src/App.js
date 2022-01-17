import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import CategoriesPage from './Pages/Categories/CategoriesPage';
import HomePage from './Pages/Home/HomePage';
import ProPage from './Pages/PRO/ProPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pro" element={<ProPage />} />
        <Route path="/category/:id" element={<CategoriesPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
