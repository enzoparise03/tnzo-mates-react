import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const elemento = document.getElementById(id);
            if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);
}

export default useScrollToHash;