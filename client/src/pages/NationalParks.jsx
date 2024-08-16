import StateCard from "../components/StateCard";
import ParksByStateData from "../data/ParksByStateData"


const NationalParks = () => {

  const cards = ParksByStateData.map((parks) => {
    return (
      <StateCard
        key={parks.id}
        state={parks.state}
        numParks={parks.numParks}
        img={parks.img}
      />
    );
  })

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-black pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        All National Parks By State
      </h1>
      <h3 className="text-gray-600 font-bold text-md pt-6 pl-3 italic">
        Our National Parks Include
      </h3>
      <div className="flex flex-wrap justify-center items-center pt-10">
        {cards}
      </div>
    </div>
  );
};

export default NationalParks;
