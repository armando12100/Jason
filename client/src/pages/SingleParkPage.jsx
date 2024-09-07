import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleParkDetails from "../components/SingleParkDetails";

const SingleParkPage = () => {
  const params = useParams();

  const [parks, setParks] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const fetchPark = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/parks/${params.state.toString()}/${params.park.toString()}`
=======
    const fetchAllParks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/parks/${params.park.toString()}`
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
        );
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
<<<<<<< HEAD
    fetchPark();
  }, [params.state, params.park]);

  const parkCard = parks.map((parks) => {
    return (
      <SingleParkDetails key={parks.id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} description={parks.park_description}
      directions={parks.park_maps_directions} />
=======
    fetchAllParks();
  }, [params.park]);

  const parkCards = parks.map((parks) => {
    return (
      <SingleParkDetails key={parks.id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} />
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        {params.park}
      </h1>
      <div>
<<<<<<< HEAD
        {parkCard}
=======
        {parkCards}
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
      </div>
    </div>
  );
};

export default SingleParkPage;
