import React from "react";
import "../styles/upload.scss";
import Logo from "../images/directright.png";
import { Button, Divider, Grid, Typography } from "@mui/material";
import UploadItem from "../components/uploadItem";
import Cloud from "../images/cloud_upload.png"
import UploadvideoModal from "../components/modals/uploadvideoModal";
import UploadNavbar from "../components/uploadNavbar";




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
      <UploadNavbar/>
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
