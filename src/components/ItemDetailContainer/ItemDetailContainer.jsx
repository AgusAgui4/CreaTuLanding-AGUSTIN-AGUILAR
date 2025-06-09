import "./ItemDetailContainer.css";
import { useParams } from "react-router";
import productos from "../../data/DB";
import Contador from "../Contador/Contador";

function DetalleProducto() {
  const { productoId } = useParams();

  const producto = productos.find((p) => p.id === productoId);

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="detalle-producto">
      <img src={producto.imagen} width="250" alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <Contador />
      <p className="precio">Precio: ${producto.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default DetalleProducto;
