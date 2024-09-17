import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleParkDetails = (props) => {
  return (
    <div className="text-black">
      <div className="flex">
        <div className=" w-1/2 mt-5 flex flex-col justify-center items-center">
          <img src={props.img} alt="" className=" w-10/12 h-72" />

          <div  className="flex">
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
    </div>
  );
};

SingleParkDetails.propTypes = {
  park: PropTypes.string,
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
