import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-nav">
                <div className="footer-brand">
                    <h2>TNZO MATES</h2>
                    <p>& CROCHET</p>
                </div>

                <div className="footer-links">
                    <Link to="/#contacto">Contacto</Link>
                    <a href="https://www.instagram.com/tnzo.mates/">Nosotros</a>
                </div>

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