import "./ItemDetailContainer.css";
import { useParams, Link } from "react-router";
import Contador from "../Contador/Contador";
import { useCart } from "../cart/CartContext";
import { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function DetalleProducto() {
  const { productoId } = useParams();
  const { agregarAlCarrito } = useCart();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", productoId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [productoId]);

  if (loading) return <p>Cargando...</p>;

  if (!producto) return <p>Producto no encontrado</p>;

  const manejarAgregarAlCarrito = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    agregarAlCarrito(productoConCantidad);
  };

  return (
    <div className="detalle-producto">
      <img
        src={`/image/${producto.id}.jpg`}
        width="250"
        alt={producto.nombre}
      />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="precio">Precio: ${producto.precio}</p>

      <Contador stock={producto.stock} onAdd={manejarAgregarAlCarrito} />

      <Link to="/">
        <button className="volver-al-inicio">Volver al inicio</button>
      </Link>
    </div>
  );
}

export default DetalleProducto;
