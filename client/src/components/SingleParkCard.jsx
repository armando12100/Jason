import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const SingleParkCard = (props) => {
  return (
    <div>
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 
      cursor-pointer pb-6 border-dashed border-2 border-brown">
      <div className="justify-center my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-4 cursor-pointer pb-6">
        <div
          className="flex flex-col justify-center items-center
        hover:scale-105 transition duration-200 pt-2"
        >
          <h1 className="text-center font-bold pb-4">{props.state}</h1>
          <img
            src={props.img}
            alt=""
            width={350}
            className="object-cover h-72 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center pt-1 pl-6 pr-2">
          {/* <p className="px-4 pb-4 font-bold italic text-black">
            {props.location}
          </p> */}
          </div>
          <div className="flex justify-center items-center">
          <Link to={"/contact"}>
            <button
              className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
         hover:bg-transparent cursor-pointer hover:text-black transition border-2 hover:border-zinc-400 duration-200"
            >
              Get Park Info!
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
   );
};

SingleParkCard.propTypes = {
  park: PropTypes.string,
  img: PropTypes.any,
  state: PropTypes.string,
};
export default SingleParkCard