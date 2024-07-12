import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ServicesCard = (props) => {
    return (
        <div className="flex flex-wrap my-3 w-96 shadow-2xl rounded-lg mt-6 lg:mt-0 mx-2 pb-5">
            <div className="flex flex-col justify-center items-center">
                <img src={props.image} alt="" width={300} className="object-cover w-72 h-48 rounded-lg" />
                <h1 className="text-center font-bold py-2">{props.service}</h1>
                <p className="px-4 pb-4 w-10/12">{props.description}</p>
                <Link to={"/contact"}>
                    <button className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
         hover:bg-transparent cursor-pointer hover:text-black transition border-2 hover:border-zinc-400 duration-200">
                        Get Service Now!
                    </button>
                </Link>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.any
}

export default ServicesCard;