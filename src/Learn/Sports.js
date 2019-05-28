import React from "react";
import "./Sports.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import Basketball from "../Images/Basketball.jpg";
import Soccer from "../Images/Soccer.jpg";
import Volleyball from "../Images/Volleyball.jpg";
import Swimming from "../Images/Swimming.jpg";


class Sports extends React.Component {
    render() {
        var basketball = "Students in this course will be involved in many activities to help them" + 
            " improve dribbling, shooting, defense, and teamwork. An emphasis will be placed on the " +
            "teaching of skills basketball so that students can participate effectively."

        var soccer = "This course covers three aspects of soccer: skill development, teaching/coaching, " + 
            "and officiating. Motor and field skills, rules of the game, and basic officiating mechanics " + 
            "necessary to nplay the game will be learned. "

        var volleyball = "The class will include instruction in the basic skills of serving, passing, " + 
            "setting, attacking and blocking. The class will also cover tactical skills of basic " + 
            "volleyball offensive and defensive play and well as the rules and scoring."

        var swimming = "Swimmers have already mastered the stroke basics and will receive explicit " + 
            "instruction on improving technique for strength and endurance. Swimmers will work to " +
            "swim the length of the pool. Introductory diving skills, butterfly, water safety and lifesaving skills are also taught."



        return (
            <div className="Sports">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Sports Courses </p>
                <header className="Sports-header">
                    <CourseInfoCard name="Basketball" intro={basketball} image={Basketball} />
                    <CourseInfoCard name="Soccer" intro={soccer} image={Soccer} />
                    <CourseInfoCard name="Volleyball" intro={volleyball} image={Volleyball} />
                    <CourseInfoCard name="Swimming" intro={swimming} image={Swimming} />
                </header>
            </div>
        )
    }


}
export default Sports;