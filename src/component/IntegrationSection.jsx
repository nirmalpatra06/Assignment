import React from "react";
// icons //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//images//
import ZoomLogo from "../assets/images/zoom.png";
import MicrosoftTm from "../assets/images/microsofttm.png";
import Zapier from "../assets/images/zapier.png";
import Calendly from "../assets/images/calendly.png";
import Salesforce from "../assets/images/salesforce.png";
import Paypal from "../assets/images/paypal.png";
import Stripe from "../assets/images/stripe.png";

const IntegrationSection = () => {
  return (
    <div className="bg-blue-50 h-[750px] md:h-[75vh] px-10">
      <div className="flex h-full  gap-4 flex-col  md:flex-row">
        {/* box-1 */}
        <div className="mt-6 flex flex-col mx-auto gap-6">
          <div className="text-sm text-gray-500 mb-4">
            <a href="/" className="text-blue-600 font-bold text-xl">
              Home
            </a>
            <span className="mx-2 text-xl">/</span>
            <a href="/product" className="text-blue-600 font-bold text-xl">
              Product
            </a>
            <span className="mx-2 text-xl">/</span>
            <span className="hover:text-gray-700 cursor-pointer text-xl">
              Integrations
            </span>
          </div>
          <div className="w-[90%]">
            <h2 className="text-gray-500 uppercase tracking-wide font-semibold mb-2">
              APPS & INTEGRATIONS
            </h2>
            <p className="lg:text-4xl text-2xl font-extrabold flex flex-col gap-4 mb-8">
              <span className="text-blue-950">Integrate Calendly,</span>
              <span className="text-blue-950">boost productivity</span>
            </p>

            <p className="text-gray-600images">
              Smart scheduling automation will change the way you – and your
              tools – work.
            </p>
          </div>
          <div className="w-fit">
            {/* Search-Box */}
            <div className="flex items-center bg-white rounded-full lg:p-4 p-2 shadow-md w-[300px] md:w-[400px] max-w-md mx-auto">
              <span className="text-xl text-gray-500 mr-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#218fe4" }}
                />
              </span>

              <input
                type="text"
                placeholder="Search for an integration"
                className="flex-1 bg-transparent outline-none placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* box-2 */}
        <div className="w-full md:w-[60%] flex lg:justify-end md:items-center md:justify-end justify-center ">
          {/* Circle */}
          <div className="bg-gray-100 w-[300px] h-[300px] lg:w-[430px] lg:h-[100%] rounded-[100%] flex items-center justify-center shadow-md">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex justify-evenly w-full lg:translate-y-7 translate-y-10 z-10">
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer md:mt-4 lg:mt-0 hover:-translate-y-1 shadow-xl duration-200"
                  src={ZoomLogo}
                  alt=""
                />
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer md:mt-4 lg:mt-0 hover:-translate-y-1 shadow-xl duration-200"
                  src={MicrosoftTm}
                  alt=""
                />
              </div>
              <div className="flex w-[300px]  lg:justify-between justify-evenly px-2">
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer mt-12 hover:-translate-y-1 shadow-xl duration-200"
                  src={Zapier}
                  alt=""
                />
                <div className="border-[18px] rounded-full border-blue-100">
                  <div className="border-[18px] rounded-full border-blue-200">
                    <div className="border-blue-500 border-[15px] h-fit rounded-full">
                      <img
                        className="lg:w-12 lg:h-12 w-8 h-8 rounded-md cursor-pointer"
                        src={Calendly}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer mt-12 hover:-translate-y-1 shadow-xl duration-200"
                  src={Salesforce}
                  alt=""
                />
              </div>
              <div className="flex justify-evenly w-full lg:-translate-y-7 -translate-y-10">
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer md:mb-4 lg:mb-0 hover:-translate-y-1 shadow-xl duration-200"
                  src={Paypal}
                  alt=""
                />
                <img
                  className="lg:w-14 lg:h-14 w-10 h-10 rounded-md cursor-pointer md:mb-4 lg:mb-0 hover:-translate-y-1 shadow-xl duration-200"
                  src={Stripe}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
