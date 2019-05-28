import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import {removeScore} from '../Actions/Actions'
import { connect } from 'react-redux';


const mapDispatchToProps = {
  removeScore,
 };

 function mapStateToProps(state) {
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


const styles = {
  card: {
    minWidth: 325,
    maxWidth: 325,
    margin: 20,
  },
  media: {
    height: 140,
  },
  content: {
    height: 180,
  },
  dialogTitle: {
    backgroundColor:"#3b5998",
    '& h2': {
      color: 'white',
    }
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

class MediaCard extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      delete:false,
      confirm: false,
      view: false,
    }
  }

  handleDelete() {
    this.setState({delete:true})
  }

  handleDeleteClose() {
    this.setState({delete:false})
  }

  handleConfirm() {
    this.props.removeScore(this.props.userProfile)
    this.setState({delete:false,confirm:true})
  }

  handleConfirmClose() {
    this.setState({confirm:false})
  }

  handleView() {
    this.setState({view:true})
  }
  handleViewClose() {
    this.setState({view:false})
  }



  render() {
    const { classes } = this.props;
    if (this.state.confirm) {
        return '';
    }
    return (
      <div>
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={this.props.image}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography component="p">
                {this.props.intro}
              </Typography>
            </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => this.handleDelete()}>
              Delete
            </Button>
            <Button size="small" color="primary" onClick={() => this.handleView()}>
              View Students
            </Button>
          </CardActions>
        </Card>

        {/* first dialog */}
        <Dialog open={this.state.delete} onClose={() => this.handleDeleteClose()}>
          <DialogTitle className={classes.dialogTitle}>{"Are you sure you want to delete it?"}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
            You will lose <strong>100 points</strong> for deleting a course that you're teaching.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleConfirm()}>
              Yes
            </Button>
            <Button color="primary" onClick={() => this.handleDeleteClose()}>
              No
            </Button>
          </DialogActions>
        </Dialog>

        {/* second dialog */}
        <Dialog open={this.state.confirm} onClose={() => this.handleConfirmClose()}>
          <DialogTitle className={classes.dialogTitle}>{"Success"}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              You've been successfully deleted this course.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleConfirmClose()}>
              OK
          </Button>
          </DialogActions>
        </Dialog>

        {/* view students dialog */}
        <Dialog open={this.state.view} onClose={() => this.handleViewClose()} >
          <DialogTitle className={classes.dialogTitle}> Student lists </DialogTitle>
          <DialogContent className={classes.dialogContent}>
          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Undergraduate Students:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            Roman Traverso<br />
            Santos Hollie<br />
            Delsie Sandquist<br />
            Toya Duque<br />
            Dudley Richey<br />
            Theola Mangus<br />
            Shameka Gorecki<br />
            <br />
          </DialogContentText>
        
          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Graduate Students:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            Brad Leclaire<br />
            Anna Cormier<br />
            German Deberry<br />
            Daniella Cason<br />
            Raphael Resendiz<br />
            Ahmed Greaves<br />
            Alex Simerly<br />
          </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleViewClose()}>
              OK
          </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MediaCard));