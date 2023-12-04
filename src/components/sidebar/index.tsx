import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import { AllIcons } from './icons';
import { listDetails } from '../../data/sidebarData.json';
import { useSelector } from 'react-redux';
import { SelectorState } from '../../redux/interfaces';

const SectionTitle = ({ title }) => (
  <li className="title-section">
    <div className="title-wrapper">
      <div className="title">{title}</div>
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
  const sidebar = useSelector((state: SelectorState)=> state?.sidebar);

  return (
    <div className={`sidebar-container ${sidebar.isOpened ? 'opened': ''}`}>
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
