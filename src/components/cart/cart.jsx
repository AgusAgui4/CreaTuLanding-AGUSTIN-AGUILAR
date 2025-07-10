import "./cart.css";
import { useCart } from "./CartContext";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Carrito() {
  const { carrito, eliminarDelCarrito, actualizarCantidad } = useCart();

  const [productosFirestore, setProductosFirestore] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "productos"));
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductosFirestore(docs);
      } catch (error) {
        console.error("Error al traer productos de Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const verificarStock = () => {
    const productosSinStock = [];

    for (let productoCarrito of carrito) {
      const productoBD = productosFirestore.find(
        (prod) => prod.id === productoCarrito.id
      );
      if (!productoBD || productoCarrito.cantidad > productoBD.stock) {
        productosSinStock.push({
          ...productoCarrito,
          stockDisponible: productoBD ? productoBD.stock : 0,
        });
      }
    }

    return productosSinStock;
  };

  const productosSinStock = verificarStock();
  const tieneStockSuficiente = productosSinStock.length === 0;

  const manejarCantidadCambio = (id, cantidad) => {
    const productoBD = productosFirestore.find((prod) => prod.id === id);
    if (productoBD && cantidad <= productoBD.stock && cantidad >= 1) {
      actualizarCantidad(id, cantidad);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="carrito">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                <img
                  src={`/image/${producto.id}.jpg`}
                  width="50"
                  alt={producto.nombre}
                />
                <span>{producto.nombre}</span>
                <div>
                  <input
                    type="number"
                    min="1"
                    max={
                      productosFirestore.find((prod) => prod.id === producto.id)
                        ?.stock || producto.stock
                    }
                    value={producto.cantidad}
                    onChange={(e) =>
                      manejarCantidadCambio(
                        producto.id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  x ${producto.precio}
                </div>
                <button onClick={() => eliminarDelCarrito(producto.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p className="total">Total: ${calcularTotal()}</p>

            {!tieneStockSuficiente ? (
              <div style={{ color: "red" }}>
                <p>No hay suficiente stock para los siguientes productos:</p>
                <ul>
                  {productosSinStock.map((producto) => (
                    <li key={producto.id}>
                      {producto.nombre} – Solo hay {producto.stockDisponible}{" "}
                      disponibles
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to="/pago">
                <button>Terminar compra</button>
              </Link>
            )}
          </div>
        </div>
      )}
      <Link to="/">Volver a la tienda</Link>
    </div>
  );
}

export default Carrito;
