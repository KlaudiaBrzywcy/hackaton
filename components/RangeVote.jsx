import { useState } from "react"

const RangeVote = ({skillPointsObject, setSkillPointsObject, skillName}) => {
    const [point, setPoint] = useState();
    
    const handleVoteChange = (e) => {
        console.log(e.target.value);
        setPoint(e.target.value);
        console.log(skillName);
        setSkillPointsObject({...skillPointsObject, [skillName]: point});
    }
    return (
        <div className="range-input-wrapper">
            <label>{skillName}</label>
            <p className="current-val-p">Current value: {point}</p>
            <p className="err-msg">The value has already been used, pick different one</p>
            <input type="range" 
            onChange={handleVoteChange}
            min={1}
            max={19}
            step={1}
            value={point}
            className='range-vote'
            id={skillName}
            />
        </div>
    ) 
}

export default RangeVote;