import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <div className="headerParent mt-4 p-2 flex justify-between items-center relative">
          <div className="headerChild flex justify-between items-center w-full">
            <p className="mt-2">
              Explore
              <br />
              <span className="text-3xl font-bold">Aspen</span>
            </p>

            <div className="flex items-center ">
              <i className="fa-solid fa-location-dot mt-5 mr-2 text-2xl text-blue-800"></i>
              <form className="ml-2">
                <select
                  id="countries"
                  className="bg-gray-50 bg-opacity-80 border text-sm rounded-lg block lg:p-2.5 dark:bg-opacity-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black0 sm:w-50 md:w-50 lg:w-60 w-[77px] mt-4 text-black appearance-auto pt-1 pb-3"
                >
                  <option selected>Aspen,USA </option>
                  <option value="CA"> Canada</option>
                  <option value="FR">  France</option>
                  <option value="DE">  Germany</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
