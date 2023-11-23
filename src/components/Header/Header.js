import settings from '../../images/settings.png'

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-slate-300	p-5 shadow-xl font-bold'>
        <div className='flex-1'><img src={settings} alt="settings-icon" /></div>
        <h1 className='text-5xl font-bold underline text-violet-600'>Imagely</h1>
        <div className='flex-1'></div>
    </div>
  )
}
