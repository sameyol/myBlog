import React, { useContext, useState } from "react";
import { logo, close, menu } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const { user } = useContext(Context);

  return (
    <div className="w-full h-[80px] top-0 z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="logo flex items-center">
          <img
            src={logo}
            alt="logo"
            className="ml-10 md:ml-3 w-full h-[50px]"
          />
        </div>
        <div className="flex items-center">
          <ul className="hidden sm:flex">
            <li><NavLink to="/">Home</NavLink></li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center sm:mr-10 md-mr-10">
          {user ? (
            <p>{user.name}</p>
          ) : (
            <div>
              <Link
                to="/login"
                className="border-none bg-transparent text-black mr-4"
              >
                Login
              </Link>
              <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white">
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="ss:hidden" onClick={handleClick}>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[78px] h-[78px] object-contain mr-5"
          />
        </div>
      </div>
      <ul
        className={
          toggle ? "absolute bg-white w-full px-8 sm:hidden" : "hidden"
        }
      >
        <li className="text-center"><NavLink to="/">Home</NavLink></li>
        <li className="text-center">About</li>
        <li className="text-center">Support</li>
        <li className="text-center">Platform</li>
        <li className="text-center">Pricing</li>
        <div className="flex flex-col my-4">
        {user ? (
            <p>name</p>
          ) : (
            <div>
              <Link
                to="/login"
                className="border-none bg-transparent text-black mr-4"
              >
                Login
              </Link>
              <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white">
                Register
              </Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
