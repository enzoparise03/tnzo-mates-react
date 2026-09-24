import { Link } from 'react-router-dom';
import '../styles/Card.css';

function Card({ imagen, titulo, texto, link }) {
    return (
        <article className="card">
            <div className="img-container">
                <img src={imagen} alt={titulo} />
            </div>
            <h3>{titulo}</h3>
            <p>{texto}</p>
            <Link to={link} className="btn-card">VER MÁS</Link>
        </article>
    );
}

export default Card;