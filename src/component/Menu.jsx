import React from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Menu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-full "
      }  fixed top-0 w-full bg-white h-screen z-10 transition-all duration-700`}
    >
      <div className="flex  justify-between px-10 py-6">
        <img className="w-[155px]" src={Logo} alt="logo" />
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div>
        <ul className="flex flex-col justify-start">
          <li className="w-full h-16 text-2xl border-b-[1px] flex items-center p-4">
            <a
              href="/individuals"
              className="text-black font-bold hover:text-blue-600"
            >
              Individuals
            </a>
          </li>
          <li className="w-full h-16 text-2xl border-b-[1px] flex items-center p-4">
            <a
              href="/teams"
              className="text-black font-bold hover:text-blue-600"
            >
              Teams
            </a>
          </li>
          <li className="w-full h-16 text-2xl border-b-[1px] flex items-center p-4">
            <a
              href="/enterprise"
              className="text-black font-bold hover:text-blue-600"
            >
              Enterprise
            </a>
          </li>
          <li className="flex items-center justify-between h-16 text-2xl border-b-[1px] p-4 font-bold text-black hover:text-blue-600">
            <a href="/product" className=" flex items-center">
              Product
            </a>
            <span className="pt-1">
              <svg
                rotate={90}
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
          <li className="w-full h-16 text-2xl border-b-[1px] flex items-center p-4">
            <a
              href="/pricing"
              className="text-black font-bold hover:text-blue-600"
            >
              Pricing
            </a>
          </li>
          <li className="flex items-center h-16 text-2xl border-b-[1px] p-4 justify-between font-bold text-black hover:text-blue-500">
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
            <div className="absolute z-10 bg-white shadow-md rounded-md mt-2 hidden group-hover:block"></div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col p-2 gap-2">
        <button className="bg-gray-100 px-2 py-1 rounded-full">
          <a href="/login" className="text-black font-bold hover:text-blue-600">
            Log In
          </a>
        </button>
        <button className="bg-blue-600  text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-blue-800 duration-200">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Menu;
