// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Category.css'; 

export const Category = () => {
  const categories = ['Location', 'Hotel', 'Food', 'Adventure'];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
};
