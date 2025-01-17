import React from 'react'

const Summary = ({nameValue, selectValue, buttonValue}) => {    
    return (
        <div className="formelement">
            <p className="summarytext">
                So, my dear <span className="answertext">{nameValue}</span>...
            </p>
            <p className="summarytext">
                As you know, your answer to the question if you already did the evaluation is <span className="answertext">{buttonValue}.</span>
            </p>
            <p className="summarytext">
                ...and you think that your evaluation would make Poya feel <span className="answertext">{selectValue}</span>.
            </p>
            <p className="summarytext">
                So, I won't be the judge of your actions now - I leave that up to you. But let me ask you one last question. Do you feel comfortable with how this turned out?
                And with that I'll let you go - Class dismissed.
            </p>
        </div>
    )
}

export default Summary;