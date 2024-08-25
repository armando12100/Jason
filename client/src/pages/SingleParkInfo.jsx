import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleParkInfo = () => {
  const params = useParams();

  console.log(params.state);
  
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
  }, );

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-black pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        All National Parks in {params.state}
      </h1>
      <h3 className="text-gray-600 font-bold text-md pt-6 pl-3 italic">
        Our National Parks Include
      </h3>
      <div className="flex flex-wrap justify-center items-center pt-10">
        {parks.map((park) => (
          <div key={park.id}>
            <h1 className="font-bold pr-4">{park.park_name}</h1>
            <div>
              <img src={park.img} alt="" width={350}
            className="object-cover h-52 rounded-lg"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleParkInfo;
