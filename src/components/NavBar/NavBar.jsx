import { Link } from "react-router"; 
import { useCart } from "../cart/CartContext"; 
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  const { cantidadEnCarrito } = useCart(); // Obtener la cantidad de productos en el carrito

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="../../assets/logo.jpg" alt="Logo de la tienda" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li className="desplegable">
          <span>🢛 Categorías 🢛</span>
          <ul className="desplegable-contenido">
            <li>
              <Link to="/categoria/electronica">Electrónica</Link>
            </li>
            <li>
              <Link to="/categoria/accesorios">Accesorios</Link>
            </li>
            <li>
              <Link to="/categoria/otros">Otros</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      <Link to="/carrito">
        <button className="cart-button">
          <CartWidget cantidad={cantidadEnCarrito} />
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
