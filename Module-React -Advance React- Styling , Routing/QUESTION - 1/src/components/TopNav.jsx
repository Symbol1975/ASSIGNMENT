// src/components/TopNav.js
import React from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaExchangeAlt } from 'react-icons/fa';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="location-dropdown">
        <select>
          <option>Your Location</option>
        </select>
      </div>
      <div className="top-nav-icons">
        <span><FaExchangeAlt /> Compare</span>
        <span><FaHeart /> Wishlist</span>
        <span><FaShoppingCart /> Cart</span>
        <span><FaUser /> Account</span>
      </div>
    </div>
  );
};

export default TopNav;
