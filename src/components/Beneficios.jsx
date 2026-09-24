import '../styles/Beneficios.css';

function Beneficios({ variante = "home" }) {
    const claseSeccion = variante === "prod" ? "beneficios-prod" : "beneficios";
    const claseItem = variante === "prod" ? "beneficio-item-prod" : "beneficio-item";

    return (
        <section className={claseSeccion}>
            <div className={claseItem}>
                <img src="/assets/icono-envios.png" alt="Envíos a todo el país" className="beneficio-icono" />
                <div className="beneficio-texto">
                    <h4>Envíos a todo el país</h4>
                    <p>Llegamos a donde estés, con embalaje seguro.</p>
                </div>
            </div>

            <div className={claseItem}>
                <img src="/assets/icono-compra-segura.png" alt="Compra segura" className="beneficio-icono" />
                <div className="beneficio-texto">
                    <h4>Compra segura</h4>
                    <p>Protegemos tus datos para que compres con confianza.</p>
                </div>
            </div>

            <div className={claseItem}>
                <img src="/assets/icono-calidad.png" alt="Calidad garantizada" className="beneficio-icono" />
                <div className="beneficio-texto">
                    <h4>Calidad garantizada</h4>
                    <p>Trabajamos con materiales seleccionados.</p>
                </div>
            </div>
        </section>
    );
}

export default Beneficios;