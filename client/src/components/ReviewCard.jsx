import PropTypes from "prop-types";
import profile from "../images/people.png";

const ReviewCard = (props) => {

  return (
    <div className="mt-3 pl-2 py-5 shadow-xl">

      <div className="flex">
        <img src={profile} alt="" width={32} className="mr-3" />
        <h1 className="text-sm font-bold text-gray-500">{props.username}</h1>
      </div>

      <div className="flex mt-2">
        <h2 className="font-bold italic text-md">{props.title}</h2>
        <h2 className="ml-4">{props.rating}</h2>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-500">Reviewed on {props.timestamp}</h3>
      </div>

      <div className="mt-3">{props.content}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  username: PropTypes.string,
  rating: PropTypes.number,
  content: PropTypes.string,
  timestamp: PropTypes.any,
  title: PropTypes.string
};

export default ReviewCard;
