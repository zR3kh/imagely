import React from 'react'

export default function ({innerRef, showSidebar, darkMode, likedImages}) {

  return (
    showSidebar &&
    <div ref={innerRef} id='sidebar' className='bg-slate-500 h-screen sm:w-64 w-48 fixed border-r-2 border-black z-10'>
        <div className='flex items-center justify-between text-white p-2 sm:pl-2 sm:pr-2 bg-slate-900 absolute top-48 w-full cursor-pointer'>
            <p className='font-bold'>DarkMode : </p>
            <label className="switch">
              <input onChange={(e) => darkMode.handleDarkMode(e)} type="checkbox" checked={darkMode.isDarkModeEnabled}/>
              <span className="slider"></span>
            </label>
        </div>
        <div className='flex items-center justify-between text-white p-2 sm:pl-2 sm:pr-2 bg-slate-900 absolute top-64 w-full cursor-pointer'>
            <p className='font-bold'>Favorites : </p>
            <label className="switch">
              <input onChange={(e) => likedImages.handleLikedImages(e)} type="checkbox" checked={likedImages.isLikedImages}/>
              <span className="slider"></span>
            </label>
        </div>
    </div>

  )
}
