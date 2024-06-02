import { Button, TextField, Typography } from '@mui/material';
import React from 'react'
import Sidebar from "../components/sidebar";
import UploadNavbar from "../components/uploadNavbar";
import "../styles/setting.scss";
import Photo from "../images/Ellipse 21.png"
const Setting = () => {
  return (
    <div className='ac-setting-container'>
    <Sidebar />
        <div className='setting-right'>
        <UploadNavbar />
        <Typography className='ac-setting-heading'>Account Setting</Typography>
        <div className='ac-setting-section'>
            <img src={Photo} alt="Photo" width="180" height="180"/>
            <div className='user-name-container'>
            <Typography className='user-name'>
                User Name
            </Typography>
            <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="user-name-textfield"
                    size="small"
                  />
            </div>
            <div className='user-name-container'>
            <Typography className='user-name'>
                Email
            </Typography>
            <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="user-name-textfield"
                    size="small"
                  />
            </div>
        </div>

        <Typography className='subscriptions-heading'>Subscriptions</Typography>
        <div className="files-attention">
          <Typography className="files-content">
          You are currently on the Ques AI Basic Plan!
          </Typography>
          <Button variant="contained" className="try-button">
            Upragde
          </Button>
        </div>
          <Typography className='cancel-subscription'>
            Cancel subscription
          </Typography>
        </div>
    </div>
  )
}

export default Setting