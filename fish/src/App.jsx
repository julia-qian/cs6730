import { useState } from 'react'
import './App.css'
import TableauEmbed from './components/TableauEmbed'
import FlourishEmbed from './components/FlourishEmbed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{padding:"125px"}}>
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
          <img src='unitchart.png' style={{width:"1366px"}}/>
        </div>
    </div>
    <div style={{marginTop:"211px", marginBottom:"144px"}}>
          <img style={{width:"100%"}} src='banner.png'></img>
    </div>
      <div className="heading">
        index of abundance
      </div>
      <div className='textbox' style={{width:"614px", marginBottom:"64px"}}>
      Fish populations have been in a steady and alarming decline over the decades.
      The next graph highlights a dramatic decrease over the past 50 years in migratory.
      </div>
      {/* dashboard */}

      {/* Index of Abundance */}
      <FlourishEmbed figureNo="20610313"></FlourishEmbed>
      <div style={{marginTop:"91px"}}>
        <div className="heading">
          Endangered
        </div>
        <div className='textbox' style={{width:"614px", marginBottom:"64px"}}>
        Fish populations have been in a steady and alarming decline over the decades.
        The next graph highlights a dramatic decrease over the past 50 years in migratory.
        </div>
      </div>


      {/* threats to endangered */}
      <TableauEmbed figID=
        "viz1733344698495"
        figName="DistributionofThreatstoFreshwaterFish/Dashboard1"
        figSrc="https://public.tableau.com/static/images/Di/DistributionofThreatstoFreshwaterFish/Dashboard1/1_rss.png"
        figStatic="https://public.tableau.com/static/images/Di/DistributionofThreatstoFreshwaterFish/Dashboard1/1.png"></TableauEmbed>

      {/* map */}
      <div style={{marginTop:"60px"}}>
        <FlourishEmbed figureNo="20624103"></FlourishEmbed>
      </div>

      <div>
        <div className='heading'>
          before co2
        </div>
        <div style={{display:"flex"}}>
        <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
        Fish populations have been in a steady and alarming decline over the decades. 
        The next graph highlights a dramatic decrease over the past 50 years in migratory 
        </div>
        <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
        Fish populations have been in a steady and alarming decline over the decades. 
        The next graph highlights a dramatic decrease over the past 50 years in migratory 
        </div>
        </div>

      </div>


      {/* co2 */}
      <FlourishEmbed figureNo="20607752"></FlourishEmbed>

        <div style={{display:"flex", marginBottom:"238px"}}>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>

      {/* gapminder */}
      <FlourishEmbed figureNo="20626630"></FlourishEmbed>

      <div style={{display:"flex", marginBottom:"173px"}}>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>

      <div className='special_heading'>
        Let’s look at the specific case study, 
        number 2 consumed fish in the United States. 
      </div>

      <div style={{marginTop:"375px"}}>
        <div className="heading">
          Endangered
        </div>
        <div className='textbox' style={{width:"614px"}}>
        Fish populations have been in a steady and alarming decline over the decades.
        The next graph highlights a dramatic decrease over the past 50 years in migratory.
        <br/> <br/>
        The next graph highlights a dramatic decrease over the past 50 years in migratory.
        </div>
      </div>

      
      <div style={{display:"flex", alignItems:"center", gap:"51px"}}>
        <img src='CAmap.png'
        style={{width:" 588px",
          height: "819px",
          flexShrink:"0",
          borderRadius: "16px",
          background: "url('CAmap.png') lightgray 50% / cover no-repeat"}}/>
        <div style={{height:"fit-content"}}>
          <div className="heading">
            Endangered
          </div>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades.
          The next graph highlights a dramatic decrease over the past 50 years in migratory.
          <br/> <br/>
          The next graph highlights a dramatic decrease over the past 50 years in migratory.
          </div>
        </div>
      </div>

      <div style={{marginTop:"160px", marginBottom:"64px"}}>
        <div className="heading">
          Endangered
        </div>
        <div className='textbox' style={{width:"614px"}}>
        Fish populations have been in a steady and alarming decline over the decades.
        The next graph highlights a dramatic decrease over the past 50 years in migratory.
        <br/> <br/>
        The next graph highlights a dramatic decrease over the past 50 years in migratory.
        </div>
      </div>

            {/* cali population */}
            <TableauEmbed figID=
        "viz1733349640068"
        figName="DataViz_Cali/Dashboard1"
        figSrc="https://public.tableau.com/static/images/Da/DataViz_Cali/Dashboard1/1_rss.png"
        figStatic='https://public.tableau.com/static/images/Da/DataViz_Cali/Dashboard1/1.png'></TableauEmbed>

    <div className='special_heading'
    style={{marginTop:"160px", marginBottom:"111px"}}>
        Despite of rapidly decreasing salmon population, 
        our appetite never rests. 
          </div>
    <div style={{marginBottom:"171px"}}>
      <img src="salmon_food.png" style={{width:"100%"}}></img>
    </div>

    {/* US Salmon Consumption Rate */}
    <FlourishEmbed figureNo="20609989"></FlourishEmbed>
    <div style={{display:"flex", marginTop:"64px", marginBottom:"126px"}}>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>

    {/* connected scatter */}
    <FlourishEmbed figureNo="20624220"></FlourishEmbed>
    <div style={{display:"flex", marginTop:"64px", marginBottom:"126px"}}>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>
    
        <div className='special_heading'
    style={{marginTop:"214px", marginBottom:"214px"}}>
    The solution to address the increasing consumption demand is fish farming.
          </div>


        {/* dumbell */}
        <FlourishEmbed figureNo="20627211"></FlourishEmbed>
        <div style={{display:"flex", marginTop:"64px", marginBottom:"126px"}}>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>

    <div style={{display:"flex", alignItems:"center", gap:"51px", marginBottom:"156px"}}>
        <img src='farm.png'
        style={{width:" 587px",
          flexShrink:"0",
          borderRadius: "16px",
          }}/>
        <div style={{height:"fit-content"}}>
          <div className="heading">
            Endangered
          </div>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades.
          The next graph highlights a dramatic decrease over the past 50 years in migratory.
          <br/> <br/>
          The next graph highlights a dramatic decrease over the past 50 years in migratory.
          </div>
        </div>
      </div>


        <div style={{display:"flex", marginBottom:"238px", marginTop:"40px"}}>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
          <div className='textbox' style={{width:"614px"}}>
          Fish populations have been in a steady and alarming decline over the decades. 
          The next graph highlights a dramatic decrease over the past 50 years in migratory 
          </div>
        </div>
          
          <div>
            <div className='special_heading'>
          But is farmed fish healthy to humans? 
            </div>
            <div className='textbox' style={{textAlign:"center"}}>
            This decline not only disrupts ecosystems but also poses significant economic
             challenges, as the decreasing fish population also increases the price of fish.
              correlation between fish 
            </div>
          </div>

    <div style={{display:"flex", alignItems:"center", gap:"51px", marginTop:"122px"}}>
        <div style={{height:"fit-content"}}>
            <div className="heading">
            Higher  Calories by 10%, 
            Less Vitamin B12 by 20%
            </div>
            <div className='textbox' style={{width:"551px"}}>
            Fish populations have been in a steady and alarming decline over the decades.
            The next graph highlights a dramatic decrease over the past 50 years in migratory.
            </div>
        </div>
        <img src='nutrition.png'
        style={{width:" 587px",
          flexShrink:"0",
          borderRadius: "16px",
          }}/>

      </div>



      <div style={{marginTop:"143px", marginBottom:"90px"}}>
        <div className="heading">
        Why farmed fish are dying?
        </div>
        <div className='textbox' style={{width:"614px"}}>
        Farmed fish are more susceptible to diseases, parasites, and environmental
         stressors, leading to significant mortality rates. To address these challenges,
          aquaculture often relies heavily on antibiotics in feed, which can accumulate in
           fish tissues and affect human health when consumed. Additionally, the
            overuse of antibiotics in fish farming contributes to antibiotic resistance, 
            posing risks to both human health and marine ecosystems.
        </div>
      </div>

      <div>
        <img src="farmfish.png" style={{width:"1200px"}}/>
      </div>


      <div style={{marginTop:"374px"}}>
            <div className='special_heading'>
          Our story concludes here, but the journey continues! Dive 
          deeper into fish-related insights on our fish dashboard!
            </div>
            <div className='textbox' style={{textAlign:"center"}}>
            This decline not only disrupts ecosystems but also poses significant economic challenges, as the decreasing 
            fish population also increases the price of fish. correlation between fish 
            </div>
          </div>


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

 <TableauEmbed figID=
        "viz1733360496221"
        figName="shared/W2C8XQPJ4"
        figSrc="https://public.tableau.com/static/images/W2/W2C8XQPJ4/1_rss.png"
        figStatic="https://public.tableau.com/static/images/W2/W2C8XQPJ4/1.png"></TableauEmbed>





  </div>
  <div style={{
      top:"8500px",
      left:"100px",
      position:"absolute"
    }}>
      <img src='salmon_all.png'style={{
        scale:"30%",
        transform: "scaleX(-1)"}}/>
    </div>

  <div style={{
      top:"20000px",
      left:"500px",
      zIndex:"100",
      position:"absolute"
    }}>
      <img src='Numbered.png'style={{width:"269px"}}/>
    </div>

    <div style={{
        top:"2964px",
        left:"135px",
      zIndex:"100",
      position:"absolute"
    }}>
      <img src='sharks.png'style={{width:"866px"}}/>
    </div>

    <div style={{
        position:"absolute",
        top:"18000px",
        zIndex:"-10",
      }}>
        <img src='1coral.png'style={{width:"1512px", height:"5053px"}}/>
      </div>
  </>
  )
}

export default App
