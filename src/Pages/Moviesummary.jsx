import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formcomponent from "../components/Formcomponent";
const Moviesummary = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [TicketConfirmed, setTicketConfirmed] = useState(false);
  

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShowDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching show details:", error);
        setLoading(false);
      }
    };
    setLoading(true);
    fetchShowDetails();
  }, [id]);

  const toggleform = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleConfirmBooking = () => {
    setTicketConfirmed(true);
  };
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 w-full h-screen text-white flex justify-center items-center">
      {loading ? (
        <p className="flex items-center justify-center text-white font-bold">
          Loading...
        </p>
      ) : (
        <div className="max-w-5xl flex flex-col items-center md:flex-row">
          <img
            src={showDetails.image?.medium}
            alt=""
            className="w-[350px] rounded-lg mx-auto"
          />
          <div className="w-full md:w-1/2 px-8">
            <div className="font-bold text-4xl mb-5">{showDetails.name}</div>
            {showDetails.summary}
            {isFormVisible && 
            <Formcomponent name={showDetails.name} language={showDetails.language} date={showDetails.premiered} />
            
            }


            
            <button
              className="w-full text-white bg-black p-2 rounded-lg font-medium shadow-sm shadow-white mt-5"
              onClick={toggleform}
            >
              Book now
            </button>

            {isFormVisible && 
            <button className="w-full text-white bg-black p-2 rounded-lg font-medium shadow-sm shadow-white mt-5 " onClick={handleConfirmBooking}>Confirm your booking</button>
            }

{TicketConfirmed && 
            <p className="text-green-500 mx-auto mt-2 font-bold">Your ticket is confirmed! ✔️ Enjoy the show!</p>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Moviesummary;
