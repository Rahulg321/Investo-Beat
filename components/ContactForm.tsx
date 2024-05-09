import React, { useEffect } from "react";

const ContactForm = () => {
  return (
    <div className="relative left-[-90px] h-fit border-8 border-gray-400 bg-white p-8">
      <h3 className="mb-4">Lets Talk</h3>
      <form
        action=""
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      >
        <div>
          <label htmlFor="first-name" className="font-bold">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="bg-gray-200 p-4"
            placeholder="John "
          />
        </div>

        <div>
          <label htmlFor="last-name" className="font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="bg-gray-200 p-4"
            placeholder="Doe "
          />
        </div>
        <div className="col-span-2 flex flex-col">
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
        <div className="col-span-2 flex flex-col">
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
        <div className="col-span-2 flex flex-col">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name=""
            id="message"
            className="col-span-2 bg-gray-200 p-4"
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
