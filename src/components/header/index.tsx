import { Link } from 'react-router-dom';
import { BellIcon, CompanyLogo, CrossIcon, HelpIcon, SearchIcon, SideBarToggleIcon } from '../icons';

const Header = () => {
  return (
    <header className='flex justify-between items-center py-3 px-4 bg-white text-black border-b'>
        <div className='flex gap-8 justify-center items-center'>
          <div className='flex justify-center items-center w-auto h-auto mt-1 cursor-pointer'> 
            <SideBarToggleIcon className="w-7 h-7 block align-middle" /> 
            <CrossIcon className="w-6 h-6 align-middle inline-block md:hidden" />
          </div>
          <Link to='/' className='flex justify-center items-center gap-2 cursor-pointer'>
            <CompanyLogo className='w-6' />
            <h1 className='font-bold text-xl mt-1'>TOTE WEB</h1>
          </Link>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <form className='flex justify-center items-center gap-2 border-gray-400 border-2 border-solid py-1 px-2 rounded-lg w-[18rem] h-9'>
            <input type="text" name="search" id="search" placeholder='Search...' className='bg-transparent text-black text-sm dark:text-white focus:outline-none border-r border-gray-400 border-solid w-[15.5rem] h-full' />
            <SearchIcon className='w-4 h-4 fill-gray-500' pathClassName='fill-gray-500' />
          </form>
          <div className="w-[1px] h-[43px] border-l border-solid border-gray-400" />
          <div className='flex justify-center items-center gap-6'>
            <HelpIcon className="w-7 h-7 fill-gray-400 cursor-pointer" />
            <BellIcon className="w-6 h-6 cursor-pointer" />
            <img src="/person.jpg" alt="person-img" className='w-7 h-7 rounded-full cursor-pointer' />
          </div>
        </div>
    </header>
  )
}

export default Header;
