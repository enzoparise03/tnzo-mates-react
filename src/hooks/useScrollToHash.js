import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hace scroll automático a una sección cuando la URL tiene un #
// React Router no lo hace solo, a diferencia del HTML tradicional
function useScrollToHash() {
    const { hash } = useLocation(); // parte de la URL después del #

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Sin hash: al cambiar de página, arrancar siempre arriba
            window.scrollTo(0, 0);
        }
    }, [hash]);
}

export default useScrollToHash;