import React from 'react'

const Summary = ({inputName, answerEvaluation, thought}) => {
    return (
        <div>
            <p>
                So, my dear {inputName}.
            </p>
            <p>
                As you know, your answer to the question if you already did the evaluation is {answerEvaluation}.
            </p>
            <p>
                Interestingly you think that your evaluation would make Poya feel {thought}.
            </p>
            <p>
                So, I won't be the judge of your actions now - I leave that up to you. But let me ask you one last question. Do you feel comfortable with how this turned out?
                And with that I'll let you go - Class dismissed.
            </p>
        </div>

    )}


export default Summary;