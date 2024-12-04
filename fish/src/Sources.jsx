import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const Sources = () => {
    let sources = [
        "https://www.statista.com/statistics/1026343/global-salmonids-supply/",
        "https://fdc.nal.usda.gov/food-details/2684441/nutrients"
    ]
  return (
    <div >
        {
            sources.map((link, i) => (
                <div>
                    <a
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