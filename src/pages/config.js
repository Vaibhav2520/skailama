import { Typography } from '@mui/material';
import React from 'react'
import Sidebar from "../components/sidebar";
import UploadNavbar from '../components/uploadNavbar';
import "../styles/config.scss"

const Config = () => {
  return (
    <div className='config-container'>
        <Sidebar />
        <div className='config-right'>
        <UploadNavbar />
        <Typography className="config">Configuration</Typography>
        </div>
    </div>
  )
}

export default Config