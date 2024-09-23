import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SingleParkCard = (props) => {
  const { currentUser } = useContext(AuthContext);

  const [bookmark, SetBookmark] = useState({
    user_id: null,
    park_id: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      SetBookmark({
        ...bookmark,
        user_id: currentUser.user_id,
        park_id: props.id,
      });
    } else {
      alert("not logged in!");
    }
  }, [bookmark]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/bookmarks", bookmark);
      console.log(bookmark);
      navigate(`/parks/${props.state}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 
      cursor-pointer pb-6 border-dashed border-2 border-brown"
    >
      <div
        className="flex flex-col justify-center items-center
            hover:scale-105 transition duration-200 pt-2"
      >
        <h1 className="text-center font-bold pb-4">{props.park}</h1>
        <img
          src={props.img}
          alt=""
          width={350}
          className="object-cover h-52 rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center pt-1 pl-6 pr-2"></div>
        <div className="flex justify-center items-center">
          <Link to={`/parks/${props.state}/${props.park}`}>
            <button
              className="hover:bg-orange-300 font-bold hover:text-black px-5 py-3 my-2 rounded-md
         bg-yellow-600 cursor-pointer text-orange-300 transition border-2 border-brown duration-200"
            >
              Get Park Info!
            </button>
          </Link>
          <button
            className="hover:bg-orange-300 font-bold hover:text-black px-5 py-3 my-2 
          rounded-md bg-yellow-600 cursor-pointer text-orange-300 
          transition border-2 border-brown duration-200 ml-4"
            onClick={handleSubmit}
          >
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

SingleParkCard.propTypes = {
  state: PropTypes.string,
  park: PropTypes.string,
  img: PropTypes.any,
  id: PropTypes.number,
};
export default SingleParkCard;
