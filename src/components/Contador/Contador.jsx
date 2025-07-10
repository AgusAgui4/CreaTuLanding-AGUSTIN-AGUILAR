import { useState } from 'react';
import './Contador.css';

function Contador({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  function restarCantidad() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  function sumarCantidad() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function agregarAlCarrito() {
    if (cantidad <= stock && cantidad > 0) {
      onAdd(cantidad);
    } else {
      alert("Cantidad no válida o fuera de stock.");
    }
  }

  return (
    <div style={{ display: "flex", gap: "1rem", margin: "1rem 0", alignItems: "center" }}>
      <button className="btn btn-secondary" onClick={restarCantidad}>-</button>
      <p>{cantidad}</p>
      <button className="btn btn-secondary" onClick={sumarCantidad}>+</button>
      <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default Contador;
