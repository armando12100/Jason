import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const SingleParkDetails = (props) => {

  const { currentUser } = useContext(AuthContext);

  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/comments/${currentUser.user_id}}`
        );
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPark();
  }, [currentUser.user_id]);

  const reviewCard = parks.map((parks) => {
    return (
      <div key={parks.park_id}>
        <ReviewCard id={parks.park_id} park={parks.park_name} rating={parks.park_rating} timestamp={parks.timestamp}
      img={parks.park_img} state={parks.state} bookmarked={parks.bookmarked} title={parks.title}
      address={parks.park_address} visited={parks.visited} content={parks.content} username={parks.username}/>
      </div>
    )
  });

  return (
    <div className="text-black">
      <div className="flex">
        <div className=" w-1/2 mt-5 flex flex-col justify-center items-center">
          <img src={props.img} alt="" className=" w-10/12 h-72" />

          <div className="flex">
            <Link to={props.directions} className="mr-8">
              <button
                className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition 
             border-2 hover:border-zinc-400 duration-200-8"
                // onClick={GetInfo}s
              >
                Get Park Directions!
              </button>
            </Link>

            <Link to={props.info}>
              <button
                className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition border-2 hover:border-zinc-400 duration-200"
                // onClick={GetInfo}s
              >
                Get Park Info!
              </button>
            </Link>
          </div>
          <div>
          <Link to={`/review/${props.state}/${props.park}/${props.id}/${currentUser.user_id}`}>
              <button
                className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition border-2 hover:border-zinc-400 duration-200"
                // onClick={GetInfo}s
              >
                Leave A Park Review!
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 justify-center items-center flex flex-col">
          <p className="w-5/6 font-sans italic">{props.description}</p>

          <div className="flex justify-evenly w-full mt-5">
            <div>
              <p>
                <span className="font-bold">Park Rating:</span> {props.rating}
              </p>
            </div>

            <div className="flex">
              <h1 className="font-bold pr-3">Address:</h1>
              <div>
                <p>{props.address}</p>
                <p>{props.address2}</p>
                <p>{props.address3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 ml-20">

        <div>
          <h1 className="font-bold text-xl">User Reviews Of Park</h1>
        </div>

        <div>
          {reviewCard}
        </div>

      </div>
    </div>
  );
};

SingleParkDetails.propTypes = {
  park: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.any,
  state: PropTypes.string,
  description: PropTypes.string,
  directions: PropTypes.string,
  rating: PropTypes.number,
  info: PropTypes.string,
  address: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
};

export default SingleParkDetails;
