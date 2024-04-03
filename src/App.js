import React, { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalBackground from "./components/EducationalBackground";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className='App'>
      <PersonalInfo />
      <EducationalBackground />
      <WorkExperience />
      <Projects />
    </div>
  );
}

export default App;
