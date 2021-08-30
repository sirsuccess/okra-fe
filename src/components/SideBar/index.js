
import './index.scss';
import {
DashboardOutlined,
DotChartOutlined
} from '@ant-design/icons';
import { NavLink } from "react-router-dom"

function Sidebar() {

  const menu = [
    {
      id: 1,
      icon: <DashboardOutlined />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      icon: <DotChartOutlined />,
      title: "Analytics",
      link: "/analytics",
    },
  ]
  return (
    
        <div className="sidebar">
        <ul>
        {
          menu.map((item,index)=>(
            <li key={index}>
              <NavLink to={item.link} className="menu" activeClassName="active">

              {item.icon} <div className="menu__item">{item.title}</div>
              </NavLink>
            </li>
          ))
        }
      </ul>
        </div>
     
  );
}

export default  Sidebar;
