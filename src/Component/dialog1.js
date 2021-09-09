import React from 'react';
import Dialog from '@material-ui/core/Dialog';
//import Form from './Form';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
const Dialogg = ({ open, handleClose }) => {
const classes = useStyles();

  return (
    // props received from register.js
    <Dialog open={open} onClose={handleClose}>
      <form className={classes.form}>
      <TextField label="Username" variant="filled" required />
      <TextField label="Password" variant="filled" type="password" required />
      <TextField label="role" variant="filled" required />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
      </form>
    </Dialog>
  );
};

export default Dialogg;