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
import Offers from "./pages/Offers/Offers";
import Compare from "./pages/Compare/Compare";
import Nearby from "./pages/Nearby/Nearby";
import OrderTracking from './pages/OrderTracking/OrderTracking';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import MedicineDetails from './pages/MedicineDetails/MedicineDetails';
import Checkout from "./pages/Checkout/Checkout";
import FAQ from "./pages/FAQ/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import PainReliefFever from "./pages/PainReliefFever/PainReliefFever";
import Antibiotics from "./pages/Antibiotics/Antibiotics";
import RespiratoryHealth from "./pages/RespiratoryHealth/RespiratoryHealth";
import DiabetesCare from "./pages/DiabetesCare/DiabetesCare";
import DigestiveHealth from "./pages/DigestiveHealth/DigestiveHealth";
import HeartCholesterol from "./pages/HeartCholesterol/HeartCholesterol";
import { Toaster } from "react-hot-toast";
import SearchResults from "./pages/SearchResults/SearchResults";

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
      { path: "cart/checkout", element: <Checkout /> },
      { path: "offers", element: <Offers /> },
      { path: "compare", element: <Compare /> },
      { path: "nearby", element: <Nearby /> },
      { path: "OrderTracking", element: <OrderTracking /> },
      { path: "OrderHistory", element: <OrderHistory /> },
      { path: "medicine/:id", element: <MedicineDetails /> },
      { path: "faq", element: <FAQ /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-of-use", element: <TermsOfUse /> },
      { path: "categories/pain-relief-fever", element: <PainReliefFever /> },
      { path: "categories/antibiotics", element: <Antibiotics /> },
      { path: "categories/respiratory-health", element: <RespiratoryHealth /> },
      { path: "categories/diabetes-care", element: <DiabetesCare /> },
      { path: "categories/digestive-health", element: <DigestiveHealth /> },
      { path: "categories/heart-cholesterol", element: <HeartCholesterol /> },
      { path: "search/:term", element: < SearchResults />},
      { path: "*", element: <div>Page not found</div> },
    ],
  },
]);

function App() {
  return (
    <FavProvider>
      <Toaster />
      <RouterProvider router={router} />
    </FavProvider>
  );
}

export default App;
