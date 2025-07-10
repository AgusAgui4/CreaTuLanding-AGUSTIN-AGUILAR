import { Link } from "react-router";
import { useCart } from "../cart/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";
import { db } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./NavBar.css";

function NavBar() {
  const { cantidadEnCarrito } = useCart();
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const obtenerResultados = async () => {
      if (busqueda.trim() === "") {
        setResultados([]);
        return;
      }

      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const coincidencias = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((producto) =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
          );

        setResultados(coincidencias.slice(0, 5));
      } catch (error) {
        console.error("Error al buscar productos:", error);
      }
    };

    obtenerResultados();
  }, [busqueda]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/image/logo.jpg" alt="Logo de la tienda" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li className="desplegable">
          <input type="checkbox" id="toggle-categorias" />
          <label htmlFor="toggle-categorias">🢛 Categorías 🢛</label>

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

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {resultados.length > 0 && (
          <ul className="resultados-busqueda">
            {resultados.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/producto/${item.id}`}
                  onClick={() => setBusqueda("")}
                >
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/carrito">
        <button className="cart-button">
          <CartWidget cantidad={cantidadEnCarrito} />
        </button>
      </Link>
    </nav>
  );
}

export default NavBar;
