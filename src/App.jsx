import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";

import { Route, Routes } from "react-router-dom";
import Moviesummary from "./Pages/Moviesummary";

function App() {
  const [show, setMovie] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const res = await data.json();
      setMovie(res);
    } catch {
      return console.log("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" bg-slate-800 my-5 w-full text-white">

<Routes>
    <Route path="/" element={<Cards data={show}  />} />
    <Route path="/show/:id" element={<Moviesummary />} />
</ Routes>


  
   

    </div>
  );
}

export default App;
