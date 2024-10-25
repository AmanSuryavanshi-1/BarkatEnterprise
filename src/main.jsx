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
import Contact from './Pages/Contact';
import WhereToBuy from './Pages/WhereToBuy';

// New components for product and catalogue pages
const CataloguePage = ({ year }) => <div>E-Catalogue for {year}</div>;

const Layout = () => (
  <div className="font-sans bg-white text-primary mt-[8vh]">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const HomePage = () => (
  <div className='mt-[8vh]'>
    <Hero />
    <ProductCategories />
    <About />
  </div>
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
      { path: "where-to-buy", element: <WhereToBuy/> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);