// components/NavBar.jsx
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor:"powderblue", padding: 20 }}>
             <img 
                src="\src\assets\logo.png" 
                alt="Logo de la tienda" 
                style={{ height: "100px" }} 
            />
            <ul style={{ display: "flex", listStyle: "none", gap: "1rem", fontSize: "1.2rem" }}>
                <li><a href='inicio'>INICIO</a></li>
                <li><a href="./src/pages/productos.jsx">PRODUCTOS</a></li>
                <li><a href="./src/pages/contacto.jsx">CONTACTO</a></li>
            </ul>
            <CartWidget cantidad={4} />
        </nav>
    );
};

export default NavBar;
