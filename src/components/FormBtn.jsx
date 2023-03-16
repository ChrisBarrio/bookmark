import React from 'react';

const FormBtn = ({ props }) => {
  return (
    <button className="border-2 text-xs rounded-md cursor-pointer px-2 border-stone-400 text-slate-400 hover:border-red-400 hover:text-red-400 ">
      {props}
    </button>
  );
};

export default FormBtn;
