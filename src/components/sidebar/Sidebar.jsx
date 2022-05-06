import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span></li>
                <p className="title">List</p>
                <li><PersonRoundedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li><CategoryIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li><ReceiptRoundedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li><LocalShippingRoundedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">Useful</p>
                <li><QueryStatsRoundedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li><CategoryIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">Service</p>
               <li><QueryStatsRoundedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li><QueryStatsRoundedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li><QueryStatsRoundedIcon className="icon"/>
                    <span>Setting</span>
                </li>
                <p className="title">User</p>
                <li><QueryStatsRoundedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li><QueryStatsRoundedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>  
    )
}

export default Sidebar