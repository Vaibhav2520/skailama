import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Youtube from "../../images/Frame 1.png"
import {  TextField } from '@mui/material';
import "../../styles/uploadvideoModal.scss";
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:2,
    boxShadow: 24,
    p: 4,
  };

const UploadvideoModal = (props) => {
    const {openModal} = props
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='upload-modal'>
          <img src={Youtube} alt="Youtube" width="60" height="60"/>
          <Typography className="upload-modal-content">
            Upload from Youtube
          </Typography>
            </div>
          <div className="link-container">
          <Typography className="link">Link</Typography>
          <TextField
              id="outlined-basic"
              variant="outlined"
              className="link-textfield"
            />   
            </div>
            <div className="description-container">
            <Typography className="description">
                Description
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="description-textfield"
            />         
            </div>
            <Button variant="contained" className="upload-button">Save</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default UploadvideoModal