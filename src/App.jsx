import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import Explore from "./pages/Explore/Explore";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import FavProvider from "./context/FavProvider";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
      { path: "favorites", element: <Favorites /> },
      { path: "cart", element: <Cart /> },
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