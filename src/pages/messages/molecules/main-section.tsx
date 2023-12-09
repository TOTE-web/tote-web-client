import Checkbox from '../../../components/ui/checkbox';

const MainSection = () => {
  return (
    <table className="messages-main-section">
      <tbody>
        <tr className="w-full p-2 flex">
          <td className="flex justify-between items-center w-1/5">
            <Checkbox id='' className="w-4 h-4 rounded border-primary cursor-pointer" />
            <svg className="w-5 h-5 cursor-pointer fill-none stroke-gray-400 dark:stroke-gray-300 hover:stroke-yellow-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </td>
          <td className="flex justify-between items-center w-36 gap-2">
            <img src="/person.jpg" alt="person" className="w-5 h-5 rounded-full" />
            Sumit baghel
          </td>
          <td className="w-48">Hey bro how are you doing ?</td>
          <td>17 April 2023 at 4:45 PM</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MainSection
