import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col font-geist">
            <Header />
            <main className="flex-grow">
                {/* Nested route content renders here */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
