import { Link } from 'react-router-dom';
import { BellIcon, CompanyLogo, CrossIcon, DarkModeIcon, HelpIcon, SideBarToggleIcon, WhiteModeIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { SelectorState } from '../../redux/interfaces';
import './styles.scss';
import { setSidebarState } from '../../redux/reducers/sidebarSlice';

const Header = () => {
  const sidebar = useSelector((state: SelectorState)=> state?.sidebar);
  const dispatch = useDispatch();

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
        <HelpIcon className="w-7 h-7 cursor-pointer dark:fill-gray-300" pathClassName="fill-gray-400 dark:fill-gray-300" />
        <DarkModeIcon className='w-6 h-6 hidden dark:inline-block cursor-pointer' onClick={()=> themeToggler('light')} />
        <WhiteModeIcon className='w-6 h-6 dark:hidden cursor-pointer' onClick={()=> themeToggler('dark')} />
        <BellIcon className="w-6 h-6 cursor-pointer" pathClassName="fill-gray-400 dark:fill-gray-300" />
        <img src="/person.jpg" alt="person-img" className='w-7 h-7 rounded-full cursor-pointer' />
      </div>
    </header>
  )
}

export default Header;
