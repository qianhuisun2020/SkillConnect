import React from "react";
import "./Design.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import iconDesign from "../Images/Icon.jpg";
import animationDesign from "../Images/animation.jpg";
import fashionDesign from "../Images/fashion.jpeg";
import jewelryDesign from "../Images/jewelry.jpg";


class Design extends React.Component {
    render() {
        var icon = "With Designing Icons you'll get a crash course into the world of icon design. " + 
            "This includes almost 3 hours of video recordings teaching you how icons are made from start to finish. ";

        var animation = "Storyboarding for Animation. Animation is designed on storyboards. Students learn basic " + 
            "animation theory and mechanics, develop observational and drawing skills and study the fundamental" + 
            " principles of character design, layout and storyboarding in this class."

        var fashion = " These courses focus on the design and construction of clothes. Learn to design clothing " + 
            "and make patterns for your designs by draping and shaping muslin on a dress form. You'll learn basic " + 
            "draping skills, as well as creative variations on several bodices and skirts."

        var jewelry  = "Students in an introductory jewelry course learn about the history of jewelry, fabrication techniques," + 
            " design fundamentals and equipment use. Jewelry courses include classroom and studio instruction, and students " +
            " frequently create their own jewelry pieces."



        return (
            <div className="Design">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Design Courses </p>
                <header className="Design-header">
                    <CourseInfoCard name="Icon" intro={icon} image={iconDesign} />
                    <CourseInfoCard name="Animation" intro={animation} image={animationDesign} />
                    <CourseInfoCard name="Fashion" intro={fashion} image={fashionDesign} />
                    <CourseInfoCard name="Jewelry" intro={jewelry} image={jewelryDesign} />
                </header>
            </div>
        )
    }


}
export default Design;