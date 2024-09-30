import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const SingleParkCard = (props) => {
  const { currentUser } = useContext(AuthContext);

  const [values, SetValues] = useState({
    user_id: currentUser.user_id,
    bookmark_park_id: props.id,
    bookmarked: props.bookmarked,
  });

  console.log(values);

  const [clicked, SetClicked] = useState(false);

  const handleDelete = async () => {
    SetClicked((prevClicked) => !prevClicked);
    try {
      await axios.delete(
        `http://localhost:3000/bookmarks/${props.id}/${currentUser.user_id}`,
        values
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetClicked((prevClicked) => !prevClicked);
    try {
      console.log("bookmarking!");
      await axios.post("http://localhost:3000/bookmarks", values);
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
              className="hover:bg-orange-300 font-bold hover:text-black px-2 py-3 my-2 rounded-md
         bg-yellow-600 cursor-pointer text-orange-300 transition border-2 border-brown duration-200"
            >
              Park Info!
            </button>
          </Link>
          {props.bookmarked || clicked ? (
            <div className="flex">
              <button
                className="hover:bg-white font-bold hover:text-green-500 px-2 py-3 my-2 
        rounded-md bg-green-500 cursor-pointer text-white 
        transition border-2 border-brown duration-200 ml-4"
                onClick={handleSubmit}
              >
                Bookmarked!
              </button>

              <button
                className="font-bold hover:text-black px-2 py-3 my-2 
rounded-md bg-red-600 cursor-pointer text-white 
transition border-2 border-brown duration-200 ml-4"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : (
            <button
              className="hover:bg-orange-300 font-bold hover:text-black px-5 py-3 my-2 
            rounded-md bg-yellow-600 cursor-pointer text-orange-300 
            transition border-2 border-brown duration-200 ml-4"
              onClick={handleSubmit}
            >
              Bookmark
            </button>
          )}
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
  bookmarked: PropTypes.number,
};
export default SingleParkCard;
