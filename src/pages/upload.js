import React from "react";
import "../styles/upload.scss";
import Logo from "../images/directright.png";
import { Button, Divider, Grid, Typography } from "@mui/material";
import Home from "../images/home.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import DropDown from "../images/arrow_drop_down.png";
import Flag from "../images/Ellipse 2.png";
import Notification from "../images/notifications.png";
import UploadItem from "../components/uploadItem";
import Cloud from "../images/cloud_upload.png"
import UploadvideoModal from "../components/modals/uploadvideoModal";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Upload = () => {
  const uploadObj = [
    {
      category: "Youtube",
      description: "Youtube Video",
    },
    {
      category: "Spotify",
      description: "Spotify Podcast",
    },
    {
      category: "RSS",
      description: "RSS Feed",
    },
  ];
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
          <Typography className="list-content2">
            Widget Configurations
          </Typography>
        </div>
        <Divider className="divider"></Divider>
      </div>
      <div className="right-section">
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
        <Typography className="upload-heading">Upload</Typography>
        <Grid container spacing={10} className="uploadItem-grid">
          {uploadObj.map((upl) => (
            <Grid item>
              <UploadItem />
            </Grid>
          ))}
        </Grid>
        <Typography className="OR">OR</Typography>
        <div className="cloud-upload">
            <img src={Cloud} alt="Cloud" width="90" height="90"/>
            <Typography className="cloud-section">
            Select a file or drag and drop here (Podcast Media or Transcription Text)
            </Typography>
            <Typography className="cloud-format">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file 
            </Typography>
            <Button variant="outlined" className="select-file">
                Select File
            </Button>
        </div>
      </div>
      <UploadvideoModal openModal = {true}/>
    </div>
  );
};

export default Upload;
