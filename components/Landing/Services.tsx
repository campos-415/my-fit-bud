import React, { ReactNode } from 'react'
import { BsSearch } from "react-icons/bs"

interface Props {
  title: string;
  text: string;
  icon: ReactNode;
}

const Services = ({title, text, icon}: Props) => {
  return (
    <>
      <div className=' space-y-3 flex flex-col items-center justify-center border p-6 
      border-slate-600 hover:border-specialColor hover:cursor-pointer
      focus:border-specialColor focus:outline-none ' tabIndex={0}>
        <h2 className='font-semibold text-lg'>
        {title}
        </h2>
        <div className='text-specialColor'>
          {icon}
        </div>
        <p className='text-sm text-center w-32 h-16'>{text}</p>
      </div>
    </>
  )
}

export default Services