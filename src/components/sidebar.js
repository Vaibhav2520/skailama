import { Divider, Typography } from "@mui/material";
import React from "react";
import Setiing from "../images/Icon button.png";
import Logo from "../images/directright.png";
import "../styles/sidebar.scss";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="left-section">
      <div className="logo-lama">
        <img src={Logo} alt="Logo" width="40" height="40" />
        <Typography className="lama">LAMA.</Typography>
      </div>
      <Typography className="podcast-upload">Podcast Upload Flow</Typography>
      <div className="sidebar-content" onClick={()=>{navigate('/projectlist')}}>
        <Typography className="numbers">1</Typography>
        <Typography className="list-content">Projects</Typography>
      </div>
      <div className="sidebar-content2" onClick={()=>{navigate('/config')}}>
        <Typography className="numbers2">2</Typography>
        <Typography className="list-content2">Widget Configurations</Typography>
      </div>
      <Divider className="divider"></Divider>
      <div className="setting-container">
        <div className="setting-section" onClick={()=>{navigate('/setting')}} >
          <img src={Setiing} alt="Setting" width="48" height="48" />
          <Typography className="setting">Settings</Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
