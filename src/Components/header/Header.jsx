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
              <p className="text-3xl font-bold">Aspen</p>
            </p>

            <div className="flex items-center ">
              <i className="fa-solid fa-location-dot mt-5 mr-2 text-2xl text-blue-800"></i>
              <form >
              
                <select
                  id="countries"
                  className="bg-gray-50 bg-opacity-80 border text-sm rounded-lg block p-2.5 dark:bg-opacity-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black0 sm:w-50 md:w-50 lg:w-60 w-[70px]  mt-4 text-black appearance-auto "
                >
                  <option selected>Aspen,USA </option>
                  <option value="CA"> Aspen Canada</option>
                  <option value="FR"> Aspen France</option>
                  <option value=" DE"> Aspen Germany</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
