import { useState } from 'react'
import './App.css'
import TableauEmbed from './components/TableauEmbed'
import FlourishEmbed from './components/FlourishEmbed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div style={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"left"
          }}>
          <div className='title'>
            Net Loss
          </div>
          <div className='subtitle'>
            Unpacking the Decline of Fish Populations
          </div>
          <div className='names'>
          Jin Kim, Julia Qian, Jaeri Suh, Elaine Xu
          </div>
        </div>
        <div style={{height:"200px"}}></div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img src='unitchart_blues.png' style={{width:"80%"}}/>
        </div>
    </div>
    <div style={{height:"500px"}}>

    </div>
      <div className="heading">
        Title yada yada
      </div>
      <div className='textbox' style={{width:"614px"}}>
      Fish populations have been in a steady and alarming decline over the decades.
      The next graph highlights a dramatic decrease over the past 50 years in migratory.
      </div>
      <TableauEmbed></TableauEmbed>
      <div className='textbox' style={{width:"614px"}}>
      Fish populations have been in a steady and alarming decline over the decades. 
      The next graph highlights a dramatic decrease over the past 50 years in migratory 
      freshwater fish—a trend with far-reaching implications across continents, including Asia, 
      Oceania, North America, Europe, and Latin America and the Caribbean. 
      </div>
      <FlourishEmbed figureNo="20610313"></FlourishEmbed>
      <FlourishEmbed figureNo="20609989"></FlourishEmbed>
      <FlourishEmbed figureNo="20624220"></FlourishEmbed>
      <FlourishEmbed figureNo="20624103"></FlourishEmbed>

      <FlourishEmbed figureNo="20607752"></FlourishEmbed>
      <FlourishEmbed figureNo="20611345"></FlourishEmbed>

    <div 
          className='textbox'
          style={{
            zIndex:"100",
            position:"absolute",
            left:"100px",
            top:"1800px",
            width:"600px"
            }}>
            We often hear there are a lot of fish in the sea, and turns out,
             it’s true! The biodiveristy of fish is greater than that of all 
             other vertebrates! For example, there are almost 6x more fish species
              than mammal species.
    </div>
  </>
  )
}

export default App
