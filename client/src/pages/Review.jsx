import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Review = () => {

  const [err, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const params = useParams();

  const [content, SetContent] = useState("");
  const [timestamp, SetTimestamp] = useState("2024-11-10");
  const [title, SetTitle] = useState("");
  const [rating, SetRating] = useState(null);
  const [rateColor, setRateColor] = useState(null);

  const [inputs, setInputs] = useState({
    comment_user_id: currentUser.user_id,
    comment_park_id: parseInt(params.parkid),
    content: content,
    timestamp: timestamp,
    title: title,
    rating: rating
  });

  const handleRatingChange = (e) => {
    console.log(rating);
    setInputs((prev) => ({ ...prev, rating: parseInt(e.target.value) }));
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/comments", inputs);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/parks/${params.state.toString()}/${params.park.toString()}`
        );
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPark();
  }, [params.state, params.park]);

  const parkImage = parks.map((parks) => {
    return (
      <div key={parks.park_id}>
        <img src={parks.park_img} alt="" className=""/>
      </div>
    )
  });


  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          <div className="font-bold text-black text-lg">Create Review</div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
      <div className=" w-1/2 mt-5 flex-col justify-center items-center">
        <h1 className="font-bold justify-center text-center pb-5">{params.park}</h1>
        {parkImage}
        </div>
      </div>

      <form action="" className="shadow-xl pb-16 bg-white">
        <div className="flex justify-center mt-10">
          <div className="w-1/2">
            <h1 className="mr-10 font-bold text-md">Rate Park</h1>
            <div className="flex pt-3">
              {[...Array(5)].map((star, index) => {
                const currentRate = index + 1
                return (
                  <div key={index}>
                    <label>
                      <input type="radio" name="rating"  className="hidden cursor-pointer"
                      value={currentRate}
                      onChange={handleRatingChange}
                      onClick={() => SetRating(currentRate)}/>
                      <FaStar color={ currentRate <= (rateColor || rating) ? "yellow" : "grey"}/>
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-1/2">
            <h1 className="mr-10 font-bold text-md">Add a Title</h1>
            <input
              type="text"
              name="title"
              placeholder="Title Review"
              onChange={handleChange}
              className=" shadow-md mt-2 pl-4"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-1/2">
            <h1 className="mr-10 font-bold text-md">Add a Written Review</h1>
            <h1 className="italic text-gray-500">Review Box</h1>
            <input
              type="text"
              name="content"
              placeholder="Write Review"
              onChange={handleChange}
              className=" shadow-md mt-2 pl-4"
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center my-5">
        <button
          className="hover:bg-orange-300 font-bold hover:text-white px-5 py-3 my-2 
            rounded-md bg-yellow-300 cursor-pointer text-black
            transition border-2 border-brown duration-200 ml-4"
          onClick={handleSubmit}
        >
          Submit Review!
        </button>
      </div>
    </div>
  );
};

export default Review;
