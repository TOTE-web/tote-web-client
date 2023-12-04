import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, CompanyLogo, CrossIcon, DarkModeIcon, HelpIcon, SideBarToggleIcon, WhiteModeIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { SelectorState } from '../../redux/interfaces';
import './styles.scss';
import { setSidebarState } from '../../redux/reducers/sidebarSlice';

const notifications = [
  'hey bro how are you ?',
  'hey bro how are you ?',
  'hey bro how are you ?',
  'hey bro how are you ?',
  'hey bro how are you ?',
];

const Header = () => {
  const sidebar = useSelector((state: SelectorState)=> state?.sidebar);
  const dispatch = useDispatch();
  const [isShowMsg, setIsShowMsg] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  const handleSidebar = () => {
    dispatch(setSidebarState(!sidebar.isOpened));
  }

  const themeToggler = (theme = '') => {
    document.body.setAttribute('data-mode', theme);
  };

  return (
    <header className='header-container'>
      <div className='logo-container'>
        <div className='sidebar-icons'> 
          <SideBarToggleIcon className={`sidebar-toggler ${sidebar.isOpened ? 'opened' : ''}`} onClick={handleSidebar} /> 
          <CrossIcon className={`cross-icon ${sidebar.isOpened ? 'opened' : ''}`} onClick={handleSidebar} />
        </div>
        <Link to='/' className='company-logo-container'>
          <CompanyLogo className='company-logo' />
          <h1 className='company-name'>TOTE WEB</h1>
        </Link>
      </div>
      <div className='flex justify-center items-center gap-6'>
        <Link to='/support' target='_blank'>
          <HelpIcon className="w-7 h-7 cursor-pointer dark:fill-gray-300" pathClassName="fill-gray-400 dark:fill-gray-300" />
        </Link>
        <DarkModeIcon className='w-6 h-6 hidden dark:inline-block cursor-pointer' onClick={()=> themeToggler('light')} />
        <WhiteModeIcon className='w-6 h-6 dark:hidden cursor-pointer' onClick={()=> themeToggler('dark')} />
        <div className='relative'>
          <BellIcon className="w-6 h-6 cursor-pointer" onClick={()=> setIsShowMsg((prev)=> !prev)} pathClassName="fill-gray-400 dark:fill-gray-300" />
          <div className={`${!isShowMsg ? 'hidden' : ''} absolute min-w-[20rem] p-3 rounded-lg top-8 -right-14 z-50 shadow-lg shadow-gray-500 bg-gray-100 dark:bg-gray-800`}>
            <div className='flex flex-col gap-1'>
              {notifications.map((item)=> (
                <div key={item} className='w-full border-b border-slate-500 py-1 text-sm'>{item}</div>
              ))}
            </div>
            <Link to='/messages' onClick={()=> setIsShowMsg((prev)=> !prev)} className='inline-block w-full text-center text-sm py-1 bg-gray-400 dark:bg-gray-400 text-white rounded-md cursor-pointer mt-4'>
              View All Messages
            </Link>
          </div>
        </div>
        <div className='relative'>
          <img src="/person.jpg" alt="person-img" className='w-7 h-7 rounded-full cursor-pointer' onClick={()=> setIsShowProfile(prev=> !prev)} />
          <div className={`${!isShowProfile ? 'hidden' : ''} absolute min-w-[10rem] p-3 rounded-lg top-8 right-0 z-50 shadow-lg shadow-gray-500 bg-gray-100 dark:bg-gray-800`}>
            <div className='text-xs flex flex-col gap-2'>
              <span className='w-full'>Neil Kumar</span>
              <span className='w-full'>Neil@growpital.com</span>
            </div>
            <Link to='/profile'  onClick={()=> setIsShowProfile(prev=> !prev)} className='inline-block w-full mt-2 text-xs text-blue-700 cursor-pointer'>View Profile</Link>
            <div className='w-full mt-2 text-red text-xs cursor-pointer'>Logout</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
