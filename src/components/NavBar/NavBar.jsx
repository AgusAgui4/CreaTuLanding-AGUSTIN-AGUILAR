import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router"; // CORRECTO

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/src/assets/logo.png" alt="Logo de la tienda" />
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>

        <li className="desplegable">
          <span>🢛 Categorías 🢛</span>
          <ul className="desplegable-contenido">
            <li><Link to="/categoria/electronica">Electrónica</Link></li>
            <li><Link to="/categoria/accesorios">Accesorios</Link></li>
            <li><Link to="/categoria/otros">Otros</Link></li>
          </ul>
        </li>

        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <CartWidget cantidad={4} />
    </nav>
  );
}

export default NavBar;

