import { useParams, Link } from "react-router";
import productos from "../../data/DB";
import "./categoria.css";

function Categoria() {
  const { categoriaId } = useParams();
  const filtrados = productos.filter(prod => prod.categoria === categoriaId);

  return (
    <div className="categoria-contenedor">
      <h2>Productos de la categoría: {categoriaId}</h2>

      {filtrados.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p>No se encontraron productos en esta categoría.</p>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      ) 
      : (
        <ul>
          {filtrados.map(prod => (
            <li key={prod.id}>
              <img src={prod.imagen} width="110" alt={prod.nombre} />
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


