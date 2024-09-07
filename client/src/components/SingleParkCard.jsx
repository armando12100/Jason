import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SingleParkCard = (props) => {
  return (
<<<<<<< HEAD
    <div>
=======
    <>
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 
      cursor-pointer pb-6 border-dashed border-2 border-brown">
        <div
          className="flex flex-col justify-center items-center
        hover:scale-105 transition duration-200 pt-2"
        >
          <h1 className="text-center font-bold pb-4">{props.park}</h1>
          <img
            src={props.img}
            alt=""
            width={350}
            className="object-cover h-72 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center pt-1 pl-6 pr-2">
          </div>
          <div className="flex justify-center items-center">
          <Link to={`/parks/${props.state}/${props.park}`}>
            <button
              className="hover:bg-orange-300 font-bold hover:text-black px-5 py-3 my-2 rounded-md
         bg-yellow-600 cursor-pointer text-orange-300 transition border-2 border-brown duration-200"
            >
              Get Park Info!
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
   );
};

SingleParkCard.propTypes = {
  park: PropTypes.string,
  img: PropTypes.any,
<<<<<<< HEAD
  state: PropTypes.string,
=======
  state: PropTypes.string
>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
};
export default SingleParkCard