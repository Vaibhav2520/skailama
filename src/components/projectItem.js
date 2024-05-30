import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/projectItem.scss";



const ProjectItem = () => {
  return (
    <div >
      <Card className="projectItem-container">
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
