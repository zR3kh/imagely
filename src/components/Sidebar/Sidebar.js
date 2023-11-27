import React from 'react'

export default function (props) {

  return (
    props.showSidebar &&
    <div ref={props.innerRef} id='sidebar' className='bg-slate-500 h-screen sm:w-64 w-48 fixed border-r-2 border-black z-10'>
        <div className='flex items-center justify-between text-white p-2 sm:pl-2 sm:pr-2 bg-slate-900 absolute top-48 w-full cursor-pointer'>
            <p className='font-bold'>DarkMode : </p>
            <label className="switch">
              <input onChange={(e) => props.handleDarkMode(e)} type="checkbox" checked={props.darkMode}/>
              <span className="slider"></span>
            </label>
        </div>
        <div className='flex items-center justify-between text-white p-2 sm:pl-2 sm:pr-2 bg-slate-900 absolute top-64 w-full cursor-pointer'>
            <p className='font-bold'>Favorites : </p>
            <label className="switch">
              <input onChange={() => props.isLikedImages(prevState => !prevState)} type="checkbox"/>
              <span className="slider"></span>
            </label>
        </div>
    </div>

  )
}
