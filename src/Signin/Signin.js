import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink} from "react-router-dom";
import {login} from '../Actions/Actions'
import { connect } from 'react-redux';


const mapDispatchToProps = {
  login,
 };

 const bpitt = {
   first : 'Brad',
   last : 'Pitt',
   age : 55,
   gender : 'Male',
   email : 'i-dont-know@gmail.com',
   phone : '1241241248',
   username : 'bpitt',
   avatar: require('../Images/bradpitt.png'),
   score: 600
 }

 const janiston = {
   first : 'Jennifer',
   last : 'Aniston',
   age : 50,
   gender : 'Female',
   email : 'i-hate-brad-pitt@gmail.com',
   phone : '1231231234',
   username: 'janiston',
   avatar: require('../Images/janiston.jpg'),
   score: 600
 }



 const styles = {
  
  dialog: {
      minWidth: 500,
      minHeight: 300,
  },
  dialogTitle: {
      backgroundColor:"#3b5998",
      '& h2': {color: 'white',}
  },
  dialogContent: {
    marginTop: 30,
    minWidth: 350,
    minHeight: 40,
  },
  dialogText: {
    fontSize: 18,
    color: "black",
  },
};



class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      warning1: false,
      warning2: false,
      warning3: false,
    }
  }

  handleSignin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "") {
      this.setState({warning1: true});
    }
    else if (password === "") {
      this.setState({warning2: true});
    } else if (username === "bpitt") {
      //change redux state
      this.props.login(bpitt)
      this.props.history.push('Explore')
    } else if (username === "janiston") {
      //change redux state
      this.props.login(janiston)
      this.props.history.push('Explore')
    }
    else {
      this.props.history.push('Explore')
      // this.setState({warning3: true});
    }
  }

  handleWarning1Close() {
    this.setState({warning1: false});
  }

  handleWarning2Close() {
    this.setState({warning2: false});
  }

  handleWarning3Close() {
    this.setState({warning3: false});
  }

  render() {
    const { classes } = this.props;
    console.log('signin page props', this.props)
    return (
      <div className="Signin">
        <header className="Signin-header">
          <p> SIGN IN </p>
          <TextField
            className = "Standard-input"
            label="Username:"
            type="search"
            margin="normal"
            id="username"
            style={{
              width: "300px"
            }}
          />
          <div className="Password">
            <TextField
              className = "Standard-input"
              label="Password:"
              type="password"
              autoComplete="current-password"
              margin="normal"
              id="password"
              style={{
                width: "300px"
              }}
            />
          {/* <p>Forgot Password</p> */}
          </div>
          <Button variant="contained" color="primary" id="sign-in" onClick={() => this.handleSignin()}>
            Sign in
          </Button>
          <div id="sign-up-div">
            <p id="sign-up-p">Don't have an account?</p>
            </div>
            <div>
            <NavLink to="/Signup" style={{textDecoration:'none'}} >
            <Button variant="contained" color="secondary" id="sign-up">
              Sign up
            </Button>
            </NavLink>

          </div>
        </header>

        {/* username empty warning */}
        <Dialog open={this.state.warning1} onClose={() => this.handleWarning1Close()}>
          <DialogTitle className={classes.dialogTitle}>
            {"Please Check Your Username!"}
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              Username cannot be empty!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleWarning1Close()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* password empty warning */}
        <Dialog open={this.state.warning2} onClose={() => this.handleWarning2Close()} >
          <DialogTitle className={classes.dialogTitle}>
            {"Please Check Your Password!"}
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              Password cannot be empty!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleWarning2Close()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* user not found warning */}
        <Dialog open={this.state.warning3} onClose={() => this.handleWarning3Close()}>
          <DialogTitle className={classes.dialogTitle}>
            {"User Not Found!"}
          </DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              The attempted login request has been denied.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleWarning3Close()} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Signin));
