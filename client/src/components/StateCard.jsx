import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StateCard = (props) => {

  return (
    <>
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
            className="object-cover h-52 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center pt-1 pl-6 pr-2">
            <p className="px-4 pb-4 font-bold italic text-black">
              Number of Parks: {props.numParks}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link to={`/parks/${props.state}`}>
              <button
                className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition border-2 hover:border-zinc-400 duration-200"
                // onClick={GetInfo}s
              >
                Get Park Info!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

StateCard.propTypes = {
  img: PropTypes.any,
  state: PropTypes.string,
  numParks: PropTypes.number,
};

export default StateCard;
