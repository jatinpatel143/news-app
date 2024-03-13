import React, { useContext, useEffect } from 'react';
import ThemeContext from '../context/ThemeContext';
import WeatherContext from '../context/weather/WeatherContext';
import { fetchWeather } from '../context/weather/WeatherAction';


const WeatherCard = () => {

  const {theme} = useContext(ThemeContext);

  const {weatherData,dispatch} = useContext(WeatherContext);


  const getWeather = async (place) =>{
    const data = await fetchWeather(place);
    const weatherInfo ={       // yaha ek function me data store krwaya or fir diya ese direct nhi le rha tha
      city:data.location.name,
      temp_c:data.current.temp_c,
      icon:data.current.condition.icon,
      text:data.current.condition.text,
    }
    dispatch({
      type:"GET_WEATHER",
      payload:weatherInfo,
    })
  };

  useEffect(()=>{
    getWeather("Indore");
  },[]);

  if(!weatherData || weatherData.length == 0)
  {
    <h1 className="text-secondary display-1">Loading...</h1>
  }
 

  return (
    
    <div className={theme ? "card p-5 bg-dark text-info":"card p-5 bg-secondary text-light"}>

              <h3 className={theme ? "text-center text-secondary":"text-center text-light"}>Today's Weather</h3>
              <div className="d-flex align-items-center justify-content-between p-2">
              
              <span>
                <h1>{weatherData.temp_c}°C</h1>
                <h3>{weatherData.city}</h3>
              </span>

              <span class="spanright">
                <img class="img" src={weatherData.icon} alt="" />
                <p>{weatherData.text}</p>
              </span>

              </div>

            </div>

  )
}

export default WeatherCard;