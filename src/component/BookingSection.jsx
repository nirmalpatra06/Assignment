import React from "react";

function BookingSection() {
  return (
    <div className="bg-[#020d27] w-full h-[65vh] px-10 py-6">
      <div className="w-full h-full flex justify-center">
        <div className="w-[75%] h-full flex flex-col justify-center items-center lg:gap-8 md:gap-6 gap-4">
          <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center text-white">
            Easy access for easy bookings
          </h2>
          <p className="text-gray-400 text-center text-xl w-[85%]">
            Share your Calendly link right from your browser, so you can
            schedule meetings without the back-and-forth
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center lg:gap-6 md:gap-4 gap-2 ">
            <button className="lg:px-8 lg:py-4 px-6 py-2 w-fit rounded-full bg-blue-600 hover:bg-blue-800 text-white font-bold">
              start for free
            </button>
            <button className="lg:px-6 lg:py-3 px-4 py-2 w-fit border-2 border-white rounded-full text-white hover:text-gray-400 hover:border-gray-400 font-bold">
              Talk with sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
