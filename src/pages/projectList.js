import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import Sidebar from '../components/sidebar'

import UploadItemV2 from '../components/uploadItemV2';
import UploadNavbar from '../components/uploadNavbar'
import "../styles/projectlist.scss";

const ProjectList = () => {
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
    <div className="projectlist-container">
        <Sidebar/>
        <div className="projectlist-right">
        <UploadNavbar/>
        <Typography className='projectList-heading' >
            Sample Project
        </Typography>
        <Grid container spacing={10} className="uploadItem-grid">
          {uploadObj.map((upl) => (
            <Grid item >
            <UploadItemV2/>
            </Grid>
          ))}
        </Grid>
        <div className="files-attention">
            <Typography className='files-content'>
            All files are processed! Your widget is ready to go!
            </Typography>
            <Button variant='contained'>
                Try it out!
            </Button>
        </div>
        </div>
    </div>
  )
}

export default ProjectList