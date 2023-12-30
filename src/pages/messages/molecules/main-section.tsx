import Checkbox from '../../../components/ui/checkbox';

const MessagesList = () => {
  return (
    <div className="w-full p-2 flex justify-between">
      <div className="flex items-center w-[80%]">
        <Checkbox className="w-4 h-4 mr-2 rounded border-primary cursor-pointer" />
        <svg className="w-5 h-5 mr-3 cursor-pointer fill-none stroke-gray-400 dark:stroke-gray-300 hover:stroke-yellow-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
        <div className="flex items-center w-[10%] gap-2 mr-3">
          <img src="/person.jpg" alt="person" className="w-5 h-5 rounded-full sm:hidden" />
          <span className='truncate'>Sumit baghel</span>
        </div>
        <div className="truncate w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa explicabo ratione corrupti placeat sunt suscipit officia quo blanditiis. Ducimus cupiditate voluptate obcaecati voluptas at est, amet maiores odio aliquam sed consectetur. Assumenda illum, adipisci placeat aliquid facere doloribus odio maxime perspiciatis soluta a porro officiis praesentium eligendi ipsam, dolorum voluptate! Ipsam, quos, minima tempora cumque ducimus sequi dolore expedita est mollitia voluptatum asperiores illum nobis fuga veritatis aperiam cupiditate? Cum ducimus deleniti debitis repellendus earum? Quos reprehenderit unde, itaque voluptatum cupiditate iste sint nemo asperiores officia totam dicta magni. Quaerat natus reiciendis consequuntur aliquid quasi similique expedita assumenda neque sit.</div>
      </div>
      <div className='w-max text-center'>4:45 PM</div>
    </div>
  )
};

const MainSection = () => {
  return (
    <div className="messages-main-section">
      {Array.from({ length: 50 }, ()=> '1').map((item, index)=> (
        <MessagesList key={item + index} />
      ))}
    </div>
  )
}

export default MainSection
