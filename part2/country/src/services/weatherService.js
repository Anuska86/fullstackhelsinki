import axios from "axios";
import { API_KEY } from './config';

const baseURL = "http://api.weatherapi.com/v1";

//http://api.weatherapi.com/v1/current.json?key=&q=29.5,45.75

const getWeather=() => {
const key = API_KEY
const weatherURL=`${baseURL}/current.json?key=${key}&q=${latlng}`
const request=axios.get(weatherURL)
return request.then(response=>{
    const weatherInfo=response.data
    const iconURL=``
    const weatherWithIcon={...weatherInfo, "iconURL":iconURL}
    return weatherWithIcon
})
}

export default {
    getWeather:getWeather 
}