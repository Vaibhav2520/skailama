import React, { useState } from "react";
import "../styles/upload.scss";
import { Button, Grid, Typography } from "@mui/material";
import UploadItem from "../components/uploadItem";
import Cloud from "../images/cloud_upload.png";
import UploadvideoModal from "../components/modals/uploadvideoModal";
import UploadNavbar from "../components/uploadNavbar";
import Sidebar from "../components/sidebar";

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

  const[uploadProject, setUploadProject] = useState(false)
  return (
    <div className="upload-container">
      <Sidebar />
      <div className="right-section">
        <UploadNavbar />
        <Typography className="upload-heading">Upload</Typography>
        <Grid container spacing={10} className="uploadItem-grid">
          {uploadObj.map((upl) => (
            <Grid item >
              <UploadItem toggleModal={setUploadProject}/>
            </Grid>
          ))}
        </Grid>
        <Typography className="OR">OR</Typography>
        <div className="cloud-upload">
          <img src={Cloud} alt="Cloud" width="90" height="90" />
          <Typography className="cloud-section">
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </Typography>
          <Typography className="cloud-format">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
          </Typography>
          <Button variant="outlined" className="select-file">
            Select File
          </Button>
        </div>
      </div>
      <UploadvideoModal openModal = {uploadProject} toggleModal={setUploadProject}/>
    </div>
  );
};

export default Upload;
