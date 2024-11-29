import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../App.css'

const TestAnimation = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{marginTop:"100px"}}>
        <div>
            <div className='overlay'>
                <img
                    src="Migratory_Freshwater_Fishes_blank.png"
                    alt="Migratory Fish"
                    className='sticky'
                    style={{transform: 'translateY(-50%)'}}
                    />
            </div>
            <Scrollama offset={0.2} onStepEnter={onStepEnter} debug>
                {[1].map((_, stepIndex) => (
                <Step data={stepIndex} key={stepIndex} className="step-content">
                <img
                    src="Migratory_Freshwater_Fishes_chart.png"
                    alt="Migratory Fish"
                    className='sticky'
                    style={{transform: 'translateY(-50%)', }}
                    />
                </Step>
                ))}
            </Scrollama>

        </div>

    </div>
  );
};

export default TestAnimation;