// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Details.css'

export const Details = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
  
        const dataResponse = await axios.get('/data.json');
        const allHotelsData = dataResponse.data.flatMap(country => country.hotels);
        let selectedHotel = allHotelsData.find(hotel => hotel.id === id);
  
   
        if (!selectedHotel) {
          const recResponse = await axios.get('/rec.json');
          const allHotelsRec = recResponse.data.flatMap(country => country.hotels);
          selectedHotel = allHotelsRec.find(hotel => hotel.id === id);
        }
  
        setHotel(selectedHotel);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchHotelData();
  }, [id]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="hidden lg:flex lg:w-1/5 bg-white shadow-lg p-4"></div>

      <div className="flex flex-col lg:w-3/5 w-full bg-white p-4 shadow-lg">
        <div
          className=" bg-white shadow-lg rounded-lg overflow-hidden relative h-[25rem] w-full mb-8"
          style={{
            backgroundImage: `url(${hotel.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Link to="/home" className="Arrow flex absolute top-4 left-4">
            <button className="text-white p-2 rounded-lg flex items-center bg-white w-11 h-15 justify-center">
              <i className="fa-solid fa-arrow-left text-xl text-black"></i>
            </button>
          </Link>
          <div className="button-grp flex justify-end space-x-2 absolute right-4 bottom-4 z-50 mr-5">
            <button className="likes border border-gray-300 rounded-full bg-white   p-2 flex items-center">
              <i className="fa-solid fa-heart text-4xl text-red-500"></i>
            </button>
          </div>
        </div>

        <div className="second-child mb-4">
          <div className="title-and-map flex justify-between items-center">
            <p className="text-3xl font-bold">{hotel.hotelName}</p>
            <p className="text-xl text-blue-600 font-bold">Show map</p>
          </div>
        </div>

        <div className="ratting-description flex flex-col mb-8">
          <div className="flex items-center mb-3">
            <i className="fa-solid fa-star text-yellow-600"></i>
            <p className="ml-2">{hotel.rating} (355 Reviews)</p>
          </div>

          <p>{hotel.description}</p>

          <div>
            <select
              id="countries"
              className="bg-gray-50 bg-opacity-80 text-sm rounded-lg block p-2.5 dark:bg-opacity-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black sm:w-50 w-28 md:w-50 lg:w-60 mt-4 text-blue-600 appearance-auto"
            >
              <option selected>Read more</option>
            </select>
          </div>

          <p className="text-3xl font-bold mt-3">Facilities</p>

          <div className="flex flex-wrap justify-around gap-4 mt-5">
            <div className="facility-icon border bg-black bg-opacity-10  rounded-lg w-20 h-20 flex items-center justify-center ">
              <p className="flex flex-col justify-items-center items-center">
                <p>
                  <i className="fa-solid fa-wifi text-xl text-black"></i>
                </p>
                wif
              </p>
            </div>
            <div className="facility-icon border bg-black bg-opacity-10 rounded-lg  w-20 h-20  flex items-center justify-center">
              <p className="flex flex-col justify-items-center items-center">
                <p>
                  <i className="fa-solid fa-utensils text-xl text-black"></i>
                </p>
                Dinner
              </p>
            </div>
            <div className="facility-icon border bg-black bg-opacity-10 rounded-lg  w-20 h-20  flex items-center justify-center">
              <p className="flex flex-col justify-items-center items-center">
                <p>
                  <i className="fa-solid fa-bath  text-xl text-black"></i>
                </p>
                1 Tub
              </p>
            </div>
            <div className="facility-icon border bg-black bg-opacity-10  rounded-lg  w-20 h-20  flex items-center justify-center">
              <p className="flex flex-col justify-items-center items-center ">
                <p>
                  <i className="fa-solid fa-water-ladder  text-xl text-black"></i>
                </p>
                Pool
              </p>
            </div>
          </div>

          <div className="price-and-button flex justify-between items-center mt-3">
            <p className="font-bold">
              Price
              <br />
              <p className="text-2xl font-bold text-green-500">${hotel.oneDayRoomPrice}</p>
            </p>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center text-white font-bold sm:w-72 w-64 md:w-80 lg:w-96 mt-4 h-14"
            >
              Book Now{" "}
              <i className="fa-solid fa-arrow-right text-white ml-12"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/5 bg-white shadow-lg p-4">
        {/* Right sidebar content here */}
      </div>
    </div>
  );
};