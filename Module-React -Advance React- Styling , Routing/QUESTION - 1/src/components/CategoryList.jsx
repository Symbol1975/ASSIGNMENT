// src/components/CategoryList.js
import React from 'react';
import CategoryCard from './CategoryCard';
import './Category.css';

const categories = [
  { image: '/images/red-apple.png', title: 'Red Apple', itemCount: 26 },
  { image: '/images/snack.png', title: 'Snack', itemCount: 26 },
  { image: '/images/vegetables.png', title: 'Vegetables', itemCount: 26 },
  { image: '/images/strawberry.png', title: 'Strawberry', itemCount: 26 },
  { image: '/images/black-plum.png', title: 'Black Plum', itemCount: 26 },
  { image: '/images/custard-apple.png', title: 'Custard Apple', itemCount: 26 },
  { image: '/images/black-barry.png', title: 'black-barry', itemCount: 26 },
  { image: '/images/burger.png', title: 'burger', itemCount: 26 },
  { image: '/images/peach.png', title: 'peach', itemCount: 26 },
  { image: '/images/organic-kiwi.png', title: 'Organic Kiwi', itemCount: 26 },
];

const CategoryList = () => {
  return (
    <div className="category-list-container">
      <h2 className="category-heading">Featured Categories</h2>
      <div className="category-links">
        <a href="#">Cake & Milk</a>
        <a href="#">Coffees & Teas</a>
        <a href="#">Pet Foods</a>
        <a href="#">Vegetables</a>
      </div>

      <div className="category-cards">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            itemCount={category.itemCount}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
