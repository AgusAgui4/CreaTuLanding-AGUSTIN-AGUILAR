import "./gracias.css";
import { useCart } from "../cart/CartContext";
import { Link } from "react-router";

function Gracias() {
  const { carrito } = useCart(); // Obtener el carrito

  // Calcular el total de la compra
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    <div className="gracias">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu compra ha sido realizada con éxito.</p>

      <h3>Resumen de la compra:</h3>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre}</span> - {producto.cantidad} x ${producto.precio}
          </li>
        ))}
      </ul>

      <p className="total-compra">
        <strong>Total: ${calcularTotal()}</strong>
      </p>

      <Link to="/" className="volver-tienda">
        Volver a la tienda
      </Link>
    </div>
  );
}

export default Gracias;
