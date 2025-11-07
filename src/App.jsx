import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import Explore from "./pages/Explore/Explore";
import FavProvider from "./context/FavProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //  shared header/footer
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <CategoriesPage />
          </>
        ),
      },
      { path: "explore", element: <Explore /> },
      { path: "*", element: <div>Page not found</div> },
    ],
  },
]);

function App() {
  return (
    <FavProvider>
      <RouterProvider router={router} />
    </FavProvider>
  );
}

export default App;
