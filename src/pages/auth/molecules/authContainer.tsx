import AuthHeader from './authHeader';
import AuthSider from './authSider';
import '../stylesheets/auth.scss';

const AuthContainer = ({ title, children }) => {
  return (
    <div className='auth-page'>
    <div className='hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen'>
      <AuthSider />
    </div>
    <div className='auth-form-container'>
      <AuthHeader />
      <div className='mt-10 mb-5 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2x'>
        <h2 className='text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold'>
          {title}
        </h2>
        <div className='mt-12'>
          {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default AuthContainer;
