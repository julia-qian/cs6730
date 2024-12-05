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
          <div className='names' style={{marginBottom:"46px"}}>
          Jin Kim, Julia Qian, Jaeri Suh, Elaine Xu
          </div>
          <div className='title'>
            Net Loss
          </div>
          <div className='subtitle' style={{marginBottom:"23px"}}>
            Unpacking the Decline of Fish Populations
          </div>
 
          <div className='textbox'>Discover the story behind the alarming decline in fish populations worldwide! 
            Our data visualization dives into why fish populations are on decline, 
            the impact of overfishing, and disruptions to our ecosystem. Most importantly, 
            we’ll cover why you should care by sharing the far-reaching consequences for 
            biodiversity, food security, and human health.</div>
        </div>
        
        <div style={{marginTop:"140px"}}>
          <div className="heading" style={{marginBottom:"24px"}}>
          How many fish species are under the water? 
          </div>
          <div className='textbox' style={{width:"895px", marginBottom:"64px"}}>
          <p>We often hear there are  
          <span className="highlighted"> a lot of fish</span> in the sea. But are there more than 
          amphibians or reptiles? Let’s take a closer look with this graph showing 
          the biodiversity of vertebrate species.</p>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <img src='unitchart.png' style={{width:"1366px"}}/>
        </div>
    </div>

    <div style={{height:"858px"}}></div>

      <div className="red_head">
        Lost Fishes: <br></br>
        A 81% Decline in Just 30 Years!
      </div>
      <div className='textbox' style={{width:"635px", marginBottom:"64px"}}>
      Despite the rich diversity of fish, the harsh reality is that the abundance 
      of migratory freshwater fish has been sharply declining between 1970 to 2020. 
      Asia-Oceania has seen a 28% reduction, while the Caribbean experienced a staggering 
      91% decrease. 
      </div>

      {/* Index of Abundance */}
      <FlourishEmbed figureNo="20610313"></FlourishEmbed>
      <div style={{marginTop:"91px"}}>
        <div className="pink_head">
        Why Are Freshwater Fish Vanishing?
        </div>
        <div className='textbox' style={{width:"auto", marginBottom:"64px"}}>
        There are a variety of factors leading to freshwater fish population decline. Globally, 
        key threats include habitat destruction and pollution. However, there are stark regional 
        differences— exploitation leads in Latin America, while habitat degradation dominates in 
        Europe.
        <br></br><br></br>
        These regional challenges indicate that we need to take tailored in order to implement and
         sustain impactful conservation efforts.
        </div>
      </div>


      {/* threats to endangered */}
      <div style={{margin:"auto"}}>
        <TableauEmbed figID=
          "viz1733344698495"
          figName="DistributionofThreatstoFreshwaterFish/Dashboard1"
          figSrc="https://public.tableau.com/static/images/Di/DistributionofThreatstoFreshwaterFish/Dashboard1/1_rss.png"
          figStatic="https://public.tableau.com/static/images/Di/DistributionofThreatstoFreshwaterFish/Dashboard1/1.png"></TableauEmbed>
      </div>
    
    <div>
      <div className="heading" style={{marginTop:"31px"}}>
        Plastic Tide: The Surge of Ocean Microplastics Since 1972
        </div>
        <div className='textbox' style={{width:"auto", marginBottom:"64px"}}>
        Ocean microplastic concentrations pose a significant threat to fish populations, con
        tributing to their decline. Check out the increasing trend of microplastic concentrations
         over time.
        </div>
    </div>


      {/* map */}
      <div style={{marginTop:"60px"}}>
        <FlourishEmbed figureNo="20624103"></FlourishEmbed>
      </div>



      {/* co2 */}
      <FlourishEmbed figureNo="20607752"></FlourishEmbed>

        <div style={{display:"flex", marginBottom:"89px", gap:"40px"}}>
          <div className='textbox' style={{width:"614px"}}>
          At first glance, there may not appear to be a significant increase in 
          ocean acidification levels. However, it’s important to note that these 
          levels tend to fluctuate seasonally, and filtering by month 
          shows how acidification levels are increasing over time.
          </div>
          <div className='textbox' style={{width:"614px"}}>
          This increase disrupts ecosystems, affecting sea creatures with shells and predators
           higher up the food chain that feed on them. It also harms fish and other marine life
            sensitive to higher acidity. As fish populations are negatively impacted, we see
             downstream effects like higher fish prices, more fishing, and more aquaculture.
          </div>
        </div>

      
      {/* gapminder */}
      <FlourishEmbed figureNo="20626630"></FlourishEmbed>

      <div style={{display:"flex", marginBottom:"173px", gap:"40px"}}>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          If we take a closer look at the changes in biomass and fishing intensity by region,
           it becomes evident that the rate of fishing has increased. <br></br><br></br>

          Between 1970 and 2011, the health of global fish populations significantly 
          declined, with fishing rates increasing beyond sustainable levels in many regions. 
          Fish stocks, measured by biomass, dropped below sustainable levels (value of 1), 
          indicating overfishing. Fishing intensity, represented by bubble size, shows the 
          proportion of fish populations caught annually. 
          </div>
          <div className='textbox' style={{width:"614px", marginBottom:"20px"}}>
          In 1970, fish biomass was relatively high in regions like South America and
           Japan, with varying fishing intensities. By 2011, biomass had dramatically 
           decreased across most regions, particularly in the U.S. (Northeast, Southeast,
            and West Coasts), while fishing intensity rise, especially in Japan. <br></br><br/>

          This highlights the link between rising fishing pressure and fish population declines,
           with unsustainable practices driving these trends, notably in U.S. waters.
          </div>
        </div>

      <div style={{height:"630px"}}>
      </div>

      <div style={{display:"flex", alignItems:"center", gap:"51px"}}>
        <img src='salmongroup.png'
        style={{width:"622px",
          // height: "819px",
          flexShrink:"0",
          borderRadius: "16px"}}/>
        <div style={{height:"fit-content"}}>
          <div className="heading">
          Americans’ Favorite Fish
          </div>
          <div className='textbox' style={{width:"614px"}}>
          Salmon has become the second most popular seafood choice in the U.S.,
           following shrimp, showing notable growth.
          <br></br><br></br>
          In 2021, Americans consumed 3.38 pounds of salmon per capita, an 
          increase of 0.55 pounds from the previous year. From 2012 to 2021, the global value
           of salmon sales grew by 120%, while volume sales increased by 45%. With the rapid 
           rise in salmon popularity, the population of wild salmon is also declining.
          </div>
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




 <TableauEmbed figID=
        "viz1733364921367"
        figName="FishingData_17333593158860/Dashboard1"
        figSrc="https://public.tableau.com/static/images/Fi/FishingData_17333593158860/Dashboard1/1_rss.png"
        figStatic="https://public.tableau.com/static/images/Fi/FishingData_17333593158860/Dashboard1/1.png"></TableauEmbed>

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

    <div 
      className='textbox'
      style={{
        zIndex:"100",
        position:"absolute",
        left:"300px",
        top:"2600px",
        width:"600px"
        }}>
        Fish biodiversity surpasses that of all other vertebrates combined. 
        In fact, there are nearly 6x more fish species than mammals, with an estimated 3.5
          trillion fish swimming beneath the waves.
    </div>


    <div style={{
      top:"4480px",
      // left:"500px",
      zIndex:"100",
      position:"absolute"
    }}>
          <img style={{width:"1510px"}} src='banner.png'></img>
    </div>

    <div style={{
      top:"11400px",
      // left:"500px",
      zIndex:"100",
      position:"absolute"
    }}>
          <img style={{width:"1510px"}} src='transition.png'></img>
    </div>
  </>
  )
}

export default App
