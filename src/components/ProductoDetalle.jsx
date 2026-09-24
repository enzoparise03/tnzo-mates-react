import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos';
import Beneficios from './Beneficios';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === id);
    const [cantidad, setCantidad] = useState(1);

    if (!producto) {
        return (
            <div className="container main-content">
                <p>No encontramos ese producto.</p>
                <Link to="/productos">Volver al catálogo</Link>
            </div>
        );
    }

    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const sumarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    return (
        <>
            <div className="container main-content">
                <div className="product-layout">
                    <div className="col-left">
                        <div className="main-image">
                            <img src={producto.imagen} alt={producto.nombre} />
                        </div>
                    </div>

                    <div className="col-right">
                        <div className="product-headers">
                            <span className="brand">TNZO</span>
                            <h1>{producto.nombre}</h1>
                        </div>

                        <div className="price-box">
                            <p className="price">${producto.precio.toLocaleString('es-AR')}</p>
                            <p className="cuotas">{producto.cuotas}</p>
                        </div>

                        <ul className="specs">
                            {producto.specs.map((spec) => (
                                <li key={spec.label}>
                                    <strong>{spec.label}:</strong> {spec.valor}
                                </li>
                            ))}
                        </ul>

                        <div className="purchase-area">
                            <div className="quantity-row">
                                <span>Cantidad:</span>
                                <div className="quantity-controls">
                                    <button onClick={restarCantidad}>-</button>
                                    <input type="text" value={cantidad} readOnly />
                                    <button onClick={sumarCantidad}>+</button>
                                </div>
                            </div>

                            <button className="btn-add">AGREGAR AL CARRITO</button>
                            <button className="btn-buy">COMPRAR AHORA</button>
                        </div>

                        <div className="shipping">
                            <p>🚚 Envío gratis a todo el país</p>
                        </div>
                    </div>
                </div>
            </div>

            <Beneficios variante="prod" />
        </>
    );
}

export default ProductoDetalle;