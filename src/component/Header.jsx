import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="bg-white w-auto flex items-center justify-between shadow-md sticky top-0 z-40 py-6 px-10">
      <div className="flex items-center">
        <img className="w-[155px]" src={Logo} alt="logo" />
      </div>
      <nav className="hidden lg:block w-[600px] justify-between items-center">
        <ul className="flex justify-evenly">
          <li>
            <a
              href="/individuals"
              className="text-black font-bold hover:text-blue-600"
            >
              Individuals
            </a>
          </li>
          <li>
            <a
              href="/teams"
              className="text-black font-bold hover:text-blue-600"
            >
              Teams
            </a>
          </li>
          <li>
            <a
              href="/enterprise"
              className="text-black font-bold hover:text-blue-600"
            >
              Enterprise
            </a>
          </li>
          <li className="flex items-center font-bold text-black hover:text-blue-600">
            <a href="/product" className=" flex items-center">
              Product
            </a>
            <span className="pt-1">
              <svg
                className="ml-1 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
            <div className="absolute z-10 bg-white shadow-md rounded-md mt-2 hidden group-hover:block">
              {/* Add dropdown menu items here */}
            </div>
          </li>
          <li>
            <a
              href="/pricing"
              className="text-black font-bold hover:text-blue-600"
            >
              Pricing
            </a>
          </li>
          <li className="flex items-center font-bold text-black hover:text-blue-500">
            <a href="/resources" className=" flex items-center">
              Resources
            </a>
            <span className="pt-1">
              <svg
                height="100px"
                width="100px"
                className="ml-1 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </span>
            <div className="absolute z-10 bg-white shadow-md rounded-md mt-2 hidden group-hover:block">
              {/* Add dropdown menu items here */}
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <div className="hidden md:block">
          <div className="flex gap-2">
            <button className="bg-gray-50 px-2 py-1  rounded-full">
              <a
                href="/login"
                className="text-black font-bold hover:text-blue-600"
              >
                Log In
              </a>
            </button>
            <button className="bg-blue-600  text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-blue-800 duration-200">
              Get started
            </button>
          </div>
        </div>
        <div className="text-3xl lg:hidden" onClick={toggleMenu}>
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {/* NavLinks */}
      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </header>
  );
};

export default Header;
