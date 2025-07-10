import "./Categoria.css";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function Categoria() {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const snapshot = await getDocs(collection(db, "productos"));
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(docs);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const filtrados = productos.filter((prod) => prod.categoria === categoriaId);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="categoria-contenedor">
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>

      <h2>Productos de la categoría: {categoriaId}</h2>

      {filtrados.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      ) : (
        <ul>
          {filtrados.map((prod) => (
            <li key={prod.id}>
              <img
                src={`/image/${prod.id}.jpg`}
                width="110"
                alt={prod.nombre}
              />
              <p>{prod.nombre}</p>
              <p>${prod.precio}</p>
              <Link to={`/producto/${prod.id}`}>
                <button>Detalle del producto</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Categoria;
