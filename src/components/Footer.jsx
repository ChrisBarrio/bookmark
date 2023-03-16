import React from 'react';

import LogoBookmark from './iconos/LogoBookmark';
import IconoFacebook from './iconos/IconoFacebook';
import IconoTwitter from './iconos/IconoTwitter';

const navLinks = [
  {
    id: '1',
    name: 'features',
  },
  {
    id: '2',
    name: 'princing',
  },
  {
    id: '3',
    name: 'contact',
  },
];

const Footer = () => {
  return (
    <footer className="text-white bg-cyan-900 px-3 py-4 flex justify-around">
      <div className="my-auto">
        <LogoBookmark fill="#ffffff" />
      </div>
      <nav className="flex gap-4">
        {navLinks.map((e) => (
          <a
            href="#"
            key={e.id}
            className="uppercase p-1 text-sm text-slate-400 hover:text-[#F94C4C]"
          >
            {e.name}
          </a>
        ))}
      </nav>
      <div className='flex items-center gap-4'>
        <a href="#" >
          <IconoFacebook />
        </a>
        <a href="#">
          <IconoTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
