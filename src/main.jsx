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
import CataloguePage from './Pages/CataloguePage';


const Layout = () => (
  <div className="font-sans bg-white text-primary mt-[8vh]">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const HomePage = () => (
  <div className='my-12'>
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
      { path: "products", element: <ProductPage /> },
      { path: "catalogues", element: <CataloguePage /> },
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