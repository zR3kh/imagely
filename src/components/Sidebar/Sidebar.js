import React from 'react'

export default function (props) {

  /**
   * Open or close menu sections
   * @param {string} menu 
   */
  const handleMenu = (menu) => {
    switch(menu) {
      case 'settings':
        props.setSettings(prevIsSettingsOpen => !prevIsSettingsOpen)
        break;
    }
  }

  return (
    props.showSidebar &&
    <div ref={props.innerRef} id='sidebar' className='bg-slate-500 h-screen lg:w-1/5 sm:w-1/4 fixed border-r-2 border-black'>
        <div className='text-white p-1 lg:pl-5 sm:pl-2 bg-slate-900 absolute top-64 w-full cursor-pointer' onClick={() => handleMenu('settings')}>
            <p className='font-bold'>Settings</p>
        </div>
    </div>

  )
}
