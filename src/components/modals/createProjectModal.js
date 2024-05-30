import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../../styles/baseModal.scss";
import { Button } from "@mui/material";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius:2,
    boxShadow: 24,
    p: 4,
  };


const CreateProjectModal = (props) => {
    const { openModal , toggleModal } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => toggleModal(false);
  return (
    <div>
        <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="email-heading">Create Project</Typography>
          <div className="content">
            <Typography className="email-content">Enter Project Name:</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="email-textfield"
            />
          </div>
          <div className="submit-cancel">
            <Button className="cancel-button" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" className="submit-button">
              Create
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateProjectModal