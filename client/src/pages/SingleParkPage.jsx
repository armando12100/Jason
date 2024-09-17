import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleParkDetails from "../components/SingleParkDetails";

const SingleParkPage = () => {
  const params = useParams();

  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/parks/${params.state.toString()}/${params.park.toString()}`
        );
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPark();
  }, [params.state, params.park]);

  const parkCard = parks.map((parks) => {
    return (
      <SingleParkDetails key={parks.id} park={parks.park_name} 
      img={parks.park_img} state={parks.state} description={parks.park_description}
      directions={parks.park_maps_directions} rating={parks.park_rating}
      info={parks.park_info_link} address={parks.park_address}
      address2={parks.park_address_2} address3={parks.park_address_3} />
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        {params.park}
      </h1>
      <div>
        {parkCard}
      </div>
    </div>
  );
};

export default SingleParkPage;