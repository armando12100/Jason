import banner from "../images/Banner.jpg";
import search from "../images/search.png";

const Home = () => {
  return (
    <>
      <div className="relative">
        <img src={banner} alt="" className="object-fit" />

        <div className="flex items-center max-w-sm mx-auto shadow rounded border-0 p-3">
          <form action="" className="absolute top-0">
            <img src={search} alt="" width={32} className="absolute top-3 ml-4" />
            <input
              type="text"
              placeholder="Search by city or trail name"
              className="py-4 px-20 rounded-sm text-red-700 font-bold"
            />
          </form>
        </div>
      </div>

      {/* <div className="bg-brown">
        <h1>Placeholder Text</h1>
      </div> */}
    </>
  );
};

export default Home;
