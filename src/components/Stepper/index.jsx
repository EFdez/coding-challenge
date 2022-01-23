import React from 'react'

import './index.css'

const Stepper = (numberSteps = 6) => {
    const drawSteps = (numberSteps) => {

    }
    return ( 
        <div className="Stepper_container">
            <div className="Stepper_steps"></div>
            <div className="Stepper_steps"></div>
            <div className="Stepper_steps"></div>
            <div className="Stepper_steps"></div>
            <div className="Stepper_steps"></div>
            <div className="Stepper_steps"></div>

        </div>
     );
}
 
export default Stepper;