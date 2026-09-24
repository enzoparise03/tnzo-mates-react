import { useState } from 'react';
import '../styles/Gallery.css';

const fotos = [
    { src: "/assets/bolsoBoca.jpeg", alt: "Funda de crochet para termo" },
    { src: "/assets/bolsoFiesta.jpg", alt: "Posamate tejido a crochet" },
    { src: "/assets/bolsoFiestaB&N.jpeg", alt: "Bolso matero a crochet" },
    { src: "/assets/bolsoMediaManija.jpeg", alt: "Detalle de tejido crochet" },
    { src: "/assets/bolsoMarron.jpeg", alt: "Amigurumi matero" },
    { src: "/assets/BolsoRiver.jpeg", alt: "Funda para mate crochet" },
    { src: "/assets/Canasta1.jpeg", alt: "Artesanía en crochet 1" },
    { src: "/assets/CanastaMediana.jpg", alt: "Artesanía en crochet 2" },
];

function Gallery() {
    const [fotoActiva, setFotoActiva] = useState(null);

    return (
        <section className="galeria">
            <h2>Nuestros Trabajos en Crochet</h2>

            <div className="galeria-fotos">
                {fotos.map((foto) => (
                    <div
                        key={foto.src}
                        className="galeria-item"
                        onClick={() => setFotoActiva(foto)}
                    >
                        <img src={foto.src} alt={foto.alt} />
                        <div className="galeria-overlay">
                            <i className="fa-solid fa-magnifying-glass-plus"></i>
                            <span>{foto.alt}</span>
                        </div>
                    </div>
                ))}
            </div>

            {fotoActiva && (
                <div className="galeria-lightbox" onClick={() => setFotoActiva(null)}>
                    <button
                        className="galeria-cerrar"
                        onClick={() => setFotoActiva(null)}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <img src={fotoActiva.src} alt={fotoActiva.alt} />
                </div>
            )}
        </section>
    );
}

export default Gallery;