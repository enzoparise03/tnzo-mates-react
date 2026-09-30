import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// Barra de navegación. Se muestra en todas las páginas
function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-container">
                    <img src="/assets/icono-mate.png" alt="Icono Mate" className="logo-icon" />
                    <div className="logo-text">
                        <span className="logo-title">TNZO</span>
                        <span className="logo-subtitle">MATES Y CROCHET</span>
                    </div>
                </div>

                {/*navega sin recargar la página */}
                <ul className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                </ul>

                <div className="iconosNav">
                    {/* Buscador decorativo, sin lógica */}
                    <input type="search" placeholder="Buscar productos" className="buscadorNav" />
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <span className="icon"><i className="fa-solid fa-cart-shopping"></i></span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;