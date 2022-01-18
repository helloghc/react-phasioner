import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

// Pages
import CategoriesPage from './Pages/Categories/CategoriesPage';
import DesignerPage from './Pages/Designers/DesignerPage';
import DetailsPage from './Pages/DetailProduct/DetailsPage';
import HomePage from './Pages/Home/HomePage';
import OrderPage from './Pages/Order/OrderPage';
import ProPage from './Pages/PRO/ProPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pro" element={<ProPage />} />
        <Route path="/category/:id" element={<CategoriesPage/>} />
        <Route path="/designers" element={<DesignerPage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
