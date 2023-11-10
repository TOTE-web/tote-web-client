import AuthContainer from '../molecules/authContainer';
import InputBox from '../molecules/inputBox';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <AuthContainer title="Welcome Back">
      <form>
        <div>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Email Address</div>
          <InputBox type='email' placeholder='john@example.com' className={undefined} value={undefined} onChange={undefined} />
        </div>
        <div className='mt-8'>
          <div className='flex justify-between items-center mb-2'>
            <div className='text-lg font-bold text-gray-700 tracking-wide'>Password</div>
            <div>
              <Link className='text-[1rem] font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer' to='/forgot-password'>
                Forgot Password?
              </Link>
            </div>
          </div>
          <InputBox type='password' placeholder='Enter your password' className={undefined} value={undefined} onChange={undefined} />
        </div>
        <div className='mt-10'>
          <button className='text-lg bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-500 shadow-lg'>
            Log In
          </button>
        </div>
      </form>
      <div className='mt-8 text-[1rem] font-display font-semibold text-gray-700 text-center'>
        {'Don\'t'} have an account ?{' '}
        <Link className='cursor-pointer text-indigo-600 hover:text-indigo-800' to='/create-account'>Create Account</Link>
      </div>
    </AuthContainer>
  )
}

export default Login
