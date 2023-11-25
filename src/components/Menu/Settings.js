import React from 'react'
import './Settings.css'

export default function Settings(props) {
  
  return (
    <div ref={props.innerRef} id='settings' className='bg-slate-500 h-screen fixed top-0 right-0 lg:w-4/5 sm:w-3/4'>
      <div className='flex flex-col ml-20 mt-20'>
        <div className='flex items-center'>
          <p className='mr-5 font-bold text-2xl	'>DarkMode : </p>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  )
}
