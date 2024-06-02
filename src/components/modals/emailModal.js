import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../../styles/baseModal.scss"
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
const EmailModal = (props) => {
  const { openModal , toggleModal } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => toggleModal(false);

  const [email,setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(email.length>0 && email_regex.test(email)) {
      localStorage.setItem("email",email);
      handleClose()
    } else {
      setErrorMessage("Please enter a valid email");
    }
   
  }

  

  return (
    <div>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="email-heading">Email</Typography>
          <div className="content">
            <Typography className="email-content">Enter Your Email:</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="email-textfield"
              onChange={handleEmailChange}
            />
            <span style={{color:'red'}}>{errorMessage}</span>
          </div>
          <div className="submit-cancel">
            <Button className="cancel-button" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" className="submit-button" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EmailModal;
