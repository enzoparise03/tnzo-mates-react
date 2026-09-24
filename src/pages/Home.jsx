import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Card from '../components/Card';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Beneficios from '../components/Beneficios';

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <span className="hero-label">— LA CULTURA EN UN MATE</span>
                    <h1>TNZO<br />MATES & CROCHET</h1>
                    <span className="hero-divider">❧ ─ ❧</span>
                    <p>Mates artesanales y crochet de calidad garantizada.</p>
                    <Link to="/productos" className="btn-hero">
                        VER PRODUCTOS <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            <section className="seccion-tarjetas">
                <span className="span-categoria">— Elegí tu producto favorito —</span>
                <h2 className="h2-categoria">Productos Destacados</h2>

                <div className="grid-categorias">
                    <Card
                        imagen="/assets/Imperial labrado base de alpaca.jpg"
                        titulo="IMPERIALES"
                        texto="Mates con virola de alpaca cincelada y cuero crudo premium para el mejor cebador."
                        link="/productos/categoria/imperiales"
                    />
                    <Card
                        imagen="/assets/Torpedo Premium.jpg"
                        titulo="TORPEDOS"
                        texto="Mates uruguayos clásicos de calabaza gruesa, ideales para conservar la temperatura."
                        link="/productos/categoria/torpedos"
                    />
                    <Card
                        imagen="/assets/Camionero de calabaza.jpg"
                        titulo="CAMIONEROS"
                        texto="De boca ancha y base firme. La opción preferida para viajes largos y rutas."
                        link="/productos/categoria/camioneros"
                    />
                    <Card
                        imagen="/assets/bolsoFiesta.jpg"
                        titulo="CROCHET"
                        texto="Fundas y accesorios tejidos a mano con hilo de primera calidad y diseños únicos."
                        link="/productos/categoria/crochet"
                    />
                    <Card
                        imagen="/assets/Bombillon premium.jpg"
                        titulo="BOMBILLAS"
                        texto="Bombillas y bombillones cincelados y lisos."
                        link="/productos/categoria/bombillas"
                    />
                </div>
            </section>

            <Beneficios />
            <Gallery />
            <Contact />
        </>
    );
}

export default Home;