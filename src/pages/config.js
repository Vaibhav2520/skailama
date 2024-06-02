import { Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/sidebar";
import UploadNavbar from "../components/uploadNavbar";
import "../styles/config.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Green from "../images/Rectangle 71.png";
import Black from "../images/Rectangle 72.png";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Config = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="config-container">
      <Sidebar />
      <div className="config-right">
        <UploadNavbar />
        <Typography className="config">Configuration</Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="General" {...a11yProps(0)} className="tab"/>
              <Tab label="Display" {...a11yProps(1)} className="tab"/>
              <Tab label="Adavnaced" {...a11yProps(2)} className="tab"/>
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="chatbot-name-section">
              <Typography className="chatbot-name">Chatbot Name</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="chatbot-textfield"
              />
              <Typography className="lorem-class">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </Typography>
            </div>
            <br />
            <div className="chatbot-name-section">
              <Typography className="chatbot-name">Welcome Messages</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="chatbot-textfield"
              />
              <Typography className="lorem-class">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </Typography>
            </div>
            <br />
            <div className="chatbot-name-section">
              <Typography className="chatbot-name">
                Input Placeholder
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="chatbot-textfield"
              />
              <Typography className="lorem-class">
                Lorem ipsuim dolor sit Lorem ipsuim dolor sit
              </Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="primary-font-container">
              <div className="primary-container">
                <Typography className="primary-color">Primary Color</Typography>
                <div className="primary-color-picker">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="primary-textfield"
                    size="small"
                  />
                  <img
                    src={Green}
                    alt="Color-picker"
                    width="40"
                    height="40"
                    className="color-picker"
                  />
                </div>
                <Typography className="ipsum-class">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </Typography>
              </div>
              <div className="primary-container">
                <Typography className="primary-color">Font Color</Typography>
                <div className="primary-color-picker">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="primary-textfield"
                    size="small"
                  />
                  <img
                    src={Black}
                    alt="Color-picker"
                    width="40"
                    height="40"
                    className="color-picker"
                  />
                </div>
                <Typography className="ipsum-class">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </Typography>
              </div>
            </div>
            <br />
            <div className="font-size-chat-height-container">
              <div className="font-size-container">
                <Typography className="font-size">Font Size(in px)</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="font-size-textfield"
                  size="small"
                />
                <Typography className="dolor-class">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </Typography>
              </div>
              <div className="font-size-container">
                <Typography className="font-size">Font Size(in px)</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="font-size-textfield"
                  size="small"
                />
                <Typography className="dolor-class">
                  Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                </Typography>
              </div>
            </div>
            <br />
            <Divider></Divider>
              <Typography className="chat-icon-heading">Chat Icon</Typography>
            <div className="chat-icon-container">
              <div className="chat-icon">
                <Typography className="chat-icon-box">Chat Icon Box</Typography>
                <FormControl sx={{ m: 1, width: 300 }} size="small" className="form-control">
                  <InputLabel id="demo-multiple-name-label">Small</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChanges}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="chat-icon">
                <Typography className="chat-icon-box">Position on Screen</Typography>
                <FormControl sx={{ m: 1, width: 300 }} size="small" className="form-control">
                  <InputLabel id="demo-multiple-name-label">Bottom Right</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChanges}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <br/>
            <div className="distance-horizontal">
            <div className="distance-bottom-container">
                <Typography className="distance-bottom">
                    Distance from Bottom
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="distance-bottom-textfield"
                  size="small"
                />
            </div>
            <div className="distance-bottom-container">
                <Typography className="distance-bottom">
                   Horizontal Distance(in px)
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className="distance-bottom-textfield"
                  size="small"
                />
            </div>
           
            </div>
            <div className="upload-avatar">
            <Typography className="bot-icon">
                Bot Icon
            </Typography>
            <div className="avatar-button">
            <Avatar>
        <FolderIcon />
      </Avatar>
      &nbsp;&nbsp;
      <Button variant="contained" className="upload">
        Upload Image
      </Button>
            </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Config;
