// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './card.css'; 

export const Card = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('data.json')
      .then(response => {
        setHotels(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {hotels.map((country, countryIndex) => (
        <div key={countryIndex} className="w-full md:w-1/2 lg:w-1/4 p-2">
          {country.hotels.map((hotel, hotelIndex) => (
            <div 
              className="card-container" 
              key={hotelIndex} 
              onClick={() => handleCardClick(hotel.id)}
            >
              <article
                className="card"
                style={{
                  backgroundImage: `url(${hotel.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
               
                <h3 className="card-title"></h3>
                <div className="card-description">
                 
                </div>
              </article>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
