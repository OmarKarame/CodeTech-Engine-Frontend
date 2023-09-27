import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BusinessModel from './pages/BusinessModel/BusinessModel';
import AboutUs from './pages/AboutUs/AboutUs';
import TeamPage from './pages/TeamPage/TeamPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/businessmodel" element={<BusinessModel />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
