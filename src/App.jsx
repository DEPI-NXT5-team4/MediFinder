import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import CategoriesPage from './components/CategoriesPage/CategoriesPage'; 
import Explore from './components/Explore/Explore';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <CategoriesPage /> 
              </>
            } />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;