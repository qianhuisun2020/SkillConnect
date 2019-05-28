import React from "react";
import "./Speech.css"
import CourseInfoCard from "../Components/CourseInfoCard";
import NavBar from "../Components/NavBar";

import Presentation from "../Images/Presentation.jpg";
import PublicSpeaking from "../Images/PublicSpeaking.jpg";
import ElevatorPitch from "../Images/ElevatorPitch.jpg";
import SalesPitch from "../Images/SalesPitch.jpg";


class Speech extends React.Component {
    render() {
        var presentation = "This course focuses on presentation skills. Being well-prepared to give a polished and " + 
            "persuasive presentation keeps you composed and ready for any audience at any time.";

        var publicspeaking = "This course focuses on public speaking skills. If you want to be an executive with " + 
            "your company, an author, a salesperson, a trainer or any other public-facing professional, you're " + 
            "probably going to need to get comfortable with public speaking.."

        var elevatorpitch = "This course focuses on elevator pitch skills. An elevator pitch is a succinct and " + 
            "persuasive sales pitch. It gets its name from only having the time it takes to ride an elevator " + 
            "from one floor to another and that's the succinct part."

        var salespitch = "This course focuses on sales pitch skills. A sales pitch is a tool you can use to " + 
            "present your product as the solution to your prospective customers’ needs in a compelling and succinct way."



        return (
            <div className="Speech">
                <NavBar lastPage="EXPLORE" to="/Explore" Icon="arrow_back" />
                <p id="course-header"> Speech Courses </p>
                <header className="Speech-header">
                    <CourseInfoCard name="Presentation" intro={presentation} image={Presentation} />
                    <CourseInfoCard name="Public Speaking" intro={publicspeaking} image={PublicSpeaking} />
                    <CourseInfoCard name="Elevator Pitch" intro={elevatorpitch} image={ElevatorPitch} />
                    <CourseInfoCard name="Sales Pitch" intro={salespitch} image={SalesPitch} />
                </header>
            </div>
        )
    }


}
export default Speech;