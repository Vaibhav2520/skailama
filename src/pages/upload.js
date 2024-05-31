import React from "react";
import "../styles/upload.scss";
import Logo from "../images/directright.png";
import { Divider, Typography } from "@mui/material";
import Home from "../images/home.png";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import DropDown from "../images/arrow_drop_down.png";
import Flag from "../images/Ellipse 2.png"
import Notification from "../images/notifications.png";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const Upload = () => {
  return (
    <div className="upload-container">
      <div className="left-section">
        <div className="logo-lama">
          <img src={Logo} alt="Logo" width="40" height="40" />
          <Typography className="lama">LAMA.</Typography>
        </div>
        <Typography className="podcast-upload">Podcast Upload Flow</Typography>
        <div className="sidebar-content">
          <Typography className="numbers">1</Typography>
          <Typography className="list-content">Projects</Typography>
        </div>
        <div className="sidebar-content2">
          <Typography className="numbers2">2</Typography>
          <Typography className="list-content2">Widget Configurations</Typography>
        </div>
        <Divider className="divider"></Divider>
      </div>
      <div className="right-section">
      <div className="upload-navbar">
      <div className="upload-navbar-left">
        <img src={Home} alt="Home" width="45" height="45"/>
         <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link/>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Sample Project
        </Link>
        <Typography color="text.primary">Upload</Typography>
      </Breadcrumbs>
    </div>
      </div>
    <div className="upload-navbar-right">
    <img src={DropDown} alt="DropDown" width="50" height="50"/>
      <Typography>
        EN
      </Typography>
      <img src={Flag} alt="Flag" width="40" height="40" />
      <img src={Notification} alt="Notification" width="40" height="40" />
    </div>
      </div>
      </div>
    </div>
  );
};

export default Upload;
