import React from "react";
import img from "../images/allstars.jpg";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const shows = props.data;

  return (
    // <div className="flex gap-4 flex-row  w-[300px]">
    //   <div className="flex flex-row">
    //   <img src={shows.show.image?.medium} alt="Image not found" />
    //   </div>

    //   </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-10">
      {shows.map((show) => (
        <div
          key={show.show.id}
          className="w-[200px] md:w-[250px] rounded-lg p-3 relative"
        >
          <img
            src={show.show.image?.medium || img}
            alt="Image not found"
            className="w-full h-auto rounded-lg hover:scale-105 duration-300"
          />
          <h1 className="font-bold text-[20px] md:text-[15px]">{show.show.name}</h1>
          <p>{show.show.genres}</p>

          <p className="absolute right-0 bottom-[80px]">
            Rating: {show.show.rating.average || 0}
          </p>

         <Link to={`/show/${show.show.id}`}>
         <button className="w-full text-white bg-black mt-3 p-2 rounded-lg font-medium shadow-sm shadow-white">View Details</button>
         </Link>
           
          
        </div>
      ))}

      {}
    </div>
  );
};

export default Cards;
