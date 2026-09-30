import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';
import ProductCard from '../components/ProductCard';
import '../styles/Productos.css';

// Listas fijas para dibujar los botones del sidebar (id = valor real, nombre = texto visible)
const categorias = [
    { id: "imperiales", nombre: "Imperiales" },
    { id: "torpedos", nombre: "Torpedos" },
    { id: "camioneros", nombre: "Camioneros" },
    { id: "bombillas", nombre: "Bombillas y bombillones" },
    { id: "termosYCanastas", nombre: "Termos y Canastas" },
    { id: "crochet", nombre: "Crochet y Polipropileno" },

];

// Catálogo completo, con filtro por categoría y material (combinables entre sí)
const materiales = [
    { id: "calabaza", nombre: "Calabaza" },
    { id: "algarrobo", nombre: "Algarrobo" },
];

// Catálogo completo, con filtro por categoría y material (combinables entre sí)
function Productos() {
// Si se entra desde una tarjeta del Home, la categoría ya viene en la URL
    const { categoria: categoriaDeLaUrl } = useParams();
    const [categoriaActiva, setCategoriaActiva] = useState(categoriaDeLaUrl || null);
    const [materialActivo, setMaterialActivo] = useState(null);


    // Recorre los 18 productos y deja solo los que cumplen los filtros activos
    // Si un filtro está en null, esa condición se ignora 
    const productosFiltrados = productos.filter((producto) => {
        const pasaCategoria = !categoriaActiva || producto.categoria === categoriaActiva;
        const pasaMaterial = !materialActivo || producto.material === materialActivo;
        return pasaCategoria && pasaMaterial;
    });

    return (
        <section className="productos-page">
            <aside className="filtros">
                <h3>FILTROS</h3>
                <hr />

                <div className="filtro">
                    <p>CATEGORIAS</p>
                    <ul>
                        {/* Un botón por categoría, generado con .map() en vez de escribir los 6 a mano */}
                        {categorias.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    className={categoriaActiva === cat.id ? "filtro-activo" : ""}
                                    onClick={() => setCategoriaActiva(cat.id)}
                                >
                                    {cat.nombre}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />

                <div className="filtro">
                    <p>MATERIAL</p>
                    <ul>
                        {materiales.map((mat) => (
                            <li key={mat.id}>
                                <button
                                    className={materialActivo === mat.id ? "filtro-activo" : ""}
                                    onClick={() => setMaterialActivo(mat.id)}
                                >
                                    {mat.nombre}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr />
                
                {/* Solo aparece si hay algún filtro activo */}
                {(categoriaActiva || materialActivo) && (
                    <button className="btn-limpiar" onClick={() => { setCategoriaActiva(null); setMaterialActivo(null); }}>
                        Limpiar filtros
                    </button>
                )}
            </aside>

            <div className="productos-grid">
                {productosFiltrados.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        id={producto.id}
                        imagen={producto.imagen}
                        nombre={producto.nombre}
                        precio={producto.precio}
                    />
                ))}
            </div>
        </section>
    );
}

export default Productos;