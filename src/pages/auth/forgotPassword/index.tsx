import { useState } from 'react';
import AuthContainer from '../molecules/authContainer';
import { Link } from 'react-router-dom';
import ForgotEmail from './forgotEmail';
import ChangePassword from './changePassword';

const ForgotPassword = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);

  return (
    <AuthContainer title="Forgot Password">
      {isCodeSent ? <ChangePassword /> : <ForgotEmail setIsCodeSent={setIsCodeSent} />}
      <div className='mt-8 text-[1rem] font-display font-semibold text-gray-700 text-center'>
        Go Back To{' '}
        <Link className='cursor-pointer text-indigo-600 hover:text-indigo-800' to='/log-in'>Login</Link>
      </div>
    </AuthContainer>
  )
}

export default ForgotPassword;
