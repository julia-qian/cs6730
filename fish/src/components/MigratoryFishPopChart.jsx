import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../App.css'

const MigratoryFish = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      {/* Left Column: Sticky Image */}
        <div style={{ position: 'sticky', display:"inline-block" }}>
            <img
                src="Migratory_Freshwater_Fishes_blank.png"
                // width={"1000px"}
                alt="Migratory Fish"
                className='sticky'
                style={{ top: '50%', transform: 'translateY(-50%)', // Adjusts for the image's height to truly center it
                    flex: '0 0 auto', }}// Prevent resizing}}
                />
        </div>

      {/* Right Column: Scrollama Steps */}
        <div style={{ display: "f"}}>
        <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
        {[1, 2, 3, 4].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              I'm a Scrollama Step of index {stepIndex}
            </div>
          </Step>
        ))}
      </Scrollama>
        </div>
    </div>
  );
};

export default MigratoryFish;