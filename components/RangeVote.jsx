import { useState, useEffect } from "react"

const RangeVote = ({skillPointsObject, setSkillPointsObject, skillName}) => {
    const [point, setPoint] = useState();
    const [errMsg, setErrMsg] = useState('');

    const handleStateAndErrMsg = () => {
        setSkillPointsObject({...skillPointsObject, [skillName]: point});
        Object.values(skillPointsObject).includes(point) ? setErrMsg('The value has already been used, pick different one') : setErrMsg('');
    }

    useEffect(handleStateAndErrMsg,[point])

    const handleVoteChange = (e) => {
        setPoint(e.target.value);
    }

    return (
        <div className="range-input-wrapper">
            <label>{skillName}</label>
            <p className="current-val-p">Current value: {point}</p>
            <p className="err-msg">{errMsg}</p>
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
