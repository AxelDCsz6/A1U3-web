import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">DEVCORE</Link>
      <ul>
        <li>
          <Link to="/" className={pathname === '/' ? 'nav-active' : ''}>
            ¿Quiénes somos?
          </Link>
        </li>
        <li>
          <Link to="/servicios" className={pathname === '/servicios' ? 'nav-active' : ''}>
            Servicios
          </Link>
        </li>
      </ul>
    </nav>
  );
}
