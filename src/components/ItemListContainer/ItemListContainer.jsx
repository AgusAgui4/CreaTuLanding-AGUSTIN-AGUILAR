import "./ItemListContainer.css";
import { Link } from "react-router"; 
import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; 

function ItemListContainer({ greetings }) {
  const [productosData, setProductosData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos"); 
        const snapshot = await getDocs(productosRef);
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductosData(docs);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="lista-productos">
      <h2>{greetings}</h2>
      <h2 className="subtitulo">Lista de Productos</h2>
      <ul>
        {productosData.map((producto) => (
          <li key={producto.id}>
            <img src={`/image/${producto.id}.jpg`} width="110" alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>
              <button>Detalle del producto</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
