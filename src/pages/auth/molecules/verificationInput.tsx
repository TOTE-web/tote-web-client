import OtpInput from 'react-otp-input';

const VerificationInput = ({ otp, setOtp }) => {
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      containerStyle='gap-8 justify-around w-1/2 m-auto'
      renderInput={({ style, ...rest }) => <input {...rest} style={{} || style} placeholder='⁕' className='w-12 h-12 rounded-lg bg-transparent text-center text-black border border-gray-300 focus:outline-none focus:border-indigo-500' />}
    />
  )
}

export default VerificationInput;
