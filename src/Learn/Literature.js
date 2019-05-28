import React from "react";
import "./Literature.css";
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import fictionLiterature from "../Images/fiction.jpg";
import dramaLiterature from "../Images/drama.jpg";
import poetryLiterature from "../Images/poetry.jpg";
import proseLiterature from "../Images/prose.png";


class Literature extends React.Component {
    render() {
        var fiction = "This introduces students to study of the novel and short story " +
            " in cultural, social, and historical context. Content includes terminology " +
            "and methods for analyzing and evaluating fiction including form, thematic development, and narrative technique.";

        var drama = "This course introduces the practical and artistic elements of theatrical lighting design. The course " +
            "will include topics in color theory, form, movement, composition, and the creative process. Students will have " + 
            "the opportunity to work on Department of Theater productions with faculty and student lighting designers."

        var poetry = "The course  introduces students to the study poetry and its cultural, social, and historical contexts. " +
            "Content includes terminology and methods for analyzing and evaluating poetry including form, thematic development," +
            " and style. The student will be able to: Explain the distinctive characteristics of poetry as a genre. "

        var prose = "This course is a genre-based introduction to prose fiction in English. Presenting important English-language " +
            "literary texts, the course explores a range of novels and short stories so as to illuminate the different forms and  " +
            "techniques found within these principal generic categories."



        return (
            <div className="Literature">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Literature Courses </p>
                <header className="Literature-header">
                    <CourseInfoCard name="Fiction Literature" intro={fiction} image={fictionLiterature} />
                    <CourseInfoCard name="American Literature" intro={drama} image={dramaLiterature} />
                    <CourseInfoCard name="Asian Literature" intro={poetry} image={poetryLiterature} />
                    <CourseInfoCard name="European Literature" intro={prose} image={proseLiterature} />
                </header>
            </div>
        )
    }


}
export default Literature;