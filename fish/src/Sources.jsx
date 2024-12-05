import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './App.css'


const Sources = () => {
    let sources = [
        "https://www.livingplanetindex.org/search",
        "https://oehha.ca.gov/climate-change/epic-2022/impacts-vegetation-and-wildlife/chinook-salmon-abundance#:~:text=There%20has%20been%20a%20dramatic,of%20returning%20salmon%20since%202011.&text=Salmon%20River%20spring-run%20Chinook%20salmon%20abundance%20has%20fluctuated%20between,ranging%20from%2095%20to%20290.",
        "https://ourworldindata.org/fish-and-overfishing",
        
        "https://ourworldindata.org/grapher/fish-stocks-by-region?country=~AUS",
        
        "https://ourworldindata.org/grapher/fish-and-seafood-consumption-per-capita",
        
        "https://casalmon.org/statewide-status/#all-species",
        
        "https://www.healthline.com/nutrition/salmon-nutrition-and-health-benefits#1",
        
        "https://www.usinflationcalculator.com/inflation/current-inflation-rates/",
        
        "https://www.nytimes.com/2023/10/16/dining/farm-raised-salmon-sustainability.html",
        "https://eatwildsalmon.com/blogs/wild-seafood/is-wild-caught-seafood-better-than-farmed-fish?srsltid=AfmBOoriywDnzxU9TZ_-fwmunEdTT2XuLvHivzX2q8HhcNt0wVzOu4NQ",
        
        "https://iseralaska.org/static/legacy_publication_links/greatsalmonrun/SalmonReport_Ch_8.pdf",
        "https://ourworldindata.org/grapher/fish-stocks-by-region?country=~AUS",
        "https://ourworldindata.org/fish-and-overfishing",
        "https://ourworldindata.org/grapher/fish-and-seafood-consumption-per-capita"

    ]
  return (
    <div style={{backgroundColor:"black", padding:"30px"}}>
        <div className='heading'>
            Data sources
        </div>

        {
            sources.map((link, i) => (
                <div className='citations' style={{width:"auto"}}>
                    - <a
                    key={i}
                    href={link}
                    target="_blank">
                        {link}
                    </a>
                </div>
            ))
        }

    </div>
  );
};

export default Sources;