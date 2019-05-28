import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Proficiency extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p id="title">SkillConnect</p>
                    <TextField
                        id="standard-search"
                        label="Username:"
                        type="search"
                        margin="normal"
                    />

                    <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="Available Time Period"
                            type="datetime-local"
                            defaultValue="2019-02-20T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>

                    <Button variant="contained" color="primary" id="sign-in">
                        Sign in
          </Button>
                    <div id="sign-up-div">
                        <p id="sign-up-p">Don't have an account?  </p>
                        <Button variant="contained" color="secondary" id="sign-up">
                            Sign up
            </Button>
                    </div>
                </header>
            </div>
        );
    }
}

export default Proficiency;