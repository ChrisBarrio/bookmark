import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import LogoBookmark from './iconos/LogoBookmark';
import IconoFacebook from './iconos/IconoFacebook';
import IconoTwitter from './iconos/IconoTwitter';

const navLinks = [
  {
    id: '1',
    name: 'features',
    href: 'features',
  },
  {
    id: '2',
    name: 'faqs',
    href: 'faqs',
  },
  {
    id: '3',
    name: 'contact',
    href: 'contact',
  },
];

const Footer = () => {
  return (
    <footer className="flex justify-around bg-[#333d6b] px-3 py-4 text-white max-sm:flex-col max-sm:items-center">
      <div className="my-auto">
        <LogoBookmark fill="#ffffff" />
      </div>
      <nav className="flex gap-4 max-sm:my-4 max-sm:flex-col">
        {navLinks.map((e) => (
          <Link
            to={e.href}
            key={e.id}
            spy={true}
            smooth={true}
            offset={-10}
            duration={800}
            className="p-1 cursor-pointer text-sm uppercase text-slate-400 hover:text-[#F94C4C]"
          >
            {e.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a href="#">
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
