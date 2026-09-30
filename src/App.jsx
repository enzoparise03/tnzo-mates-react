import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';


// Mapa de todas las rutas de la app. Todo vive adentro de Layout (Navbar/Footer fijos)
//cada "children" se dibuja en el <Outlet /> de Layout según la URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "productos", element: <Productos /> },
      { path: "productos/categoria/:categoria", element: <Productos /> },
      { path: "productos/:id", element: <ProductoDetalle /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;