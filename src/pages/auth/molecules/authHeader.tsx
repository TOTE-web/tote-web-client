import { AuthHeadLogo } from '../icons';

const AuthHeader = () => {
  return (
    <div className='auth-header'>
      <div className='cursor-pointer flex items-center'>
        <AuthHeadLogo className='fill-none' />
        <div className='auth-header-title'>
          Tote Web
        </div>
      </div>
    </div>
  )
}

export default AuthHeader;
