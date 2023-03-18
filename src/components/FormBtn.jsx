import React from 'react';

const FormBtn = ({ props }) => {
  return (
    <button className="cursor-pointer rounded-md border-2 border-stone-400 px-2 text-xs text-slate-400 hover:border-red-400 hover:text-red-400 max-sm:mx-auto max-sm:w-1/2">
      {props}
    </button>
  );
};

export default FormBtn;
