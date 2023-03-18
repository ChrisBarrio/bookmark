import React from 'react';

const ContactUs = () => {
  return (
    <section  className="flex flex-col items-center gap-4 bg-indigo-500 py-10 text-center text-white">
      <div className="flex w-1/3 flex-col gap-8 max-sm:w-full max-lg:w-3/4">
        <p className="text-sm">35.000 + ALREADY JOINED</p>
        <p className="px-16 text-2xl font-semibold max-sm:px-0">
          Stay up-to-date with what we’re doing
        </p>
        <form className="w-full max-sm:flex max-sm:flex-col">
          <input
            className=" rounded-md p-1 px-3 max-sm:mx-auto max-sm:mb-4 max-sm:w-3/4 max-sm:py-2"
            type="text"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="ml-1 rounded-md bg-red-400 py-1 px-2 text-white max-sm:mx-auto max-sm:w-1/2"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
