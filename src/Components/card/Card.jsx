// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";

export const Card = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        {hotels.map((country, countryIndex) => (
          <div key={countryIndex} className="carousel">
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
                    {" "}
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
      </Slider>
    </div>
  );
};
