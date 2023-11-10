import InputBox from '../molecules/inputBox';

const ForgotEmail = ({ setIsCodeSent }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCodeSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className='text-lg font-bold text-gray-700 tracking-wide mb-2'>Email Address</div>
        <InputBox type='email' placeholder='john@example.com' className={undefined} value={undefined} onChange={undefined} />
      </div>

      <div className='mt-10'>
        <button className='text-lg bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-500 shadow-lg'>
          Send Verification Code
        </button>
      </div>
    </form>
  )
}

export default ForgotEmail;
