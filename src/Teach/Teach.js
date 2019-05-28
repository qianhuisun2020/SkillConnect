import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./Teach.css"
import TeachCard from "../Components/TeachCard";
import LearnCard from "../Components/LearnCard";
import NavBar from "../Components/NavBar";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';

import HTML from "../Images/HTML.jpg";
import Calculus from "../Images/Calculus.jpg";
import paintingArt from "../Images/painting.jpg";
import poetryLiterature from "../Images/poetry.jpg";
import ElevatorPitch from "../Images/ElevatorPitch.jpg";
import AmericanHistory from "../Images/AmericanHistory.jpg";
import NewCourse from "../Images/NewCourse.png";

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
        maxWidth: 325,
        minHeight: 397,
        margin: 20,
    },
    dialogTitle: {
        backgroundColor:"#3b5998",
        '& h2': {color: 'white',}
    },
    dialogContentLarge: {
        marginTop: 30,
        minWidth: 500,
        minHeight: 600,
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
    pAddIcon: {
        fontSize: 80,
    },
    addIcon: {
        fontSize: "inherit",
    },
};


class Teach extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            add: false,
            warning1: false,
            warning2: false,
            success: false,
            count: 0,
            nameList: [],
            descList: [],
            imageList: [],
        }
    }

    handleAdd() {
        this.setState({add: true});
    }

    handleAddClose() {
        this.setState({add: false});
    }

    handleAddCloseAndUpdate() {
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let imageUrl = document.getElementById("imageUrl").value;
        if (name === "") {
            this.setState({warning1: true});
        } 
        else if (description === "") {
            this.setState({warning2: true});
        }
        else {
            this.setState({add: false});
            this.setState({count: (this.state.count + 1)});
            this.setState({nameList: this.state.nameList.concat([name])});
            this.setState({descList: this.state.descList.concat([description])});
            this.setState({imageList: this.state.imageList.concat([imageUrl])});
            this.props.addScore(this.props.userProfile)
            this.setState({success:true})
        }

    }
    
    handleWarning1Close() {
        this.setState({warning1: false});
    }

    handleWarning2Close() {
        this.setState({warning2: false});
    }

    handleSuccessClose() {
        this.setState({success: false});

    }


    showNewCards() {
        let list = [];
        for (var i = 0; i < this.state.count; i++) {
            if (this.state.imageList[i] === "") {
                list.push(<TeachCard name={this.state.nameList[i]} intro={this.state.descList[i]} image={NewCourse} />);
            } else {
                list.push(<TeachCard name={this.state.nameList[i]} intro={this.state.descList[i]} image={this.state.imageList[i]} />);
            }
            
        }
        return list;
    }
    

    render() {
        const { classes } = this.props;
        var html = "This course is designed to introduce students to those basic grammatical rules in HTML. " + 
            "HTML is the standard markup language for creating web pages and web applications.";

        var calculus = "This course is designed to introduce students to those most practical calculus method, including " + 
                "differential calculus, integral calculus, and all other useful theorems.";

        var painting = "This course is a basic studio course in the media and techniques of painting.  " +
            "Activity will emphasize the study of color, structure, creativity and aesthetic values in general." +
            "present day, with an emphasis on the twentieth century.";

        var poetry = "This course introduces students to the study of poetry and its cultural, social, and " +
            "historical contexts. Content includes terminology and methods for analyzing and evaluating poetry."

        var elevatorpitch = "This course focuses on elevator pitch skills. An elevator pitch is a succinct and " + 
            "persuasive sales pitch. It gets its name from only having the time it takes to ride an elevator " + 
            "from one floor to another and that's the succinct part."

        var american = "This course provides a one-year survey of American " +
            "history from the Colonial Period and the American Revolution to the" +
            "present day, with an emphasis on the twentieth century.";

        
        //options and styles for the selector
        var options = [
            {value: 'Other', label:'Other'},
            {value: 'Art', label:'Art'},
            {value: 'History', label: 'History'},
            {value: 'Literature', label: 'Literature'},
            {value: 'Design', label: 'Design'},
            {value: 'Math', label: 'Math'},
            {value: 'Programming', label: 'Programming'},
            {value: 'Speech', label: 'LiterSpeechature'},
            {value: 'Sports', label: 'Sports'},
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
        

        if (this.state.count >= 0) {
            return (
                <div className="Teach">
                    <NavBar noBack={true} />
                    <p id="course-header"> Courses You're Teaching </p>
                    <header className="Teach-header">
                        <TeachCard name="HTML" intro={html} image={HTML} />
                        <TeachCard name="Calculus" intro={calculus} image={Calculus} />
                        <TeachCard name="Painting Art" intro={painting} image={paintingArt} />
                        {this.showNewCards()}
                        <Button variant="contained" color="primary" className={classes.card} onClick={() => this.handleAdd()}>
                            <p className={classes.pAddIcon}><AddIcon className={classes.addIcon}/></p>
                        </Button>

                    </header>

                    <p></p>
                    <p id="course-header"> Courses You're Learning </p>
                    <header className="Teach-header">
                        <LearnCard name="Poetry Literature" intro={poetry} image={poetryLiterature} />
                        <LearnCard name="Elevator Pitch" intro={elevatorpitch} image={ElevatorPitch} />
                        <LearnCard name="American History" intro={american} image={AmericanHistory} />
                        
                    </header>

                    {/* Fill form to add new course */}
                    <Dialog open={this.state.add} onClose={() => this.handleAddClose()}>
                        <DialogTitle className={classes.dialogTitle}>{"Add course"}</DialogTitle>
                        <DialogContent className={classes.dialogContentLarge}>
                            <DialogContentText className={classes.dialogText}>
                                To add a new course, please fill in the form below.
                            </DialogContentText>
                            <TextField
                                id="name"
                                label="*Course Name:"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="description"
                                label="*Course Description:"
                                margin="normal"
                                multiline
                                rows="2"
                                fullWidth
                            />
                            
                            <p id="Selector-title">Field of Interests:</p>
                            <Select options={options} styles={selectorStyle}/>
                            
                            <TextField
                                id="capacity"
                                label="Capacity:"
                                type="number"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="fee"
                                label="Enrollment Fee($):"
                                type="number"
                                margin="normal"
                                fullWidth
                            />
                            
                            <TextField
                                id="imageUrl"
                                label="Course Image(URL):"
                                margin="normal"
                                placeholder="e.g. http://www.google.com/images/new-course.png"
                                fullWidth
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={() => this.handleAddCloseAndUpdate()}>
                                Submit
                            </Button>
                            <Button color="primary" onClick={() => this.handleAddClose()}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>

                    
                    {/* Course Name empty warning */}
                    <Dialog open={this.state.warning1} onClose={() => this.handleWarning1Close()}>
                    <DialogTitle className={classes.dialogTitle}>
                        {"Please Check the Course Name"}
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText className={classes.dialogText}>
                        Course name cannot be empty!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleWarning1Close()} color="primary">
                        OK
                        </Button>
                    </DialogActions>
                    </Dialog>

                    {/* Course Description empty warning */}
                    <Dialog open={this.state.warning2} onClose={() => this.handleWarning2Close()}>
                    <DialogTitle className={classes.dialogTitle}>
                        {"Please Check the Course description"}
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText className={classes.dialogText}>
                        Course description cannot be empty!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleWarning2Close()} color="primary">
                        OK
                        </Button>
                    </DialogActions>
                    </Dialog>

                    {/* success dialog */}
                    <Dialog open={this.state.success} onClose={() => this.handleSuccessClose()}>
                    <DialogTitle className={classes.dialogTitle}>
                        {"Congratulations!"}
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText className={classes.dialogText}>
                        You have successfully offered a new course! <br />
                        You have earned <strong>100 points</strong> for offering this course!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleSuccessClose()} color="primary">
                        OK
                        </Button>
                    </DialogActions>
                    </Dialog>


                </div>
            );
        }
    }
}

Teach.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teach));