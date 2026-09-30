import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollToHash from '../hooks/useScrollToHash';

// Molde que envuelve todas las páginas: Navbar y Footer fijos, el contenido cambia en el medio
function Layout() {
    useScrollToHash();  // hace scroll suave al #contacto cuando corresponde

    return (
        <>
            <Navbar />
            <main>
                {/*Oultlet muestra el componente correspondiente a la ruta que el usuario este visitando*/}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;