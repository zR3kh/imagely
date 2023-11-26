import settings from '../../images/settings.png'

export default function Header(props) {

  /**
   * Show or hide sidebar menu based on icon click
   */
  const showSidebar = () => {
    props.setSidebar(prevIsSidebarDisplayed => !prevIsSidebarDisplayed)
  }

  return (
    <div className={`flex items-center justify-between ${props.darkMode ? 'dark:bg-slate-600' : 'bg-slate-300'}	p-5 shadow-xl font-bold`}    >
        <div className='sm:flex-1 z-10'>
          <img 
            ref={props.innerRef} 
            onClick={showSidebar} 
            className='cursor-pointer' 
            src={settings} 
            alt="settings-icon" /></div>
        <h1 className=  {`text-4xl sm:text-5xl font-bold underline ${props.darkMode ? 'dark:text-white' : 'text-violet-600'}`}>Imagely</h1>
        <div className='sm:flex-1'></div>
    </div>
  )
}
