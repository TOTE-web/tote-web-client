import SideBar from '../sidebar'

const BaseApp = ({ component }) => {
  return (
    <div className="w-full min-h-screen flex">
      <SideBar />
      {component}
    </div>
  )
}

export default BaseApp
