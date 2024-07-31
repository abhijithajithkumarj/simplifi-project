import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Explore } from "./Components/explor/Explore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
