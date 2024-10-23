import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';

import Header from './Components/Header';
import Hero from './Components/Hero';
import ProductCategories from './Components/ProductCategories';
import About from './Components/About';
import Footer from './Components/Footer';
import ProductPage from './Pages/ProductPage';

// New components for product and catalogue pages
// const ProductPage = ({ category }) => <div>Product Page for {category}</div>;
const CataloguePage = ({ year }) => <div>E-Catalogue for {year}</div>;

const Layout = () => (
  <div className="font-sans bg-bg text-primary">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <ProductCategories />
    <About />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "products/floor-tiles", element: <ProductPage category="Floor Tiles" /> },
      // { path: "products/wall-tiles", element: <ProductPage category="Wall Tiles" /> },
      // { path: "products/bathroom-tiles", element: <ProductPage category="Bathroom Tiles" /> },
      { path: "products", element: <ProductPage /> },
      { path: "catalogues/2023", element: <CataloguePage year="2023" /> },
      { path: "catalogues/2022", element: <CataloguePage year="2022" /> },
      { path: "catalogues/2021", element: <CataloguePage year="2021" /> },
      { path: "visualizer", element: <div>Visualizer Page</div> },
      { path: "where-to-buy", element: <div>Where to Buy Page</div> },
      { path: "about", element: <About /> },
      { path: "contact", element: <div>Contact Us Page</div> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);