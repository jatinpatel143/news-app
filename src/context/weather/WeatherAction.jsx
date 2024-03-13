export const fetchWeather = async (place) =>{
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7d8144501b83429dad2130753232812 &q=${place}&aqi=no`);
    const data = await response.json();
    return data;
}