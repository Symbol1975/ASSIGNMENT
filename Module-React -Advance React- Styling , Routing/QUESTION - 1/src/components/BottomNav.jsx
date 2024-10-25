// src/components/Navbar.js
import React from 'react';
import { FaList } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="navbar-container">
      {/* Top Part: Categories and Hot Deals */}
      <div className="top-navbar">
        <button className="categories-btn">
          <FaList className="icon" /> Browse All Categories
        </button>
        <div className="hot-deals">
          <span>Hot Deals</span>
        </div>
        <div className="bottom-navbar">
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Vendors</li>
          <li>Mega Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        
      </div>

      <div className="support-number">
          <span>1900-888 24/7 Support Center</span>
        </div>
     
      
      </div>
    </div>
  );
};

export default BottomNav;
