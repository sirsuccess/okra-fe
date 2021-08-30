
import './index.scss';
import Sidebar from '../SideBar';
import Navbar from '../Navbar';

function DashboardLayout() {

  return (
    <div className="layout">
      <Navbar/>
      <div className="layout__content">
        <Sidebar/>
        <div className="layout__content-main">
          <h1>YOUR PERFORMANCE</h1>
            <div className="layout__content-main-text">
              Maximise your revenue from every interaction with machine learning insights
            </div>

        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
