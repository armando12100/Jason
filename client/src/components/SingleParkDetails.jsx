<<<<<<< HEAD
import PropTypes from "prop-types";

const SingleParkDetails = (props) => {
  return (
    <div className="text-black">
      <h1>{props.park}</h1>
      <div>
        <p>{props.description}</p>
        <p>{props.directions}</p>
      </div>
    </div>
  )
}

SingleParkDetails.propTypes = {
  park: PropTypes.string,
  img: PropTypes.any,
  state: PropTypes.string,
  description: PropTypes.string,
  directions: PropTypes.string
};

=======

const SingleParkDetails = () => {
  return (
    <div>SingleParkDetails</div>
  )
}

>>>>>>> d4925aacea75aee7a3a31818ec9f8bfa656271ed
export default SingleParkDetails