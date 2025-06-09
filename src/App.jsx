import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Categoria from "./components/Categoria/Categoria";
import DetalleProducto from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/404/404"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="¡Bienvenido a TECshop!" />} />
        <Route path="/categoria/:categoriaId" element={<Categoria />} />
        <Route path="/producto/:productoId" element={<DetalleProducto />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
