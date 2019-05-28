import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Profile.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NavBar from "../Components/NavBar";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from 'react-router-dom';
import '../Signin/Signin.css'



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
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
});

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            warning1: false,
            warning2: false,
            warning3: false,
            success: false,
            firstName: "Old",
            lastName: "Master",
            age: 22,
            email: "example@gmail.com",
            phone: "1234567890",
            gender: "Male",
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    handleCancel() {
        this.props.history.goBack();
    }

    handleSubmit() {
        let first = document.getElementById("first").value;
        let last = document.getElementById("last").value;
        let email = document.getElementById("email").value;
        if (first === "") {
            this.setState({warning1: true});
        }
        else if (last === "") {
            this.setState({warning2: true});
        }
        else {
            let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if (!pattern.test(email)) {
                this.setState({warning3: true});
            }
            else {
                this.setState({success: true});
            }
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

    handleSuccessClose() {
        this.setState({success: false})
        this.props.history.goBack();
    }

    render() {
        var { firstName, lastName, age, email, phone, gender } = this.state;
        var options = [
            { value: 'Arts', label: 'Arts' },
            { value: 'Chem', label: 'Chemistry' },
            { value: 'Computer', label: 'Computer' },
            { value: 'History', label: 'History' },
            { value: 'Math', label: 'Math' },
            { value: 'Others', label: 'Others' }
        ]
        var selectorStyle = {
            control: base => ({
                ...base,
                fontSize: "18px",
            }),
            menu: base => ({
                ...base,
                fontSize: "14px"
            })
        }

        var divStyle = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#dfe3ee"
        }

        var textStyle = {
            width: "300px"
        }

        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <NavBar noBack={true} />
                <div style={{ height: "50px" }}></div>
                <h1>Edit Your Profile</h1>
                <TextField
                    id="first"
                    label="*First Name:"
                    placeholder={firstName}
                    className = "Standard-input"
                    margin="normal"
                />
                <TextField
                    id="last"
                    label="*Last Name:"
                    placeholder={lastName}
                    className = "Standard-input"
                    margin="normal"
                />

                <TextField
                    id="email"
                    label="*Email:"
                    placeholder={email}
                    className = "Standard-input"
                    margin="normal"
                />

                <TextField
                    id="phone"
                    label="Phone:"
                    placeholder={phone}
                    type="number"
                    className = "Standard-input"
                    margin="normal"
                />

                <TextField
                    id="age"
                    label="Age:"
                    placeholder={age}
                    type="number"
                    className = "Standard-input"
                    margin="normal"
                    onChange={this.handleChange}
                />

                <br />
                <FormControl className={classes.formControl} style={{ width: "300px" }}>
                    <InputLabel htmlFor="age-simple">Gender</InputLabel>
                    <Select
                        value={this.state.gender}
                        onChange={this.handleSelectChange}
                        inputProps={{
                            name: 'gender',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value={"None"}>None</MenuItem>
                        <MenuItem value={20}>Male</MenuItem>
                        <MenuItem value={30}>Female</MenuItem>
                    </Select>
                </FormControl>

                <br />

                <Button variant="contained" color="primary" id="submit" className={classes.button} onClick={() => this.handleSubmit()}>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" id="cancel" className={classes.button} onClick={() => this.handleCancel()}>
                    Cancel
                </Button>
                <div style={{ height: "500px" }}></div>


                {/* profile successly updated */}
                <Dialog open={this.state.success} onClose={() => this.handleSuccessClose()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Profile Updated!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    You have successfully Updated your profile!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleSuccessClose()} color="primary">
                    OK
                    </Button>
                </DialogActions>
                </Dialog>

                {/* first name empty warning */}
                <Dialog open={this.state.warning1} onClose={() => this.handleWarning1Close()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Please Check Your First Name!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    First Name cannot be empty!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleWarning1Close()} color="primary">
                    OK
                    </Button>
                </DialogActions>
                </Dialog>

                {/* last name empty warning */}
                <Dialog open={this.state.warning2} onClose={() => this.handleWarning2Close()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Please Check Your Last Name!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    Last Name cannot be empty!
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
                    {"Please Check Your Email!"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    Email format is improper!
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

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);