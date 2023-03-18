import React, { useState } from 'react';

import svgBookmarkLogo from '../assets/logo-bookmark.svg';

import IconoHamburguer from '../components/iconos/IconoHamburguer';
import IconoClose from '../components/iconos/IconoClose';

import FormBtn from './FormBtn';

const navLinks = [
  {
    id: '1',
    name: 'features',
    href: 'features',
  },
  {
    id: '2',
    name: 'princing',
    href: 'princing',
  },
  {
    id: '3',
    name: 'contact',
    href: 'contact',
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header className="my-4 mx-2 flex items-center justify-between px-2">
      <img
        src={svgBookmarkLogo}
        alt="logo bookmark"
        className="h-auto w-auto object-contain"
      />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="mr-4 text-black sm:hidden"
      >
        {!toggle ? <IconoClose size={40} /> : <IconoHamburguer size={40} />}
      </button>
        <nav
          className={
            !toggle
              ? `absolute top-20 left-0 z-10 flex h-1/2 w-full flex-col justify-center gap-14  bg-white text-center text-black`
              : `flex gap-4 max-sm:hidden`
          }
        >
          {navLinks.map((e) => (
            <a
              href={e.href}
              key={e.id}
              className="p-1 uppercase hover:text-[#F94C4C]"
            >
              {e.name}
            </a>
          ))}
          <FormBtn props="LOGIN" />
        </nav>
    </header>
  );
};

export default Header;
