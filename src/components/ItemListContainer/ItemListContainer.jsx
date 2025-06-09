import "./ItemListContainer.css";
import { Link } from "react-router";
import React, { useEffect, useState } from "react";
import productos from "../../data/DB"; // Importando los productos simulados

function ItemListContainer({ greetings }) {
  const [productosData, setProductosData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductosData(productos);
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="lista-productos">
      <h2>{greetings}</h2>
      <h2 className="subtitulo">Lista de Productos</h2>
      <ul>
        {productosData.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} width="110" alt={producto.nombre} />
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
