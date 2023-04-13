import { useState, useEffect, useRef } from "react";
import axios from "axios";
import RangeVote from "./RangeVote";

const initialSkills = [
    "Coding Ninja",
    "CLL Evangelist",
    "GIT",
    "Shell",
    // "Automated Testing",
    // "Web Security",
    // "Technical Consultant",
    // "Documentation Keeper",
    // "Delivery",
    // "Knowledge Guide",
    // "API",
    // "Docker",
    // "Typescript",
    // "Architecture",
    // "Frontend performance guide",
    // "Interface Producer",
    // "Javascript",
    // "Angular",
    // "React"
  ];

const FormVote = () => {
    const [skillPointsObject, setSkillPointsObject] = useState({});
   
    const fillInitialState = () => {
        const skillsObj= {}
        initialSkills.map((skill)=> Object.assign(skillsObj, {[skill]: 0} ) )

        console.log('skills list', skillsObj);
        setSkillPointsObject(skillsObj);
        console.log('skillstate', skillPointsObject);
    };

    useEffect( fillInitialState, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
       
        Object.values(skillPointsObject).includes(0) ? console.log('cant send') : console.log('send');
    //    ( Object.values(skillPointsObject).sort().filter((e, i, a) => a[i-1] === e)) === []  ? console.log('ok') : console.log('nook');
        
        // Object.values(skillPointsObject).sort().filter((e, i, a) => a[i-1] === e) !== [] ? console.log('ALSO cannnot send') : console.log('SEND');

        console.log("state", skillPointsObject);
        // Array.from(document.querySelectorAll('input')).forEach(
        //     input => (input.value = "")
        // );
    }
    
    const skillInputs = initialSkills.map((skill) => 
    <RangeVote
     key={skill} 
     skillPointsObject={skillPointsObject} 
     setSkillPointsObject={setSkillPointsObject}
      skillName={skill}
    />
    )

    return (
        <form className="form-vote" onSubmit={handleFormSubmit}>
             {skillInputs}
             <div>
                <button type="submit">Submit</button>
             </div>
             <p>{Object.values(skillPointsObject)}</p>
        </form>
    )
}
    
export default FormVote;

