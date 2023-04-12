import { useState, useEffect } from "react";
import RangeVote from "./RangeVote";

const initialSkills = [
    "Coding Ninja",
    "CLL Evangelist",
    "GIT",
    "Shell",
    "Automated Testing",
    "Web Security",
    "Technical Consultant",
    "Documentation Keeper",
    "Delivery",
    "Knowledge Guide",
    "API",
    "Docker",
    "Typescript",
    "Architecture",
    "Frontend performance guide",
    "Interface Producer",
    "Javascript",
    "Angular",
    "React"
  ];

const FormVote = () => {
    const [skillPointsList, setSkillPointsList] = useState([]);

    const fillInitialState = () => {
        const skillsList = []
        // initialSkills.map((skill)=> skillsList.push({[skill]: 0 }));
        initialSkills.map((skill)=> skillsList.push({ name: skill, points : 0 }));

        console.log('skills list', skillsList);
        setSkillPointsList(skillsList);
        console.log('skillstate', skillPointsList);
    };

    useEffect( fillInitialState, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("state", skillPointsList);
    }
    
    const skillInputs = initialSkills.map((skill) => <RangeVote key={skill} skillPointsList={skillPointsList} setSkillPointsList={setSkillPointsList} skillName={skill}/>)

    return (
        <form className="form-vote" onSubmit={handleFormSubmit}>
             {skillInputs}
             <div>
                <button type="submit">Submit</button>
             </div>
        </form>
    )
}
    
export default FormVote;
