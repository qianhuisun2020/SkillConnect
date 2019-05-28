import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Profile.css";
import Button from '@material-ui/core/Button';
import NavBar from "../Components/NavBar";
import ProfileCard from './ProfileCard';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux'



function mapStateToProps(state) {
    console.log('state',state);
    return {
        userProfile: {
            username:state.user.username,
            first:state.user.first,
            last: state.user.last,
            age: state.user.age,
            email: state.user.email,
            phone: state.user.phone,
            gender: state.user.gender,
            avatar: state.user.avatar,
            score: state.user.score,
        }   
    }
}

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

class Profile extends Component {

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        console.log('profile props',this.props.userProfile)

        var divStyle = {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#dfe3ee"
        }


        const { classes } = this.props;
        return (
            <div style={divStyle}>
                <NavBar noBack={true} />
                <div style={{ height: "50px" }}></div>
                <h1>Your Profile</h1>
                <img src={this.props.userProfile.avatar} alt="Avatar" />
                <ProfileCard userProfile={this.props.userProfile}></ProfileCard>
                <br />
                <br />
                <Link to="/EditProfile">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Edit Profile
                    </Button>
                </Link>
                
                <div style={{ height: "500px" }}></div>
                
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));