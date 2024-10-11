import PropTypes from "prop-types";

const ReviewCard = (props) => {
  return (
    <div>
        <div>
        <h1>ReviewCard</h1>
        </div>
        <div>
            {props.content}
        </div>
    </div>
  )
};

ReviewCard.propTypes = {
    content: PropTypes.string
  };

export default ReviewCard