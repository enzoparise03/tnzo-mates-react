import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

// Tarjeta de producto, usada en el catálogo (Productos.jsx)
// Parecida a Card, pero con otro diseño real
// por eso es un componente aparte en vez de forzar el mismo molde
function ProductCard({ imagen, nombre, precio, id }) {
    return (
        <div className="producto">
            <img src={imagen} alt={nombre} />
            <h4>{nombre}</h4>
            <p>ARS {precio}</p>
            {/* Aca se dirige la URL con el id del producto: /productos/torpedoAlpaca, etc. */}
            <Link to={`/productos/${id}`} className="btn">VER DETALLES</Link>
        </div>
    );
}

export default ProductCard;