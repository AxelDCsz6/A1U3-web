import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import AltaPage from './pages/AltaPage';
import AxelPage from './pages/AxelPage';
import JosePage from './pages/JosePage';
import './index.css';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"          element={<HomePage />}     />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/alta"      element={<AltaPage />}     />
        </Route>
        <Route path="/axel" element={<AxelPage />} />
        <Route path="/jose" element={<JosePage />} />
      </Routes>
    </HashRouter>
  );
}
