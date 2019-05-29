import React, { Component } from 'react';
import './Header.css';
import { withStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
});

class Header extends Component {
    render() {
        return (
            <div id="header">
                <Link to="/Explore">
                <p id="title">SkillConnect</p>
                </Link>
            </div>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);