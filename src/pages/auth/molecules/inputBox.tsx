const InputBox = ({ className, type, placeholder, value, onChange }) => {
  return (
    <input
      className={`w-full text-black text-[1rem] py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-indigo-500 ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputBox;
