import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Youtube from "../images/Frame 1.png";
import "../styles/uploadItemV2.scss"

const UploadItemV2 = (props) => {

    
    const {toggleModal} = props
  return (
    <div><Card className="uploadItem-container" elevation={5} onClick={() => toggleModal(true)}>
    <CardContent className="uploadItem-content">
        <img src={Youtube} alt="Youtube" width="60" height="60"/>
        <div className='uploadItem-right'>
        <Typography className='upload'>
            Upload
        </Typography>
        <Typography className='youtube-video'>
            Youtube Video
        </Typography>
        </div>
    </CardContent>
   </Card></div>
  )
}

export default UploadItemV2