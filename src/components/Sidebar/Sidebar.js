import React from 'react'

export default function (props) {

  /**
   * Open or close menu sections
   * @param {string} menu 
   */
  const handleMenu = (menu) => {
    switch(menu) {
      case 'theme':
        props.openMenu(prevIsThemeOpen => !prevIsThemeOpen)
        break;
    }
  }

  return (
    props.showSidebar &&
    <div className='bg-slate-500 h-screen w-48 absolute inset-0'>
        <div className='text-white p-1 bg-slate-900 text-center absolute top-64 w-full cursor-pointer' onClick={() => handleMenu('theme')}>
            <p className='font-bold'>Theme</p>
        </div>
    </div>

  )
}
