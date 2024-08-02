// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

export const Explore = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/home");
  };

  return (
    <div
      className="bg-black bg-opacity-50 flex flex-col justify-between h-screen "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/ec/9b/fd/ec9bfd8ce5863b01ecdfc07a827137ec.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-start p-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white mt-16 uppercase"
          style={{ fontFamily: '"Great Vibes", cursive' }}
        >
          A S P E N
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center p-4 mb-5">
        <div className="explore  flex flex-col justify-between ">
          <div className="title">
            <p className=" text-white  text-xl  md:text-1xl  lg:text-4xl font-light md:font-normal lg:font-semibold  gap-2">
              Plan your
            </p>
            <p className=" text-white  text-2xl  md:text-2xl  lg:text-6xl font-bold">
              Luxurious
            </p>
            <p className=" text-white  text-2xl  md:text-2xl  lg:text-6xl font-bold">
              Vacation
            </p>
          </div>

          <button
            onClick={handleExploreClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  sm:w-72 w-64 md:w-80 lg:w-96 mt-4"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};
