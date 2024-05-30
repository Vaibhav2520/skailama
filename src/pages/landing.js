import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/landing.scss";
import Setting from "../images/Icon.png";
import Logo from "../images/directright.png";
import Notification from "../images/notifications.png";
import Image from "../images/image.png";
import Plus from "../images/Vector.png"
import EmailModal from "../components/modals/emailModal";

const Landing = () => {
    const[openEmailModal , setOpenEmailModal] = useState(false);
    
  return (
    <>
      <div className="main-container">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" width="40" height="40" />
          <Typography className="lama">LAMA.</Typography>
        </div>
        <div className="navbar-right">
          <img src={Setting} alt="setting" width="40" height="40" />
          <img src={Notification} alt="Notification" width="40" height="40" />
        </div>
      </div>
      <div className="main-section">
        <Typography className="main-heading">Create a New Project</Typography>
        <img
          src={Image}
          alt="Landing"
          width="400"
          height="250"
          className="main-image"
        />
        <Typography className="main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </Typography>
        <Button variant="contained" className="main-button">
        <img src={Plus} alt="Plus" width="30" height="30" className="plus"/>
        Create a New Project
        </Button>
      </div>
      <EmailModal openModal={true}/>
    </>
  );
};

export default Landing;
