import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/landing.scss";
import Image from "../images/image.png";
import Plus from "../images/Vector.png";
import EmailModal from "../components/modals/emailModal";
import CreateProjectModal from "../components/modals/createProjectModal";
import Navbar from "../components/navbar";

const Landing = () => {
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const email = localStorage.getItem("email");
  useEffect(() => {
    
    if (!email) {
      setTimeout(() => {
        setOpenEmailModal(true);
      }, 2000);
    }
   
  }, []);

  const handleCreateProject = () => {
    if(email) {
      setCreateProjectModal(true);
    } else {
      alert("no account found");
    }
    
  }
  return (
    <>
      <Navbar />
      <div className="main-section">
        <Typography className="main-heading">Create a New Project</Typography>
        <img
          src={Image}
          alt="Landing"
          width="400"
          height="250"
          className="main-image"
        />
        <Typography className="main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco <br />
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in
        </Typography>
        <Button
          variant="contained"
          className="main-button"
          onClick={() => {
            handleCreateProject()
            
          }}
        >
          <img src={Plus} alt="Plus" width="30" height="30" className="plus" />
          Create a New Project
        </Button>
      </div>
      <EmailModal openModal={openEmailModal} toggleModal={setOpenEmailModal} />
      <CreateProjectModal
        openModal={createProjectModal}
        toggleModal={setCreateProjectModal}
      />
    </>
  );
};

export default Landing;
