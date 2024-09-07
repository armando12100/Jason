import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleParkCard from "../components/SingleParkCard"

const SingleParkInfo = () => {
  const params = useParams();
  
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchAllParks = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/parks/${params.state.toString()}`);
          setParks(res.data);
        } catch (error) {
          console.log(error);
        }
    };
    fetchAllParks();
  },[params.state] );

  const parkCards = parks.map((parks) => {
    return (
<<<<<<< HEAD
      <div key={parks.park_id}>
        <SingleParkCard key={parks.park_id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} />
      </div>
=======
      <SingleParkCard key={parks.id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} />
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-black pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        All National Parks in {params.state}
      </h1>
      <h3 className="text-gray-600 font-bold text-md pt-6 pl-3 italic">
        Our National Parks Include
      </h3>
      <div className="flex flex-wrap justify-center items-center pt-10">
        {parkCards}
      </div>
    </div>
  );
};

export default SingleParkInfo;
