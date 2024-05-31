import React from 'react';
import Home from "../images/home.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import DropDown from "../images/arrow_drop_down.png";
import Flag from "../images/Ellipse 2.png";
import Notification from "../images/notifications.png";
import "../styles/uploadNavbar.scss";
import { Typography } from '@mui/material';

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

const UploadNavbar = () => {
  return (
    <div className="upload-navbar">
          <div className="upload-navbar-left">
            <img src={Home} alt="Home" width="45" height="45" />
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link />
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
            <img src={DropDown} alt="DropDown" width="50" height="50" />
            <Typography>EN</Typography>
            <img src={Flag} alt="Flag" width="40" height="40" />
            <img src={Notification} alt="Notification" width="40" height="40" />
          </div>
        </div>
  )
}

export default UploadNavbar