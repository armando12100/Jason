import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import Hamburger from "../images/hamburger.png";
import logo from "../images/logo.jpg";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);

  const style = ({ isActive }) =>
    [
      "ml-10 px-2 py-2.5",
      "hover:bg-cprimary-300 hover:text-csecond-100",
      "rounded-md transition",
      isActive
        ? "bg-orange-100 text-black font-bold transition ease-in duration-500 h-12"
        : "hover:underline font-bold",
    ].join(" ");

  const [isMobile, setIsMobile] = useState(false);

  function toggleMenu() {
    setIsMobile((isMobile) => !isMobile);
  }

  function toggleAnywhere() {
    if (isMobile === true) {
      setIsMobile((open) => !open);
    }
  }

  return (
    <>
      <div
        className="pl-5 py-3 items-center hidden sm:flex bg-orange-50 text-black shadow-md"
        onClick={toggleAnywhere}
      >
        <div className="">
          <NavLink to={"/"} className="text-black font-bold">
            <img src={logo} alt="" width={64} />
          </NavLink>
        </div>

        <div className="w-full flex justify-evenly">
          <NavLink to={"/portfolio"} className={style}>
            Hikes
          </NavLink>
          <NavLink to={"/parks"} className={style}>
            National Parks
          </NavLink>
          <NavLink to={currentUser ? `/myparks/${currentUser.user_id}` : "/mypakrs"} className={style}>
            My Parks
          </NavLink>
          <NavLink to={"/account"} className={style}>
            Account
          </NavLink>
        </div>
      </div>

      <div className="justify-between py-3 items-center px-2 flex sm:hidden transition duration-1000 ease-in-out">
        <NavLink to={"/"} className={style}>
          Logo
        </NavLink>
        <img
          src={Hamburger}
          alt=""
          width={40}
          height={40}
          onClick={toggleMenu}
          className="hover:cursor-pointer"
        />
      </div>

      {isMobile ? (
        <div className="flex flex-col absolute right-0 bg-white z-20">
          <NavLink to={"/"} className={style} onClick={toggleAnywhere}>
            Home
          </NavLink>
          <NavLink to={"/account"} className={style} onClick={toggleAnywhere}>
            Account
          </NavLink>
          <NavLink to={"/tab"} className={style} onClick={toggleAnywhere}>
            Tab
          </NavLink>
          <NavLink to={"/myparks"} className={style} onClick={toggleAnywhere}>
            My Parks
          </NavLink>
          <NavLink to={"/contact"} className={style} onClick={toggleAnywhere}>
            Contact
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
