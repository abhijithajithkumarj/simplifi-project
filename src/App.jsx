// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Explore } from "./Components/explor/Explore";
import { Home } from "./Components/home/Home";
import { Details } from "./Components/details/Details";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="/details/:id" element={<Details />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
