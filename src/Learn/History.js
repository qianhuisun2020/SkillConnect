import React from "react";
import "./History.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import AmericanHistory from "../Images/AmericanHistory.jpg";
import AfricanHistory from "../Images/AfricanHistory.jpg";
import AsianHistory from "../Images/AsianHistory.jpg";
import EuropeanHistory from "../Images/EuropeanHistory.jpg";


class History extends React.Component {
    render() {
        var american = "This course provides a one-year survey of American " +
            "history from the Colonial Period and the American Revolution to the" +
            "present day, with an emphasis on the twentieth century.";

        var african = "This course is designed to introduce students to the social" +
            "political, economic, and cultural history of Africa from the earliest times to the nineteenth century."

        var asian = "The course focuses on the history of Asian art from neolithic " +
            "to modern times, with emphasis on the art forms of the major periods and their " +
            "relationship to social, political, and religious developments."

        var european = "In European History students investigate significant events, individuals, " +
            "developments, and processes in four historical periods from approximately 1450 to the present."



        return (
            <div className="History">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Hisotry Courses </p>
                <header className="History-header">
                    <CourseInfoCard name="African History" intro={african} image={AfricanHistory} />
                    <CourseInfoCard name="American History" intro={american} image={AmericanHistory} />
                    <CourseInfoCard name="Asian History" intro={asian} image={AsianHistory} />
                    <CourseInfoCard name="European History" intro={european} image={EuropeanHistory} />
                </header>
            </div>
        )
    }


}
export default History;