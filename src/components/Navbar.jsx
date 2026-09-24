import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

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

                <ul className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                </ul>

                <div className="iconosNav">
                    <input type="search" placeholder="Buscar productos" className="buscadorNav" />
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <span className="icon"><i className="fa-solid fa-cart-shopping"></i></span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;