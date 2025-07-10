import { Link } from "react-router";
import "./footer.css";

function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-logo">
          <img src="/image/logo.jpg" alt="Logo" />
          <p>TecShop Tienda Online</p>
        </div>

        <div className="footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/carrito">Carrito</Link>
        </div>

        <div className="footer-redes">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      <div className="footer-copyright">
        © {anioActual} TecShop. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
