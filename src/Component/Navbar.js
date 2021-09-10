import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex"
  },
  Toolbar:{
           variant:"grey",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(13),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white"
    }
  }
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Poll Management System
          </Typography>
          <div className={classes.navlinks}> 
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/poll" className={classes.link}>
              Poll
            </Link>
            <Link to="/Signout" className={classes.link}>
              Signout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
