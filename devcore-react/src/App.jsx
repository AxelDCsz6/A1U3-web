import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiciosPage from './pages/ServiciosPage';
import AltaPage from './pages/AltaPage';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/"     element={<ServiciosPage />} />
          <Route path="/alta" element={<AltaPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
