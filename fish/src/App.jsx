import { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollamaDemo from './components/ScrollamaDemo';
import MigratoryFish from './components/MigratoryFishPopChart';
import TableauEmed from "./components/TableauEmbed";
import WildFarmEmbed from './components/WildFarmEmbed';
import TestAnimation from './components/TestAnimation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{marginBottom:"800px"}}>
      <div> 
        There are plenty of fish in the sea...
      </div>

        {/* Species Unit chart */}

      <div style={{position: "relative", height: "800px", width: "100%"}}>
        <div
          style={{backgroundColor: "lightblue", height: "550px", width: "100%", position: "relative", zIndex: "1"}}
        ></div>

        <div
          style={{backgroundColor: "darkblue", height: "1000px", width: "100%", position: "relative", zIndex: "1"}}
          ></div>
        <img
          src="unitchart_blues2.png"
          style={{position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", zIndex: "2"}}
        />
      </div>

    </div>
    <div style={{marginBottom:"400px"}}> 
      Or are there?
    </div>
    <TestAnimation></TestAnimation>
    <MigratoryFish></MigratoryFish>    
    <TableauEmed></TableauEmed>
    <WildFarmEmbed></WildFarmEmbed>
  </>
  )
}

export default App
