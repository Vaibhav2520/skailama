import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/projects.scss";
import ProjectItem from "../components/projectItem";
import Plus from "../images/Vector.png";
import CreateProjectModal from "../components/modals/createProjectModal";

const Projects = () => {
    const object = [
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },
        {
            Name:"Sample Project",
            Episode:"4 Episodes",
            Edit:"Last Edited a week ago"
        },

    ];

    const[createProjectModal , setCreateProjectModal] = useState(false)

  return (
    <>
      <Navbar />
      <div className="project-container">
        <div className="project-section">
          <Typography className="project-heading">Projects</Typography>
          <Button variant="contained" className="create-project-button" onClick={()=>{
            setCreateProjectModal(true)
        }}>
          <img src={Plus} alt="Plus" width="30" height="30" className="plus"/>
            Create New Project
          </Button>
        </div>
        <Grid container className="grid-container" spacing={10}>
        {
            object.map(obj =>(
          <Grid item >
            <ProjectItem />
          </Grid>
            ))
        }
        </Grid>
      </div>
      <CreateProjectModal openModal={createProjectModal} toggleModal= {setCreateProjectModal}/>  
    </>
  );
};

export default Projects;
