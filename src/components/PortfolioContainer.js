import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import NavBar from './NavBar';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState("Home");
  
    const handlePageChange = page => {
      setCurrentPage(page);
    };

    const renderPage = () => {
        if (currentPage === "Home") {
          return <Home handlePageChange={handlePageChange} />;
        }
        if (currentPage === "AboutMe") {
          return <AboutMe handlePageChange={handlePageChange} />;
        }
        if (currentPage === "Work") {
          return <Work />;
        }
        return <Contact />;
      };
    
      return (
        <>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </>
      );
};

export default PortfolioContainer;