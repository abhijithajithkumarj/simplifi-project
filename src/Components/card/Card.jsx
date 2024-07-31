import React from 'react';
import './card.css'; // Import the CSS file

export const Card = () => {
  return (
    <div className="card-container">
      <article className="card">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt="University of Southern California"
        />
        <div className="card-overlay"></div>
        <h3 className="card-title">Paris</h3>
        <div className="card-description">
          City of love
        </div>
      </article>
    </div>
  );
};
