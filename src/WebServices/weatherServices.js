import { DateTime } from "luxon";

const API_KEY ="d0b0372d3886f11569ef517262bf5ba8";
const MAIN_URL ="https://api.openweathermap.org/data/2.5";


// we already create so many kind of weather situation so  we would send our request as hourly, daily, minutely,current, reel feel, humidity exc

const getWeatherData = (infoType, searchParams)=>{
    const url = new URL(MAIN_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});
    
    return fetch(url)
    .then((res)=> res.json())
    
};

const formatCurrentWeather= (data) => {
    const {
        coord: {lat, lon},
        main:{temp,feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
    } = data

    const {main: details, icon} = weather[0]

    return{lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,weather,speed}
};
const formatForecastWeather = (data)=>{
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d=>{
        return {
            title: formatToLocalTime(d.dt,timezone, 'ccc' ),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    }); // we just need 5 element
    //to manipulate the time easly ne weed to install luxon 
    hourly = hourly.slice(1,6).map(d=>{
        return {
            title: formatToLocalTime(d.dt,timezone, 'hh:mm a' ),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        }
    });
    return (timezone, daily,hourly);
};

const getFormattedWeatherData = async (searchParams)=>{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    return formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("onecall",{lat, lon, exclude:'current,minutely,alerts', units: searchParams.units}).then(formatForecastWeather)
    return {...formatCurrentWeather, ...formatForecastWeather};
};    
const formatToLocalTime = {secs, zone, format="cccc, dd ,LLL, yyyy" | Local time:'hh:mm a '} => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;