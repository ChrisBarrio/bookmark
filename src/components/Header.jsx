import React from 'react';

import svgBookmarkLogo from '../assets/logo-bookmark.svg';

import FormBtn from './FormBtn';

const navLinks = [
  {
    id: '1',
    name: 'features',
    href:'#features'
  },
  {
    id: '2',
    name: 'princing',
    href:'#princing'
  },
  {
    id: '3',
    name: 'contact',
    href:'#contact'
  },
];

const Header = () => {
  return (
    <header className="my-4 mx-2 px-2 flex justify-between">
      <img
        src={svgBookmarkLogo}
        alt="logo bookmark"
        className="h-auto w-auto object-contain"
      />
      <nav className="flex gap-4">
        {navLinks.map((e) => (
          <a href={e.href} key={e.id} className="p-1 uppercase hover:text-[#F94C4C]">
            {e.name}
          </a>
        ))}
        <FormBtn props="LOGIN" />
      </nav>
    </header>
  );
};

export default Header;
