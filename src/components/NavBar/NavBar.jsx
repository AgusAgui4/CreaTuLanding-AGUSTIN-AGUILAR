import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className="navbar">
             <img 
                src="\src\assets\logo.png" 
                alt="Logo de la tienda" 
                style={{ height: "100px" }} 
            />
            <ul>
                <li><a href='inicio'>INICIO</a></li>
                <li><a href="./src/pages/productos.jsx">PRODUCTOS</a></li>
                <li><a href="./src/pages/contacto.jsx">CONTACTO</a></li>
            </ul>
            <CartWidget cantidad={4} />
        </nav>
    );
};

export default NavBar;
