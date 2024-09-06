import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleParkDetails from "../components/SingleParkDetails";

const SingleParkPage = () => {
  const params = useParams();

  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchAllParks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/parks/${params.park.toString()}`
        );
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllParks();
  }, [params.park]);

  const parkCards = parks.map((parks) => {
    return (
      <SingleParkDetails key={parks.id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} />
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        {params.park}
      </h1>
      <div>
        {parkCards}
      </div>
    </div>
  );
};

export default SingleParkPage;
