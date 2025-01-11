import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages 
import { HomeLayout, Landing, About, Products, SingleProduct, Cart, NotFound } from './pages/index';

// loaders
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
