import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
export default function Topbar() {
  return (
    <div className='topbar'>
      
      <div className='topbarWrapper'>
      
        <div className="topLeft">
          <span className="logo">Wellcome Amir</span>
        </div>
        <div className='inputTop'>
          <input type="search" placeholder='Search For Something...' style={{position:"relative", border:"2px solid blue",
            width:"300px",borderRadius:"30px",outline:"none"
          }}></input>
          <SearchIcon style={{marginRight:"40px",position:"absolute",cursor:"pointer", float: "right"}}/>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
    <NotificationsIcon/>
    <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
    <LanguageIcon/>
    <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
    <SettingsIcon/>
          </div>
          <img src='amir.jpg' className='topAvatar'></img>
        </div>
      </div>
      </div>
  )
}
