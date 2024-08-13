import React from 'react'
import './Sidebar.css'
import  LineStyleIcon  from '@mui/icons-material/LineStyle'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashbord</h3>
          <ul className='sidebarList'>
            <Link to='/'>
            <li className='sidebarListItem active'>
              <LineStyleIcon className='sidebaricon'/>
                Home
            </li>
            </Link>
            <li className='sidebarListItem'>
              <TimelineIcon className='sidebaricon'/>
              Analytics
              </li>
              <li className='sidebarListItem'>
              <TrendingUpIcon className='sidebaricon'/>
              Sales
              </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>  Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to="/users"className='link'>
            <li className='sidebarListItem active'>
              <PermIdentityIcon className='sidebaricon'/>
              Users
            </li>
            </Link>
            <Link to="/newUser"className='link'>
            <li className='sidebarListItem'>
              <StorefrontIcon className='sidebaricon'/>
              New User
              </li>
              </Link>
              <Link to="/products"className='link'>
              <li className='sidebarListItem'>
              <AttachMoneyIcon className='sidebaricon'/>
              Products
              </li>
              </Link>
              <Link to="/transaction" className='link'>
              <li className='sidebarListItem'>
              <BarChartIcon className='sidebaricon'/>
              Transaction
              </li>
              </Link>
              <li className='sidebarListItem'>
              < MailOutlineIcon className='sidebaricon'/>
              Reports
              </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <MailOutlineIcon className='sidebaricon'/>
              Users
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedIcon className='sidebaricon'/>
              New User
              </li>
              <li className='sidebarListItem'>
              <ChatBubbleOutlineIcon className='sidebaricon'/>
              Feedback
              </li>
              <li className='sidebarListItem'>
              <BarChartIcon className='sidebaricon'/>
              Transaction
              </li>
              <li className='sidebarListItem'>
              < MessageIcon className='sidebaricon'/>
              Message
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
