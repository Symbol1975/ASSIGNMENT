// src/components/MainNav.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const MainNav = () => {
  return (
    <div className="main-nav">
      <img src="/logo.png" alt="Nest" className="logo" />
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      
      <div className="support-number">
        <span>Need help? Call Us: <strong>1900-888</strong></span>
      </div>
    </div>
  );
};

export default MainNav;
