import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar";
import UploadItemV2 from "../components/uploadItemV2";
import UploadNavbar from "../components/uploadNavbar";
import "../styles/projectlist.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const ProjectList = () => {

  const navigate = useNavigate()

  const uploadObj = [
    {
      category: "Youtube",
      description: "Youtube Video",
    },
    {
      category: "Spotify",
      description: "Spotify Podcast",
    },
    {
      category: "RSS",
      description: "RSS Feed",
    },
  ];
  return (
    <div className="projectlist-container">
      <Sidebar />
      <div className="projectlist-right">
        <UploadNavbar />
        <Typography className="projectList-heading">Sample Project</Typography>
        <Grid container spacing={10} className="uploadItem-grid">
          {uploadObj.map((upl) => (
            <Grid item>
              <UploadItemV2 />
            </Grid>
          ))}
        </Grid>
        <div className="files-attention">
          <Typography className="files-content">
            All files are processed! Your widget is ready to go!
          </Typography>
          <Button variant="contained" className="try-button">
            Try it out!
          </Button>
        </div>
        <div className="table-section">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">
                    Upload Date & Time&nbsp;(g)
                  </TableCell>
                  <TableCell align="center">Status&nbsp;(g)</TableCell>
                  <TableCell align="center">Actions&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup
                        variant="contained"
                        aria-label="Basic button group"  
                      >
                        <Button className="button-group1" variant="outlined" onClick={()=>{navigate('/edit')}}>Edit</Button>
                        <Button className="button-group2" variant="outlined">Delete</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
