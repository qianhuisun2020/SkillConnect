import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './Signup.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink} from "react-router-dom";
import Select from 'react-select';


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

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            warning1: false,
            warning2: false,
            warning3: false,
            warning4: false,
        }
    }

    handleSignup() {
        let username = document.getElementById("username").value;
        let password1 = document.getElementById("password1").value;
        let password2 = document.getElementById("password2").value;
        if (username === "") {
            this.setState({warning1: true});
        }
        else if (password1 === "" || password2 === "") {
            this.setState({warning2: true});
        }
        else if (password1 !== password2) {
            this.setState({warning3: true});
        }
        else {
            this.setState({warning4: true});
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

    handleWarning4Close() {
        this.setState({warning4:false})
        this.props.history.goBack();
    }


    render() {
        const { classes } = this.props;
        //options and styles for the selector
        var options = [
            {value: 'Art', label:'Art'},
            {value: 'History', label: 'History'},
            {value: 'Literature', label: 'Literature'},
            {value: 'Design', label: 'Design'},
            {value: 'Math', label: 'Math'},
            {value: 'Programming', label: 'Programming'},
            {value: 'Speech', label: 'LiterSpeechature'},
            {value: 'Sports', label: 'Sports'},
            {value: 'Others', label:'Others'}
        ]

        var selectorStyle = {
            control: base => ({
                ...base,
                fontSize:"18px",
            }),
            menu: base => ({
                ...base,
                fontSize:"14px",
            }),
        }

        return(
            <div className="Signup">
                <header className="Signup-header">
                
                    <p> SIGN UP</p>
                    <TextField
                        className = "Standard-input"
                        label="Username:"
                        type="search"
                        margin="normal"
                        id="username"
                    />
                    <TextField
                        className = "Standard-input"
                        label="Password:"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        id="password1"
                    />
                    <TextField
                        className = "Standard-input"
                        label="Confirm Password:"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        id="password2"
                    />

                    <p id="Selector-title">Field of Interests:</p>
                    <Select className = "Selector" options = {options} isMulti styles={selectorStyle}/>
                    
                    <Button variant="contained" color="primary" id="submit" onClick={() => this.handleSignup()}>
                        Submit
                    </Button>

                    <NavLink to="/" style={{textDecoration:'none'}} >
                    <Button variant="contained" color="secondary" id="cancel">
                        Cancel
                    </Button>
                    </NavLink>

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
                <Dialog open={this.state.warning2} onClose={() => this.handleWarning2Close()}>
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

                {/* password not same warning */}
                <Dialog open={this.state.warning3} onClose={() => this.handleWarning3Close()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Please Check Your Passwords!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    Passwords are not the same!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleWarning3Close()} color="primary">
                    OK
                    </Button>
                </DialogActions>
                </Dialog>

                {/* Sign up Successful */}
                <Dialog open={this.state.warning4} onClose={() => this.handleWarning4Close()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Success"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    You have been successfully registered!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleWarning4Close()} color="primary">
                    OK
                    </Button>
                </DialogActions>
                </Dialog>

            </div>

        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);