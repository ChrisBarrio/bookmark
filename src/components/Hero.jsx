import React from 'react';

import svgHero from '../assets/illustration-hero.svg';
import BgSquare from './BgSquare';

import HeroBtn from './HeroBtn';

const Hero = () => {
  return (
    <section className="my-20 flex px-20 max-sm:flex-col-reverse max-sm:px-0">
      <div className="flex w-1/2 flex-col justify-center gap-4 pr-52 max-sm:w-full max-sm:px-4 max-sm:pr-0">
        <h1 className="text-3xl max-sm:text-center font-bold text-slate-700">
          A Simple Bookmark Manager
        </h1>
        <p className=" text-slate-400">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 max-sm:justify-center">
          <HeroBtn props="Get it on Chrome" estilos='bg-indigo-500 text-white' />
          <HeroBtn props="Get it on Firefox" />
        </div>
      </div>
      <div className="relative w-1/2 max-sm:w-full">
        <img
          src={svgHero}
          alt="ilustracion hero"
          className="z-10 w-[80%] drop-shadow-lg max-sm:w-full"
        />
        <BgSquare />
      </div>
    </section>
  );
};

export default Hero;
