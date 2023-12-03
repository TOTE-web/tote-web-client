import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import { AllIcons } from './icons';
import { listDetails } from '../../data/sidebarData.json';

const SectionTitle = ({ title }) => (
  <li className="px-5">
    <div className="flex flex-row items-center h-8">
      <div className="text-base font-semibold tracking-wide text-black">{title}</div>
    </div>
  </li>
);

const SectionItem = ({ to, iconName, text, isActive }) => (
  <li>
    <Link to={to} className={`sidebar-list-item ${isActive ? 'active' : ''}`}>
      <span className="sidebar-list-icon">
        {AllIcons[iconName]}
      </span>
      <span className="sidebar-list-text">{text}</span>
    </Link>
  </li>
);

const isPathsAreSame = (path: string = '', toPath: string = '') => {
  path = path.replace('/', '');
  toPath = toPath.replace('/', '');
  return path.toLowerCase() === toPath.toLowerCase();
};

const SideBar = () => {
  const { sections, lists } = listDetails;
  const { pathname } = useLocation();

  return (
    <div className="sidebar-container">
      <div className="sidebar-card">
        <ul className="sidebar-list">
          {sections.map((itemName)=> (
            <div key={itemName}>
              <SectionTitle title={itemName} />
              {lists[itemName].map((item)=> (
                <SectionItem iconName={item.iconName} text={item.text} to={item.path} key={item.iconName} isActive={isPathsAreSame(item.path, pathname)} /> 
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
