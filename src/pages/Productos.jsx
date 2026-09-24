import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';
import ProductCard from '../components/ProductCard';
import '../styles/Productos.css';

const categorias = [
    { id: "imperiales", nombre: "Imperiales" },
    { id: "torpedos", nombre: "Torpedos" },
    { id: "camioneros", nombre: "Camioneros" },
    { id: "bombillas", nombre: "Bombillas y bombillones" },
    { id: "termosYCanastas", nombre: "Termos y Canastas" },
    { id: "crochet", nombre: "Crochet" },
];

const materiales = [
    { id: "calabaza", nombre: "Calabaza" },
    { id: "algarrobo", nombre: "Algarrobo" },
];

function Productos() {
    const { categoria: categoriaDeLaUrl } = useParams();
    const [categoriaActiva, setCategoriaActiva] = useState(categoriaDeLaUrl || null);
    const [materialActivo, setMaterialActivo] = useState(null);

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