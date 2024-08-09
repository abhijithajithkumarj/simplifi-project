// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./card.css";

export const Card = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        console.log(response.data);
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  const scrollLeft = () => {
    document.getElementById("carousel").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("carousel").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full p-4 relative">
      <button className="scroll-button left-0" onClick={scrollLeft}>
        &lt;
      </button>
      <div id="carousel" className="carousel-container">
        {hotels.map((country, countryIndex) => (
          <div key={countryIndex} className="carousel-slide">
            {country.hotels.map((hotel, hotelIndex) => (
              <div
                className="card-container flex justify-start"
                key={hotelIndex}
                onClick={() => handleCardClick(hotel.id)}
              >
                <article
                  className="card"
                  style={{
                    backgroundImage: `url(${hotel.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="card-description1 mb-12 ml-1">
                    {hotel.hotelName}
                  </div>

                  <div className="card-description flex  ml-1">
                    <p className="flex gap-5">
                      <i className="fa-solid fa-star text-yellow-600 mt-1"></i>
                      {hotel.rating}
                    </p>
                  </div>
                  <div className="card-heart">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="scroll-button right-0" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};
