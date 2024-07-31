import React from "react";

export const Details = () => {
  return (
    <div className="p-4 flex flex-col h-screen lg:flex-row">
      <div className="flex-grow">
        <div
          className="card bg-white shadow-lg rounded-lg overflow-hidden relative h-[25rem] w-full"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/45/aa/fd/45aafdd9393230803a6abfccd30b6c74.jpg')",
            backgroundSize: 'cover', // Ensure background covers the card
            backgroundPosition: 'center' // Center the background image
          }}
        >
          <div className="Arrow flex absolute top-4 left-4">
            <button className="likes text-white p-2 rounded-lg flex items-center bg-blue-500">
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </button>
          </div>
          <div className="button-grp flex justify-end space-x-2 absolute right-4 bottom-4 z-50">
            <button className="likes text-white p-2 rounded-lg flex items-center bg-blue-500">
              <i className="fa-solid fa-heart text-6xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 lg:mt-0">
        <p>500</p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Blue
        </button>
      </div>
    </div>
  );
};
