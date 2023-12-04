import Header from '../header'
import SideBar from '../sidebar'
import './styles.scss';

const BaseApp = ({ component }) => {
  return (
    <div className='page-container'>
      <Header />
      <div className="main-container">
        <SideBar />
        <div className="side-page-container">
          {component}
        </div>
      </div>
    </div>
  )
}

export default BaseApp
