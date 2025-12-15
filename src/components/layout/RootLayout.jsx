import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../ScrollToTop";

function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col font-geist">
            <ScrollToTop />  {/*  Scrolls to top on every route change */}

            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
