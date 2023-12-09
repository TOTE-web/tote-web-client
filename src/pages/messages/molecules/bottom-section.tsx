
const BottomSection = () => {
  return (
    <div className="messages-bottom-section">
      <div className="progress-section">
        3.24 GB of 15 GB used
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div className="bg-primary h-2 rounded-full" style={{'width': '21.6%'}}></div>
        </div>
      </div>
      <div className="activity-section">
        Last account activity: 2 hours ago
        <svg className='w-4 h-4 ml-1 fill-gray-400 dark:fill-gray-300' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  )
}

export default BottomSection
