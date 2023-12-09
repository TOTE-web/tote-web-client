import BottomSection from './molecules/bottom-section';
import MainSection from './molecules/main-section';
import TopSection from './molecules/top-section';
import './styles.scss';

const Messages = () => {
  return (
    <div className="messages-page">
      <TopSection />
      <MainSection />
      <BottomSection />
    </div>
  )
}

export default Messages;
