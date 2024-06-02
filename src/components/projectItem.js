import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/projectItem.scss";
import { useNavigate } from "react-router-dom";



const ProjectItem = () => {
  const navigate = useNavigate();

  const handleOpenProject = () => {
    navigate("/projectlist");
  }

  return (
    <div >
      <Card className="projectItem-container" onClick={handleOpenProject}>
        <CardContent className="projectItem-content">
          <div className="sp-section">
            <Typography className="sp">SP</Typography>
          </div>
          <div className="card-right">
            <Typography className="sample-project">Sample Project</Typography>
            <Typography className="episodes">4 Episodes</Typography>
          <Typography className="last-edit">Last edited a week ago</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectItem;
