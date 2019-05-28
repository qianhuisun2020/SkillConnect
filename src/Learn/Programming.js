import React from "react";
import "./Programming.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import CPP from "../Images/CPP.jpg";
import HTML from "../Images/HTML.jpg";
import Java from "../Images/Java.jpg";
import Python from "../Images/Python.jpg";


class Programming extends React.Component {
    render() {
        var cpp = "This course is designed to introduce students to those basic grammatical rules in C++. " + 
            "C++ is a general-purpose programming language, which has imperative, object-oriented " + 
            "and generic programming features.";

        var html = "This course is designed to introduce students to those basic grammatical rules in HTML. " + 
            "HTML is the standard markup language for creating web pages and web applications.";

        var java = "This course is designed to introduce students to those basic grammatical rules in Java. " + 
            "Java is a general-purpose computer-programming language that is concurrent, class-based, " + 
            "object-oriented, and specifically designed to have as few implementation dependencies as possible.";

        var python = "This course is designed to introduce students to those basic grammatical rules in Python. " + 
            "Python is an interpreted, high-level, general-purpose programming language.";



        return (
            <div className="Programming">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Programming Courses </p>
                <header className="Programming-header">
                    <CourseInfoCard name="C++" intro={cpp} image={CPP} />
                    <CourseInfoCard name="HTML" intro={html} image={HTML} />
                    <CourseInfoCard name="Java" intro={java} image={Java} />
                    <CourseInfoCard name="Python" intro={python} image={Python} />
                </header>
            </div>
        )
    }


}
export default Programming;