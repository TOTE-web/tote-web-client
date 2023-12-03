import Header from '../header'
import SideBar from '../sidebar'

const BaseApp = ({ component }) => {
  return (
    <div className='w-full'>
      <Header />
      <div className="w-full min-h-screen max-h-screen flex overflow-hidden">
        <SideBar />
        <div className="w-full max-h-full">
          {component}
        </div>
      </div>
    </div>
  )
}

export default BaseApp
