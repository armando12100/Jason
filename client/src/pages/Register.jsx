import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Register = () => {

    const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    user_id: null,
    user_email: "",
    user_password: "",
  });

  const [err, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className="">
      <h1
        className="text-2xl font-bold text-black pt-4 
      border-b-2 border-gray-500 pl-3 pb-4"
      >
        Have an account?
      </h1>
      <div>
        <div className="flex justify-center items-center bg-gray-100 h-screen">
          <form action="" className="shadow-xl w-1/2 py-10 bg-white">
            <div className="flex flex-col justify-center items-center">
              <input
                type="text"
                name="user_email"
                placeholder="email"
                onChange={handleChange}
                className=" shadow-md mt-2 pl-4"
              />
              <input
                type="text"
                name="user_password"
                placeholder="password"
                onChange={handleChange}
                className=" shadow-md mt-2 mb-5 pl-4"
              />

              <button
                onClick={handleSubmit}
                className="bg-purple-300 cursor-pointer rounded-lg px-4 py-2 ml-4
   hover:text-purple-300 hover:bg-white hover:border-pink-200 
   hover:border-2 mb-5"
              >
                Register / Sign Up
              </button>
              {err && (
                <p className="text-red-600 mb-4">
                  {err}
                </p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <span>
                
                {/* <Link to="/"> */}
                <button
                onClick={handleLoginSubmit}
                  className="bg-purple-300 cursor-pointer rounded-lg px-4 py-2 ml-4
   hover:text-purple-300 hover:bg-white hover:border-pink-200 
   hover:border-2"
                >
                  Login
                </button>
                {/* </Link> */}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
