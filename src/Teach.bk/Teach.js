import React, { Component } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import "./Teach.css";
import Button from '@material-ui/core/Button';
import NavBar from "../Components/NavBar"

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
});

class Teach extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
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

        function buttonClick() {
            alert("You have successfully update you profile!");
        }

        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <NavBar noBack={true} />
                <div style={{ height: "50px" }}></div>
                <h1>Preference Filters</h1>
                <TextField
                    id="standard-dense"
                    label="First Name"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    style={textStyle}
                />
                <TextField
                    id="standard-dense"
                    label="Last Name"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    style={textStyle}
                />
                <TextField
                    id="standard-dense"
                    label="E-mail"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    style={textStyle}
                />
                <TextField
                    id="standard-dense"
                    label="Phone Number"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    style={textStyle}
                />
                <TextField
                    id="standard-dense"
                    label="Your Location"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    style={textStyle}
                />
                <br />

                <p id="type-of-user">Field of Interests: </p>
                <Select className="Selector" options={options} isMulti styles={selectorStyle} />
                <br />
                <Button variant="contained" color="primary" id="sign-in" onClick={buttonClick}>
                    Update
                </Button>
                <div style={{ height: "600px" }}></div>
            </div>
        );
    }
}

Teach.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teach);