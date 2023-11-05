import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export const IntroField = () => {
  return (
    <div className=''>
      <form className='ml-12 mt-4 mb-5 flex items-center'>
        <input type='text' className='w-full px-3 py-3 border rounded-[3px] outline-blue-400'/>
        <button className='bg-blue-500 text-[12px] text-white font-bold p-3 ml-3 rounded-[2px]'><FontAwesomeIcon icon={ faRocket }/></button>
      </form>
    </div>
  )
}
