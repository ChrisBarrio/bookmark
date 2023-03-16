import React from 'react';

import TabPanel from './TabPanel';


const Features = () => {
  return (
    <section className="my-20" id='#features'>
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-2xl font-bold text-slate-700">Features</h3>
        <p className="w-1/3 text-slate-400">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <TabPanel />
      </div>
    </section>
  );
};

export default Features;
