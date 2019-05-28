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

import {addScore} from '../Actions/Actions'
import { connect } from 'react-redux';


const mapDispatchToProps = {
  addScore,
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
    maxWidth: 345,
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
      open:false,
      confirm: false,
      more: false,
    }
  }

  handleOpen() {
    this.setState({open:true})
  }

  handleClose() {
    this.setState({open:false})
  }

  handleConfirm() {
    this.props.addScore(this.props.userProfile)
    this.setState({open:false,confirm:true})
  }

  handleConfirmClose() {
    this.setState({confirm:false})
  }

  handleMore() {
    this.setState({more:true})
  }
  handleMoreClose() {
    this.setState({more:false})
  }



  render() {
    console.log('courseinfocard props',this.props)
    const { classes } = this.props;

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
            <Button size="small" color="primary" onClick={() => this.handleOpen()}>
              Enroll
            </Button>
            <Button size="small" color="primary" onClick={() => this.handleMore()}>
              Learn More
        </Button>
          </CardActions>
        </Card>

        {/* first dialog */}
        <Dialog open={this.state.open} onClose={() => this.handleClose()}>
          <DialogTitle className={classes.dialogTitle}>{"Are you sure you want to enroll?"}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              You can earn <strong>100 points</strong> by enrolling in this course.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleConfirm()}>
              Yes
            </Button>
            <Button color="primary" onClick={() => this.handleClose()}>
              No
            </Button>
          </DialogActions>
        </Dialog>

        {/* second dialog */}
        <Dialog open={this.state.confirm} onClose={() => this.handleConfirmClose()}>
          <DialogTitle className={classes.dialogTitle}>{"Congratulations!"}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <DialogContentText className={classes.dialogText}>
              You've successfully enrolled in this course! <br />
              You've earned <strong>100 points</strong> for enrolling in this course!
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleConfirmClose()}>
              OK
          </Button>
          </DialogActions>
        </Dialog>

        {/* learn more dialog */}
        <Dialog open={this.state.more} onClose={() => this.handleMoreClose()} >
          <DialogTitle className={classes.dialogTitle}>{this.props.name}</DialogTitle>
          <DialogContent className={classes.dialogContent}>
          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Instructor:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            John Cash
          </DialogContentText>
        
          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Meeting Time:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            Monday Wednesday Friday 10:00 P.M.
          </DialogContentText>


          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Total Length:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            16 Hours
          </DialogContentText>


          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Tuition: 
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            $50
          </DialogContentText>
          <DialogContentText style={{color:"#3b5998", fontWeight:"600"}}>
            Course Description:
          </DialogContentText>
          <DialogContentText style={{color:"black"}}>
            {this.props.intro}
          </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => this.handleMoreClose()}>
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