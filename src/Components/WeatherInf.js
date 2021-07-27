import React from 'react';

const WeatherDisplay = ({weather}) => {

    // WHERE DO I PUT YOU!?!??!!????!?!? 
    // const mainTemp = weather.main.temp
    //     if (mainTemp < 40) {
    //         mainTemp.style.color = "blue";
    //         return mainTemp;
    //     }
    //     else if (mainTemp > 70) {
    //         mainTemp.style.color = "red";
    //         return mainTemp;
    //     } else {
    //         return mainTemp;
    //     }

    const loaded = () => {  
        return (
            <>
            <small id="place">{weather.name}</small>
            <h1><h1>{weather.main.temp}</h1></h1>
            <h2>{weather.weather[0].main}</h2>
            <div className="mix-max">
                <div className="temps">
                    <small>min</small>
                    <h2>{weather.main.temp_min}</h2>
                </div>
                <div className="temps">
                    <small>max</small>
                    <h2>{weather.main.temp_max}</h2>
                </div>
                

            </div>
            </>
        );
    };

    const loading = () => {
        return <h1>No Weather to Display</h1>

    };

    
    

    return weather ? loaded() : loading();
};

export default WeatherDisplay;
