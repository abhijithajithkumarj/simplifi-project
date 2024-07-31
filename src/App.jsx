import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Explore } from "./Components/explor/Explore";
import { Home } from "./Components/home/Home";
import { Card } from "./Components/card/Card";
import { Nav } from "./Components/nav/Nav";
import { Category } from "./Components/category/Category";
import { Header } from "./Components/header/Header";

function App() {
  const [count, setCount] = useState(0);

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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
