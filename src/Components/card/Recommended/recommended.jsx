// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommended.css";


export const Recommended = () => {
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
        breakpoint: 344,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        {hotels.map((country, countryIndex) => (
          <div key={countryIndex} className="carousel">
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
                      <p className="flex gap-5 ml-5">
                       2n/3d
                      </p>
                    </div>
                  </div>
                  <div className="card-name1">{hotel.hotelName}</div>
                </article>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};
