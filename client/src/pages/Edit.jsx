import axios from "axios";
import { useEffect, useState, useContext } from "react";
import EditParkCard from "../components/EditParkCard";
import { AuthContext } from "../context/authContext";


const Edit = () => {

    const [parks, setParks] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPark = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/bookmarks/${currentUser.user_id}`);
        setParks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPark();
  }, [currentUser.user_id]);

  const parkCards = parks.map((parks) => {
    return (
      <div key={parks.park_id}>
        <EditParkCard
          key={parks.park_id}
          park={parks.park_name}
          img={parks.park_img}
          state={parks.state}
          id={parks.park_id}
          bookmarked={parks.bookmarked}
          visited={parks.visited}
        />
      </div>
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="font-bold mt-5 ml-5">Edit Park!</h1>
      <div className="flex flex-wrap justify-center items-center pt-10">{parkCards}</div>
    </div>
  )
}

export default Edit