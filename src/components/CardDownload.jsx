import React from 'react';

import svgChrome from '../assets/logo-chrome.svg';
import svgFirefox from '../assets/logo-firefox.svg';
import svgOpera from '../assets/logo-opera.svg';
import svgDots from '../assets/bg-dots.svg';

// const dataCard = [
//     {
//         id:'1',
//         imagen: svgChrome,
//         text:'Add to Chrome',
//         version:'Minimum version 62',
//     },
//     {
//         id:'2',
//         imagen: svgFirefox,
//         text:'Add to Firefox',
//         version:'Minimum version 62',
//     },
//     {
//         id:'3',
//         imagen: svgOpera,
//         text:'Add to Opera',
//         version:'Minimum version 62',
//     },
// ]

export const CardDownloadChrome = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border p-4 shadow-lg">
      <img src={svgChrome} alt="imagen de navegador" className="w-1/3" />
      <h4 className="text-base font-bold text-slate-700">Add to Chrome</h4>
      <p className="text-sm text-slate-400">Minimum version 62</p>
      <img src={svgDots} alt="dots" className="w-1/2" />
      <div>
        <button className="cursor-pointer rounded-md bg-indigo-500 px-3 py-2 text-xs text-white hover:border-2 hover:border-indigo-500 hover:bg-white hover:text-indigo-500">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};
export const CardDownloadFirefox = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border p-4 shadow-lg">
      <img src={svgFirefox} alt="imagen de navegador" className="w-1/3" />
      <h4 className="text-base font-bold text-slate-700">Add to Chrome</h4>
      <p className="text-sm text-slate-400">Minimum version 55</p>
      <img src={svgDots} alt="dots" className="w-1/2" />
      <div>
        <button className="cursor-pointer rounded-md bg-indigo-500 px-3 py-2 text-xs text-white hover:border-2 hover:border-indigo-500 hover:bg-white hover:text-indigo-500">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};
export const CardDownloadOpera = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border p-4 shadow-lg">
      <img src={svgOpera} alt="imagen de navegador" className="w-1/3" />
      <h4 className="text-base font-bold text-slate-700">Add to Chrome</h4>
      <p className="text-sm text-slate-400">Minimum version 46</p>
      <img src={svgDots} alt="dots" className="w-1/2" />
      <div>
        <button className="cursor-pointer rounded-md bg-indigo-500 px-3 py-2 text-xs text-white hover:border-2 hover:border-indigo-500 hover:bg-white hover:text-indigo-500">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};
