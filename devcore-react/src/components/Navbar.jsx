import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-active' : undefined}
              end
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alta"
              className={({ isActive }) => isActive ? 'nav-active' : undefined}
            >
              Agregar servicio
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
