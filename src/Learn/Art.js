import React from "react";
import "./Art.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import paintingArt from "../Images/painting.jpg";
import sculptureArt from "../Images/sculpture.jpg";
import literatureArt from "../Images/literature.png";
import danceArt from "../Images/dance.jpg";


class Art extends React.Component {
    render() {
        var painting = "This course is a basic studio course in the media and techniques of painting.  " +
            "Activity will emphasize the study of color, structure, creativity and aesthetic values in general." +
            "present day, with an emphasis on the twentieth century.";

        var sculpture = "This course help students examine the materials and processes for " +
            "sculpting figures using a live model.  This course also teaches students the " +
            "history of the human figure in art over time"

        var literature = "The course is intended to give you the experience of a typical " +
            "introductory college literature course. It includes intensive study of " +
            "representative works from various genres, periods, and cultures, concentrating on works of recognized literary merit."

        var dance = "The course continues the fundamental jazz skills learned in the previous level with further focus on proper " +
            "technique including alignment, balance, multiple turns, leaps, and more complex combinations. This course is for " +
            "students with some previous dance training"



        return (
            <div className="Art">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Art Courses </p>
                <header className="Art-header">
                    <CourseInfoCard name="Painting Art" intro={painting} image={paintingArt} />
                    <CourseInfoCard name="Sculpture Art" intro={sculpture} image={sculptureArt} />
                    <CourseInfoCard name="Literature Art" intro={literature} image={literatureArt} />
                    <CourseInfoCard name="Dance Art" intro={dance} image={danceArt} />
                </header>
            </div>
        )
    }


}
export default Art;