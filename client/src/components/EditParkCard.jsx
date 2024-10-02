import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditParkCard = (props) => {

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const [values, SetValues] = useState({
        user_id: currentUser.user_id,
        bookmark_park_id: props.id,
        bookmarked: props.bookmarked,
      });
    

    const handleDelete = async () => {
        // SetClicked((prevClicked) => !prevClicked);
        try {
          await axios.delete(
            `http://localhost:3000/bookmarks/${props.id}/${currentUser.user_id}`,
            values
          );
          navigate(`/myparks/${currentUser.user_id}`)
        } catch (error) {
          console.log(error);
        }
      };

      const handleMarkVisited = async () => {
        alert("Marked!");
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

                <div className="flex">
                  <button
                    className="hover:bg-red-400 font-bold hover:text-black px-2 py-3 my-2 
            rounded-md bg-red-500 cursor-pointer text-white 
            transition border-2 border-brown duration-200 ml-4"
                    onClick={handleDelete}
                  >
                    Delete!
                  </button>
    
                  <button
                    className="font-bold hover:text-yellow-600 px-2 py-3 my-2 
    rounded-md bg-black cursor-pointer text-white 
    transition border-2 border-brown duration-200 ml-4"
                    onClick={handleMarkVisited}
                  >
                    <Link to={`/edit/${props.park}/${currentUser.user_id}`}>Park Visited!</Link>
                  </button>
                </div>

            </div>
          </div>
        </div>
      );
    };
    
    EditParkCard.propTypes = {
      state: PropTypes.string,
      park: PropTypes.string,
      img: PropTypes.any,
      id: PropTypes.number,
      bookmarked: PropTypes.number,
    };  

export default EditParkCard