import React from 'react'
import { RiCloseLargeLine, RiPencilLine,RiRefreshLine } from '@remixicon/react'

const Card = ({value,delet,edit,update}) => {
  return (
    <div className="relative ">
      <div className="bg-blue-100 [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] p-8 w-auto max-w-sm rounded-lg relative overflow-visible  h-55 ">

        {/* ---- Top-right buttons ---- */}
        <div className="absolute top-3 right-3 flex gap-2">
          
          <div className="relative group">
            <button
              type="button"
              className="bg-[#edf2f7] rounded-lg py-2 px-3 hover:scale-90 transition-transform cursor-pointer"
              onClick={delet}
            >
              <RiCloseLargeLine className="text-xl text-blue-500" size={15}/>
            </button>

            <div className="absolute hidden group-hover:block bg-[#333] text-white text-[13px] font-semibold px-3 py-1.5 rounded shadow-lg top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Close
              <div className="absolute w-3 h-3 bg-[#333] rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          {value.disabled?(
            <div className="relative group">
            <button
              type="button"
              className="bg-[#edf2f7] rounded-lg py-2 px-3 hover:scale-90 transition-transform cursor-pointer"
              onClick={edit}
            >
              <RiPencilLine className="text-xl text-blue-500" size={15} />
            </button>

            <div className="absolute hidden group-hover:block bg-[#333] text-white text-[13px] font-semibold px-3 py-1.5 rounded shadow-lg top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Edit
              <div className="absolute w-3 h-3 bg-[#333] rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
          ):
          <div className="relative group">
            <button
              type="button"
              className="bg-[#edf2f7] rounded-lg py-2 px-3 hover:scale-90 transition-transform cursor-pointer"
              onClick={update}
            >
              <RiRefreshLine className="text-xl text-blue-500" size={15} />
            </button>

            <div className="absolute hidden group-hover:block bg-[#333] text-white text-[13px] font-semibold px-3 py-1.5 rounded shadow-lg top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Update
              <div className="absolute w-3 h-3 bg-[#333] rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>}
        </div>

        {/* ---- Card Content ---- */}
        <div className="mt-4 w-full  overflow-visible">
          <input type="text" disabled={value.disabled} className='text-2xl font-bold capitalize focus:outline-none focus:border focus:border-gray-200 w-full' placeholder='Title' defaultValue={value.title} onChange={(e) => value.title = e.target.value} >
          </input>
         <textarea type="text"  disabled={value.disabled} className="mt-2 text-md text-slate-800 focus:outline-none focus:border focus:border-gray-200 w-full" placeholder='Details' defaultValue={value.detail}  onChange={(e) => value.detail = e.target.value}/>
        </div>
      </div>
    </div>
  )
}

export default Card
