import React from "react";
import ZoomLogo from "../assets/images/zoom.png";
import TypeformLogo from "../assets/images/typeform.png";
import WebexLogo from "../assets/images/webex.png";
import SlackLogo from "../assets/images/slack.png";
import SalsforceLogo from "../assets/images/salesforce.png";
import MicrosoftTmLogo from "../assets/images/microsofttm.png";
import HubspotLogo from "../assets/images/hubspot.png";
import ZapierLogo from "../assets/images/zapier.png";
import PaypalLogo from "../assets/images/paypal.png";
import IntercomLogo from "../assets/images/intercom.png";
import StripeLogo from "../assets/images/stripe.png";
import GotoLogo from "../assets/images/goto.png";
import GoogleAnaLogo from "../assets/images/googleana.png";
import CalendlyLogo from "../assets/images/calendly.png";
import GooglechromeLogo from "../assets/images/googlechrome.png";

const categories = [
  {
    logo: ZoomLogo,
    name: "Zoom",
    description: "Connect from anywhere and eliminate administrative work.",
    Imgclass: "w-14 h-14",
  },
  {
    logo: TypeformLogo,
    name: "Typeform",
    description: "Gather, qualify, and schedule.",
    Imgclass: "w-36 h-16",
  },
  {
    logo: WebexLogo,
    name: "Webex",
    description: "Connect from anywhere and eliminate administrative work.",
    Imgclass: "w-18 h-16",
  },
  {
    logo: SlackLogo,
    name: "Slack",
    description:
      "Automate smaarter workflows and incorporate Calendly right into your organization's Slack channels",
    Imgclass: "w-18 h-16",
  },
  {
    logo: SalsforceLogo,
    name: "Salesforce",
    description:
      "Calendly takes the work out of updating Salesforce so you can sell more",
    Imgclass: "w-18 h-16",
  },
  {
    logo: MicrosoftTmLogo,
    name: "Black Box",
    description:
      "Calendly takes the work out of updating Salesforce so you can sell more",
    Imgclass: "w-16 h-16",
  },
  {
    logo: MicrosoftTmLogo,
    name: "Microsoft Teams",
    description:
      "Calendly takes the work out of updating Salesforce so you can sell more",
    Imgclass: "w-16 h-14",
  },
  {
    logo: HubspotLogo,
    name: "Hubspot",
    description:
      "Calendly updates HubSpot for you so you can focus on building relationships.",
    Imgclass: "w-14 h-14",
  },
  {
    logo: ZapierLogo,
    name: "Zapier",
    description:
      "Connect Calendly to your other tools and automate your workflows.",
    Imgclass: "w-24 h-[55px]",
  },
  {
    logo: PaypalLogo,
    name: "Paypal",
    description:
      "Simplify billing and reduce no-shows with an integrated Paypal account.",
    Imgclass: "w-10 h-10",
  },
  {
    logo: IntercomLogo,
    name: "Intercom",
    description:
      "Schedule meetings with leads and customers right from intercom Messenger.",
    Imgclass: "w-28 h-18",
  },
  {
    logo: StripeLogo,
    name: "Stripe",
    description:
      "Simplify billing and reduce no-shows with an integrated Stripe account.",
    Imgclass: "w-20 h-18",
  },
  {
    logo: GotoLogo,
    name: "Goto Meeting",
    description: "Connect from anywhere and eliminate admimistrative work.",
    Imgclass: "w-20 h-16",
  },
  {
    logo: GoogleAnaLogo,
    name: "Google Analytics",
    description:
      "Improve campaign tracking using Calendly with your Googole Analytics account.",
    Imgclass: "w-28 h-16",
  },
  {
    logo: CalendlyLogo,
    name: "Calendly APIs",
    description:
      "Leverage Cakendly's APIs for custom Calendly integrations with your product.",
    Imgclass: "w-16 h-16",
  },
  {
    logo: GooglechromeLogo,
    name: "Chrome",
    description:
      "Use Calendly while you're on the web, without switching tabs.",
    Imgclass: "w-16 h-16",
  },
];
const Category = () => {
  return (
    <div className="bg-white py-6 px-10 ">
      <div className="flex flex-col md:flex-row items-center mx-auto  md:items-start ">
        {/* box-1 */}
        <div className=" w-[300px] md:w-1/4 flex flex-col gap-1 md:gap-8 py-6 ">
          <h2 className="text-blue-950 text-2xl font-extrabold">Categories</h2>
          <div>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              All
            </h3>
            <h3 className="p-2 md:p-4 cursor-pointer font-semibold bg-blue-600 text-white rounded-md">
              Popular
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Extention & Apps
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Calendars
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Sales & CRM
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Video Conferencing
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Marketing
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Recruiting & ATS
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Payments
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Analytics
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              API & Connectors
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Email Messaging
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Embed Calendly
            </h3>
            <h3 className="p-2 md:p-4 hover:text-blue-500 hover:bg-gray-100 rounded-md cursor-pointer font-semibold">
              Other Integrations
            </h3>
          </div>
        </div>
        {/* box-2 */}
        <div className="max-w-7xl flex flex-col gap-6 mx-auto  py-6  sm:px-6 lg:px-2 ml-16">
          <div>
            <p className="font-bold">Viewing: 15 Popular</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {categories.map(({ name, logo, description, Imgclass }, idx) => (
              <div key={name}>
                {idx === 5 ? (
                  <div className="bg-blue-950 w-[250px] h-[320px] flex flex-col justify-between hover:-translate-y-2 duration-200 p-6 shadow-md border rounded-md">
                    <div className="flex items-start flex-col gap-6">
                      <h2 className="text-white">BUILD WITH US</h2>
                      <p className="text-white">
                        Looking to build an integration with us?
                      </p>
                      <p className="text-gray-300">
                        Visit our Developer Portal to explore our API docs and
                        other integration resources
                      </p>
                    </div>
                    <div>
                      <button className="flex items-center text-blue-600">
                        <span className="font-bold text-white">
                          Get Started
                        </span>
                        <svg
                          className="ml-1 h-4 w-4 fill-current mt-1 text-white -rotate-90"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-[250px] h-[320px] hover:-translate-y-2 duration-200 p-6 shadow-md border rounded-md">
                    <div className="w-full h-full flex flex-col justify-between ">
                      <div className="flex items-start flex-col gap-6">
                        <img className={Imgclass} src={logo} alt="logo" />
                        <h1 className="text-xl text-blue-950 font-bold">
                          {name}
                        </h1>
                        <p className="text-gray-500">{description}</p>
                      </div>
                      <div>
                        <button className="flex items-center text-blue-600">
                          <span className="font-bold">Learn more</span>
                          <svg
                            className="ml-1 h-4 w-4 fill-current mt-1 -rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
