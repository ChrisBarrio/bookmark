import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
    name: 'faqs',
    href: 'faqs',
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
      <NavBar toggle={toggle}/>
    </header>
  );
};

export default Header;



export const NavBar = ({toggle}) => {
  return (
    <nav
        className={
          !toggle
            ? `absolute top-20 left-0 z-10 flex h-1/2 w-full flex-col justify-center gap-14  bg-white text-center text-black`
            : `flex gap-4 max-sm:hidden`
        }
      >
        {navLinks.map((e) => (
          <Link
            to={e.href}
            key={e.id}
            spy={true}
            smooth={true}
            offset={-10}
            duration={800}
            className="p-1 uppercase hover:text-[#F94C4C]"
          >
            {e.name}
          </Link>
        ))}
        <FormBtn props="LOGIN" />
      </nav>
  )
}
