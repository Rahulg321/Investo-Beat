import React, { useEffect } from "react";

const ContactForm = () => {
  return (
    <div className="relative h-fit border-8 border-gray-400 bg-white p-8 lg:bottom-[-20px] lg:left-[-50px]">
      <h3 className="mb-4">Lets Talk</h3>
      <form action="" className="grid grid-cols-1 gap-4 md:gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 p-4"
            placeholder="John "
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-200 p-4"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-bold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className=" bg-gray-200 p-4"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name=""
            id="message"
            className="bg-gray-200 p-4"
            placeholder="message"
          ></textarea>
        </div>

        <button className="mt-4 border-2 border-mainO bg-white py-2 font-semibold text-mainO">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
