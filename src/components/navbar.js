import { Typography } from '@mui/material'
import React from 'react'
import "../styles/navbar.scss"
import Setting from "../images/Icon.png";
import Logo from "../images/directright.png";
import Notification from "../images/notifications.png";


const Navbar = () => {
  return (
    <div>
        <div className="navbar-container">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" width="40" height="40" />
          <Typography className="lama">LAMA.</Typography>
        </div>
        <div className="navbar-right">
          <img src={Setting} alt="setting" width="40" height="40" />
          <img src={Notification} alt="Notification" width="40" height="40" />
        </div>
      </div>
    </div>
  )
}

export default Navbar