import PropTypes from "prop-types";

const SingleParkDetails = (props) => {
  return (
    <div className="text-black">
      <h1>{props.park}</h1>
      <div>
        <p>{props.description}</p>
        <p>{props.directions}</p>
        <p>{props.state}</p>
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

export default SingleParkDetails