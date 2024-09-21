import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Account = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1>Account</h1>
        {currentUser ? (
          <button className="font-bold" onClick={logout}>Logout</button>
        ) : (
          <Link to={"/register"}>Login</Link>
        )}
      </div>
      <h2>{currentUser?.user_email}</h2>
      <h2>{currentUser?.user_id}</h2>
    </div>
  );
};

export default Account;
