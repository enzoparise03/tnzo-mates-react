# TNZO Mates & Crochet — Migración a React

Trabajo Práctico Final — migración de un e-commerce propio, originalmente hecho en HTML y CSS estático, a una aplicación React componentizada con Vite y React Router.

🔗 **Demo en vivo:** https://tnzo-mates-react.vercel.app

## Tecnologías

- React
- Vite
- React Router v6
- CSS

## Funcionalidades

- Catálogo de productos con filtro por categoría y por material (combinables entre sí)
- Ficha de producto individual con ruta dinámica (`/productos/:id`)
- Formulario de contacto controlado con `useState` (captura de datos, validación, reseteo)
- Galería de fotos con vista ampliada (lightbox)
- Navegación con React Router (rutas anidadas mediante Layout + Outlet), con scroll automático al formulario de contacto mediante un Custom Hook
- Diseño responsive

## Cómo ejecutar el proyecto localmente

**Requisitos:** tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

1. Cloná el repositorio:
```bash
   git clone https://github.com/enzoparise03/tnzo-mates-react.git
```

2. Entrá a la carpeta del proyecto:
```bash
   cd tnzo-mates-react
```

3. Instalá las dependencias:
```bash
   npm install
```

4. Iniciá el servidor de desarrollo:
```bash
   npm run dev
```

5. Abrí el navegador en la dirección que te muestra la terminal (por defecto, [http://localhost:5173](http://localhost:5173)).

## Estructura del proyecto

```text
src/
├── components/     → Navbar, Footer, Layout, Card, ProductCard, Gallery, Contact, Beneficios
├── pages/          → Home, Productos, ProductoDetalle
├── data/           → productos.js (datos de los 18 productos)
├── styles/         → un archivo CSS por componente/página
├── hooks/          → useScrollToHash.js (scroll automático al navegar a #contacto)
└── main.jsx        → configuración de rutas (React Router)

public/
└── assets/         → imágenes del sitio
```

## Autor

Enzo Nicolás Parise — [GitHub](https://github.com/enzoparise03)