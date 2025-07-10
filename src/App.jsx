import { BrowserRouter, Routes, Route } from "react-router";
import "./app.css"
import { CartProvider } from "./components/cart/CartContext"; 
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Categoria from "./components/Categoria/Categoria";
import Contacto from "./components/Contacto/contacto";
import DetalleProducto from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/cart/cart";
import Pago from "./components/Pago/pago";
import Gracias from "./components/Pago/gracias";
import NotFound from "./components/404/404";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<ItemListContainer greetings="¡Bienvenido a TECshop!" />} />
              <Route path="/categoria/:categoriaId" element={<Categoria />} />
              <Route path="/producto/:productoId" element={<DetalleProducto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/pago" element={<Pago />} />
              <Route path="/gracias" element={<Gracias />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
