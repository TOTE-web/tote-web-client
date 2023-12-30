import { useSelector } from 'react-redux';
import Header from '../header'
import SideBar from '../sidebar'
import './styles.scss';
import { SelectorState } from '@/redux/interfaces';

const BaseApp = ({ component }) => {
  const sidebar = useSelector((state: SelectorState)=> state?.sidebar);
  return (
    <div className='page-container'>
      <Header />
      <div className={`main-container ${sidebar.isOpened ? 'consize' : ''}`}>
        <SideBar />
        <div className="side-page-container">
          {component}
        </div>
      </div>
    </div>
  )
}

export default BaseApp
