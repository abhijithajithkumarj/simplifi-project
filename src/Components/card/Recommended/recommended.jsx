// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Recommended.css";

export const Recommended = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/rec.json")
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
    document.getElementById("recommended-carousel").scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("recommended-carousel").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full p-4 relative">
      <button className="scroll-button left-0" onClick={scrollLeft}>
        &lt;
      </button>
      <div id="recommended-carousel" className="carousel-container">
        {hotels.map((country, countryIndex) => (
          <div key={countryIndex} className="carousel-slide">
            {country.hotels.map((hotel, hotelIndex) => (
              <div
                className="card-container1"
                key={hotelIndex}
                onClick={() => handleCardClick(hotel.id)}
              >
                <article className="card1">
                  <div
                    className="card-image1"
                    style={{
                      backgroundImage: `url(${hotel.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="card-description1 items-center flex ml-24 lg:ml-72">
                      <p className="flex gap-5 ml-5">2n/3d</p>
                    </div>
                  </div>
                  <div className="card-name1">{hotel.hotelName}</div>
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
