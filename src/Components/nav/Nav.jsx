// eslint-disable-next-line no-unused-vars
import React from 'react';


export const Nav = () => {
  return (
    <div>

    
      <div className="fixed z-50 w-full  max-w-lg -translate-x-1/2 bg-slate-200 border  rounded-full bottom-0  left-1/2  h-14  lg:h-16">
      
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto"> 

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group">
          <i className="fa-solid fa-house-chimney  text-2xl opacity-85"></i>
            <span className="sr-only">Home</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group">
          <i className="fa-solid fa-ticket-simple  text-2xl  opacity-85"></i>
            <span className="sr-only">Home</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group">
          <i className="fa-solid fa-heart  text-2xl  opacity-85"></i>
            <span className="sr-only">Home</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full  group">
          <i className="fa-solid fa-user text-2xl  opacity-85"></i>
            <span className="sr-only">Home</span>
          </button>

       


        </div>
      </div>
    </div>
  );
};
