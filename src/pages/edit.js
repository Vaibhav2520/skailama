import { Button, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar";
import UploadNavbar from "../components/uploadNavbar";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import "../styles/edit.scss";

const Edit = () => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid #7E22CE;
        &:hover {
          border-color: #7E22CE};
        }
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `
  );

  return (
    <div className="edit-container">
      <Sidebar />
      <div className="edit-right">
        <UploadNavbar />
        <Typography className="edit-tanscript">Edit Transcript</Typography>
        <div className="discard-save">
        <Button variant="outlined" className="discard">Discard</Button>
        <Button variant="contained" className="save-exit">
            Save & Exit 
        </Button>
        </div>
        <Textarea
          aria-label="minimum height"
          minRows={20}
          value="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. 

In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains"
        />
      </div>
    </div>
  );
};

export default Edit;
