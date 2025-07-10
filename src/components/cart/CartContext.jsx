import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
        );
      } else {
        return [...prevCarrito, producto];
      }
    });
  };

  // Función para eliminar productos del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.map((producto) =>
        producto.id === id && nuevaCantidad >= 1
          ? { ...producto, cantidad: nuevaCantidad }
          : producto
      );
    });
  };

  const cantidadEnCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, cantidadEnCarrito, actualizarCantidad }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
