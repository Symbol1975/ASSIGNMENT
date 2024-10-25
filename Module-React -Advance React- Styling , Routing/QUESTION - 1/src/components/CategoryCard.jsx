// src/components/CategoryCard.js
import React from 'react';
import './Category.css';

const CategoryCard = ({ image, title, itemCount }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      <h3>{title}</h3>
      <p>{itemCount} items</p>
    </div>
  );
};

export default CategoryCard;
