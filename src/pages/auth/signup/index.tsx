import AuthContainer from '../molecules/authContainer';
import InputBox from '../molecules/inputBox';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <AuthContainer title="Create Account">
      <form>
        <div className='flex justify-between'>
          <div className='w-[40%]'>
            <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>First Name</div>
            <InputBox type='text' placeholder='John' className={undefined} value={undefined} onChange={undefined} />
          </div>
          <div className='w-[40%]'>
            <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Last Name</div>
            <InputBox type='text' placeholder='Doe' className={undefined} value={undefined} onChange={undefined} />
          </div>
        </div>
        <div className='mt-8'>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Email Address</div>
          <InputBox type='email' placeholder='john@example.com' className={undefined} value={undefined} onChange={undefined} />
        </div>
        <div className='mt-8'>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Create Password</div>
          <InputBox type='password' placeholder='Enter your password' className={undefined} value={undefined} onChange={undefined} />
        </div>
        <div className='mt-8'>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Confirm Password</div>
          <InputBox type='password' placeholder='Enter your password' className={undefined} value={undefined} onChange={undefined} />
        </div>

        <div className='mt-10'>
          <button className='text-lg bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-500 shadow-lg'>
            Create Account
          </button>
        </div>
      </form>
      <div className='mt-8 text-[1rem] font-display font-semibold text-gray-700 text-center'>
        Already have an account ?{' '}
        <Link className='cursor-pointer text-indigo-600 hover:text-indigo-800' to='/log-in'>Login</Link>
      </div>
    </AuthContainer>
  )
}

export default SignUp;
