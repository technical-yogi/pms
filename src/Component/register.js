import React from "react";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import Form from './Form';
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import axios from "axios";
import { setName, setPwd, setRule } from "../actions/pmsaction";
import { useDispatch } from "react-redux";
function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
    role: ""
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
      if(credentials.username && credentials.password && credentials.role){
        dispatch(signUpRequest({...credentials}))
      }
  }

  //api work will
  // const [apiData, setapiData] = useState([]);
  //   const[username,setname] =useState('');
  //   const[password,setpassword] =useState('');
  //   const[role,setrole] =useState('');
  const handleUsername = (e, key) => {
    // dispatch(setName(e.target.value));
    setCredentials({ ...credentials, [key]: e.target.value });
  };

  console.log(credentials.username, "asdfghjkl", credentials.password);

  const handleChang = e => {
    dispatch(setPwd(e.target.value));
  };

  const handleChan = e => {
    dispatch(setRule(e.target.value));
  };

  // const apicall = async ()=>{
  //  // useEffect(() => {
  //      await axios.get(`https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`).then(({data}) => {
  // // i think no need to store it
  //      }).catch((err) => {
  //         console.warn(err)
  //      })
  //})   https://secure-refuge-14993.herokuapp.com/login?username=amit&password=some

  //api work done
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center">
          <div className="p-3 m-4 shadow-lg rounded-3">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Register" {...a11yProps(0)} />
                <Tab label="Log in " {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            {/* <button className='btn btn-dark btn-block btn-lg'>Signup</button> */}
            <TabPanel value={value} index={0}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="filled"
                  required
                  onChange={e => handleUsername(e, "username")}
                />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                  onChange={e => handleUsername(e, "password")}
                  //   onChange={handleChang}
                />
                <TextField
                  label="role"
                  variant="filled"
                  required
                  onChange={e => handleUsername(e, "role")}
                //   onChange={handleChan}
                />
                <div>
                  <Button variant="contained">Cancel</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Signup
                  </Button>
                </div>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <form className={classes.form}>
                <TextField label="Username" variant="filled" required />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                />
                <div>
                  <Button variant="contained">Cancel</Button>
                  <Button type="submit" variant="contained" color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
