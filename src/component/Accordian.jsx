import React, { useState } from "react";
const faqs = [
  {
    title: "What are Calendly apps?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "What are Calendly integrations?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "How do I install and use integrations?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How can I request a new integration?",
    text: "Excepturi velit laborum, perspici perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Want to build a Calendly integration? Learn about our API.",
    text: "Excepturi velit laborum, perspici perferendis reiciendis aliquam laborum ducimus veritatis facere molestias!",
  },
];
function Accordian() {
  return (
    <div className="bg-blue-50 w-full h-fit px-10">
      <div className="w-full h-full flex py-14 justify-center">
        <div className="w-[500px] flex flex-col gap-4">
          <div className="flex flex-col gap-10 items-center">
            <h2 className=" text-blue-950 lg:text-4xl md:text-3xl text-2xl font-extrabold">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-gray-600">
                Not seeing what you are looking for?
              </p>
              <p className="text-gray-600">
                Go to our <span className="text-blue-600">help center</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map(({ title, text }) => (
              <AccordionItem key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`${
        isOpen && "border-t-2 border-t-blue-800"
      } bg-white border-2 rounded-md border-r-gray-200  cursor-pointer`}
      onClick={handleToggle}
    >
      <div className="flex justify-between gap-4 md:text-xl text-lg font-bold px-2 py-4">
        <p className={`${isOpen && "text-blue-800"}`}>{title}</p>
        <p className={`${isOpen && "text-blue-800"}`}>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="text-xl font-bold px-2 pb-4">{text}</div>}
    </div>
  );
}
export default Accordian;
