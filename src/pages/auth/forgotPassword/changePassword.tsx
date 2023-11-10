import InputBox from '../molecules/inputBox';
import VerificationInput from '../molecules/verificationInput';

const ChangePassword = () => {
  return (
    <form>
      <div>
        <div className='text-lg text-center font-bold text-gray-700 tracking-wide mb-2'>Verification Code</div>
        <VerificationInput otp={undefined} setOtp={undefined} />
      </div>

      <div className='mt-8'>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Create New Password</div>
          <InputBox type='password' placeholder='Enter your password' className={undefined} value={undefined} onChange={undefined} />
        </div>
        <div className='mt-8'>
          <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Confirm New Password</div>
          <InputBox type='password' placeholder='Enter your password' className={undefined} value={undefined} onChange={undefined} />
        </div>

      <div className='mt-10'>
        <button className='text-lg bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-500 shadow-lg'>
          Change Password
        </button>
      </div>
    </form>
  )
}

export default ChangePassword;
