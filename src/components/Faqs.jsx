import React from 'react';

import Accordion from './Accordion';

const Faqs = () => {
  return (
    <section id="faqs" className="my-20 flex flex-col items-center gap-4">
      <h3 className="text-2xl font-bold text-slate-700">
        Frequently Asked Questions
      </h3>
      <p className="w-1/3 text-center text-slate-400 max-sm:w-full max-sm:px-4 max-lg:px-4 max-lg:w-3/4">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      <Accordion />
    </section>
  );
};

export default Faqs;
