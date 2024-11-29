import { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollamaDemo from './components/ScrollamaDemo';
import MigratoryFish from './components/MigratoryFishPopChart';
import TableauEmed from "./components/TableauEmbed";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{marginBottom:"500px"}}>

      <div> 
          There are plenty of fish in the sea...
        </div>

        {/* Species Unit chart */}
        <div>
        <img src="unitchart_blues2.png"></img>
        </div>

        <div> 
        Or are there?
      </div>
    </div>

    <MigratoryFish></MigratoryFish>    
    <TableauEmed></TableauEmed>
  </>
  )
}

export default App
