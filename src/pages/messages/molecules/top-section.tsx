import Checkbox from '../../../components/ui/checkbox';

const TopSection = () => {
  return (
    <div className="messages-top-section">
      <div className="messages-top-side1">
        <div className="messages-top-checkbox">
          <Checkbox id='' className="w-4 h-4 rounded border-primary cursor-pointer" />
        </div>
        <div className="flex justify-center items-center gap-3 border-x border-gray-200 dark:border-gray-400 px-2">
          <div className="cursor-pointer">
            <svg className="w-6 h-6 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          </div>
          <div className="cursor-pointer">
            <svg className="w-6 h-6 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </div>
          <div className="cursor-pointer">
            <svg className="w-6 h-6 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
          </div>
          <div className="cursor-pointer">
            <svg className="w-6 h-5 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
          </div>
        </div>
        <div className="mx-3">
            <div className="pl-1 pr-2 cursor-pointer py-1 bg-primary text-white rounded-md flex gap-0 justify-center items-center text-xs">
              <svg className="h-5 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
              Compose
            </div>
        </div>
      </div>
      <div className='flex items-center mr-4'>
        <div className='cursor-pointer mr-2'>
          <svg className="h-6 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </div>
        <div className='cursor-pointer mr-2'>
          <svg className="h-6 fill-gray-400 dark:fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </div>
        <span className='text-xs dark:text-gray-300 text-gray-400'>Show <span className='text-black dark:text-white'>1-25</span> of <span className='text-black dark:text-white'>2290</span></span>
      </div>
    </div>
  )
}

export default TopSection
