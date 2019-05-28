import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { NavLink, Redirect } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  root: {
    alignSelf: "stretch",
    backgroundColor: "black",
  },
  appBar: {
    backgroundColor: "#8b9dc3"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  logout: {

  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toolbarNoBack: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
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

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      dialog: false
    }
  }

  logout() {
    this.setState({dialog:true});
  }
  handleClose() {
    this.setState({dialog:false});
  }

  render() {
    var noBack = this.props.noBack
    const { classes } = this.props;

    const navLinkStyle = {
      textDecoration: 'none',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "white",
      alignSelf: 'center',
    };

    if (noBack) {
      return (
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar className={classes.toolbarNoBack}>
              <NavLink to='/Explore' activeStyle={navLinkStyle}>
                <Button style={{color:"white", fontSize:"18px"}}>Explore</Button>
              </NavLink>
              <NavLink to='/Courses' activeStyle={navLinkStyle}>
                <Button style={{color:"white", fontSize:"18px"}}>Courses</Button>
              </NavLink>
              <NavLink to='/Profile' activeStyle={navLinkStyle}>
                <Button style={{color:"white", fontSize:"18px"}}>Profile</Button>
              </NavLink>
                <Button style={{color:"white", fontSize:"18px"}} onClick={()=>this.logout()}>Logout</Button>
            </Toolbar>
          </AppBar>
          <Dialog open={this.state.dialog} onClose={() => this.handleClose()}>
                <DialogTitle className={classes.dialogTitle}>
                    {"Logout Confirmation"}
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogText}>
                    Are you sure to logout?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <NavLink to='/' activeStyle={navLinkStyle}>
                    <Button onClick={() => this.handleClose()} color="primary">
                    Yes
                    </Button>
                </NavLink>

                    <Button onClick={() => this.handleClose()} color="primary">
                    No
                    </Button>
                </DialogActions>
                </Dialog>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <NavLink to={this.props.to} activeStyle={navLinkStyle}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <Icon>{this.props.Icon}</Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                {this.props.lastPage}
              </Typography>
            </NavLink>
            
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ButtonAppBar);
