import React from "react";
import NavBar from "../Components/NavBar"

import "./Learn.css"
import CourseCard from "../Components/CourseCard";
import Math from "../Images/Math.jpg"
import Speech from "../Images/Speech.jpg"
import Programming from "../Images/Programming.jpg"
import History from "../Images/History.jpg"
import Art from "../Images/Art.jpg"
import Literature from "../Images/Literature.jpg"
import Music from "../Images/music.jpg"
import Sports from "../Images/sports.jpg"
import Design from "../Images/design.jpg"
import Language from "../Images/language.jpg"


class Learn extends React.Component {
  render() {
    return (
      <div className="Learn">
        <NavBar noBack={true} />
        <p id="course-header"> Explore By Category </p>
        <header className="Learn-header">
          <React.Fragment>
          <CourseCard image={Art} title="Art" letter="A" to="/Explore/Art"/>
          <CourseCard image={History} title="History" letter="H" to="/Explore/History"/>
          <CourseCard image={Literature} title="Literature" letter="L" to="/Explore/Literature"/>
          <CourseCard image={Design} title="Design" letter="D" to="/Explore/Design"/>
          
          <CourseCard image={Math} title="Math" letter="M" to="/Explore/Math"/>
          <CourseCard image={Programming} title="Programming" letter="P" to="/Explore/Programming"/>
          <CourseCard image={Speech} title="Speech" letter="S" to="/Explore/Speech"/>
          <CourseCard image={Sports} title="Sports" letter="S" to="/Explore/Sports"/>
          </React.Fragment> 

        </header>

      </div>
    );
  }
}
export default Learn;