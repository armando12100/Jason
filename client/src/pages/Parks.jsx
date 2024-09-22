import NationalParksCard from "../components/NationalParksCard";
import NationalParksData from "../data/NationalParksData";

const Parks = () => {

  const Alaska = NationalParksData[0].Alaska

  const cards = Alaska.map((parks) => {
    return (
      <NationalParksCard key={parks.id} name={parks.name} 
      location={parks.location} img={parks.img} />
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-black pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        Parks
      </h1>
      <h3 className="text-gray-600 font-bold text-md pt-6 pl-3 italic">Our National Parks Include</h3>
      <div className="flex flex-wrap justify-center items-center pt-10">
        {cards}
      </div>
    </div>
  )
}

export default Parks