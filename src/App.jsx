import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Explore } from "./Components/explor/Explore";
import { Home } from "./Components/home/Home";
import { Card } from "./Components/card/Card";
import { Nav } from "./Components/nav/Nav";
import { Category } from "./Components/category/Category";
import { Header } from "./Components/header/Header";
import { Details } from "./Components/details/Details";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="card" element={<Card/>}/>
          <Route path="nave" element={<Nav/>}/>
          <Route path="category" element={<Category/>}/>
          <Route path="header" element={<Header/>}/>
          <Route path="details" element={<Details/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
