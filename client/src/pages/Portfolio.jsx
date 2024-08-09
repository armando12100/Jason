import ServicesInfo from "../data/ServicesInfo"
import ServicesCard from "../components/ServicesCard"

const Portfolio = () => {

  const cards = ServicesInfo.map((services) => {
    return (
      <ServicesCard key={services.key} service={services.service} 
      description={services.description} price={services.price} image={services.image} />
    );
  });

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold text-black pt-4 border-b-2 border-gray-500 pl-3 pb-4">
        SERVICES
      </h1>
      <h3 className="text-gray-600 font-bold text-md pt-6 pl-3 italic">Our Range of Services Include</h3>
      <div className="flex flex-wrap justify-center items-center pt-10">
        {cards}
      </div>
    </div>
  )
}

export default Portfolio