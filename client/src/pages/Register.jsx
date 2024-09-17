import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Register = () => {
//   const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", inputs);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(inputs);

  return (
    <div>
      <h1>Register Prototype</h1>
      <form action="">
        <input
          type="text"
          name="user_email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="user_password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-300 cursor-pointer rounded-lg px-4 py-2 ml-4
   hover:text-purple-300 hover:bg-white hover:border-pink-200 
   hover:border-2"
        >
          Register Dawgs!
        </button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
