import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from "../images/hamburger.png";

const Navbar = () => {

  const style = ({ isActive }) =>
    [
      "px-2 py-2.5",
      "hover:bg-cprimary-300 hover:text-csecond-100",
      "rounded-md transition",
      isActive
        ? "bg-gray-700 text-white font-bold transition ease-in duration-500 h-12"
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
        className="justify-around py-3 items-center hidden sm:flex bg-black text-white shadow-md"
        onClick={toggleAnywhere}
      >
        <NavLink to={"/"} className={style}>
          Logo
        </NavLink>

        <NavLink to={"/tab"} className={style}>
          Tab
        </NavLink>
        <NavLink to={"/tab"} className={style}>
          Tab
        </NavLink>
        <NavLink to={"/tab"} className={style}>
          Tab
        </NavLink>
        <NavLink to={"/services"} className={style}>
          Services
        </NavLink>
        <NavLink to={"/contact"} className={style}>
          Contact
        </NavLink>
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
          <NavLink to={"/tab"} className={style} onClick={toggleAnywhere}>
            Tab
          </NavLink>
          <NavLink to={"/tab"} className={style} onClick={toggleAnywhere}>
            Tab
          </NavLink>
          <NavLink to={"/services"} className={style} onClick={toggleAnywhere}>
            Services
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
