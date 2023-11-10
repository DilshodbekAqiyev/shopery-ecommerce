import {TiTick} from 'react-icons/ti'
import "./Stepper.css";
import { useState } from "react";
function Stepper() {
  const steps = ["Order received", "Processing", "On the way", "Delivered"];
  const [complete, setComplete ]  = useState(false)
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className=' text-center  '>
      <div className="flex  ">
        {steps?.map((step, i) => (
          <div key={i} className={`step-item  ${currentStep === i+1  && "active"} ${ (i+1 < currentStep || complete)  && "complete"} `}>
            <div className="step ">
              <p className='block'>{(i+1 < currentStep || complete) ? ''  : 0 } </p>
              {(i+1 < currentStep || complete) ? <TiTick className='text-white'  size={24} />  :   i+1 }
              </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <button className="btn  " onClick={ () => {
        currentStep === steps.length ? setComplete(true ) :setCurrentStep( (prev) => prev+1)}}>
          {currentStep === steps.length ? "Finish ":"Next"}
         </button>
    </div>
  );
}

export default Stepper;
