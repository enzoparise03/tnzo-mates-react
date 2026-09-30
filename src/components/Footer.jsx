import { Link } from 'react-router-dom';
import '../styles/Footer.css';

// Pie de página. se repite en todas las páginas
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <div className="footer-brand">
                    <h2>TNZO MATES</h2>
                    <p>& CROCHET</p>
                </div>

                <div className="footer-links">
                    {/* Interno: Link a form de contacto */}
                    <Link to="/#contacto">Contacto</Link>
                    {/* Externo: <a> hacia link externo de instagram */}
                    <a href="https://www.instagram.com/tnzo.mates/">Nosotros</a>
                </div>

                    {/* Iconos de redes sociales*/}
                <div className="footer-social">
                    <a href="https://wa.me/5491165366495"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/tnzo.mates/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/enzo.nicolas.parise/"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;