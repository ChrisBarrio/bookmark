import React from 'react'

const HeroBtn = ({props, estilos}) => {
  return (
    <button className={`border-2 text-xs rounded-md border-slate-400 hover:border-blue-600 py-2 cursor-pointer px-2 max-sm:shadow-lg ${estilos}`}>
        {props}
    </button>
  )
}

export default HeroBtn