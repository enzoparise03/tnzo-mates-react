import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ imagen, nombre, precio, id }) {
    return (
        <div className="producto">
            <img src={imagen} alt={nombre} />
            <h4>{nombre}</h4>
            <p>ARS {precio}</p>
            <Link to={`/productos/${id}`} className="btn">VER DETALLES</Link>
        </div>
    );
}

export default ProductCard;