import React from "react";
import "./Math.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import Calculus from "../Images/Calculus.jpg";
import LinearAlgebra from "../Images/LinearAlgebra.jpg";
import Statistics from "../Images/Statistics.jpg";
import ComplexAnalysis from "../Images/ComplexAnalysis.jpg";


class Math extends React.Component {
    render() {
        var calculus = "This course is designed to introduce students to those most practical calculus method, including " + 
            "differential calculus, integral calculus, and all other useful theorems.";

        var linearalgebra = "This course focuses on linear algebra, which is fundamental in modern presentations of geometry. " +
            "This cousrse teaches student how to mathmetically represent basic objects such as lines, planes and rotations."

        var statistics = "This course is an introductory course in statistics intended for students in a wide variety of " + 
            "areas of study. Topics discussed include displaying and describing data, the normal curve, regression, " + 
            "probability, and statistical inference."

        var complexanalysis = "This course gives advanced students an introduction to the theory of functions of " + 
            "a complex variable, a fundamental area of mathematics. Students need basic knowledge of calculus to enroll this course."



        return (
            <div className="Math">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Math Courses </p>
                <header className="Math-header">
                    <CourseInfoCard name="Calculus" intro={calculus} image={Calculus} />
                    <CourseInfoCard name="Linear Algebra" intro={linearalgebra} image={LinearAlgebra} />
                    <CourseInfoCard name="Statistics" intro={statistics} image={Statistics} />
                    <CourseInfoCard name="Complex Analysis" intro={complexanalysis} image={ComplexAnalysis} />
                </header>
            </div>
        )
    }


}
export default Math;