import React from "react";
// images
import AppleImg from "../assets/applestr.png";
import PlaystoreImg from "../assets/playstr.png";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white w-full h-fit text-black py-8 px-10">
      <div className="mx-auto flex flex-col gap-8 ">
        <div className="flex flex-col items-center md:flex-row">
          {/* box-1 */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <div className="w-[80%]  mb-4 md:mb-0">
              <h2 className="text-4xl text-blue-950 font-extrabold mb-4">
                Easy
              </h2>
              <h2 className="text-4xl font-extrabold mb-4 text-blue-600">
                ahead
              </h2>
              <p className="text-black">
                We take the work out of connecting with others so you can
                accomplish more.
              </p>
            </div>
            <div className="flex flex-col w-[90%] gap-10 mt-8">
              <div className="flex justify-between w-[100%] p-2 rounded-md shadow-sm border">
                <p className="font-bold">English</p>
                <span className="pt-1">
                  <svg
                    className="ml-1 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  className="w-[115px] cursor-pointer"
                  src={AppleImg}
                  alt="appleImg"
                />
                <img
                  className="w-[120px] cursor-pointer"
                  src={PlaystoreImg}
                  alt="playstoreImg"
                />
              </div>
              <ul className="flex justify-center md:justify-start gap-6">
                <li className="hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon fontSize={25} icon={faTwitter} />
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon fontSize={25} icon={faFacebookF} />
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon fontSize={25} icon={faInstagram} />
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon fontSize={25} icon={faLinkedinIn} />
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon fontSize={25} icon={faYoutube} />
                </li>
              </ul>
            </div>
          </div>
          {/* box-2 */}
          <div className="w-2/3 grid m-4 grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                About
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  About Calendly
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Contact Sales
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Newsroom
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Careers
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Security
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                Solutions
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Customer Success
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Sales
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Recruiting
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Information Technology
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Marketing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                Popular Features
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Embed Calendly
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Availability
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Sending Notifications
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Using Calendly Mobile
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                Support
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Help Center
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Video Tutorials
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Cookie Settings
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                Add-Ons
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Download for Chrome
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Download for Firefox
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-blue-950 font-extrabold mb-2">
                Developers
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="hover:text-blue-600 hover:cursor-pointer w-fit">
                  Developer Tools
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-10 flex flex-col md:flex-row items-center justify-between">
          <p>Copyright Calendly 2022</p>
          <p>Privacy / Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
