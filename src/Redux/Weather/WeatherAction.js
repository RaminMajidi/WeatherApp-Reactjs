import axios from "axios";
import { RESIVE_WEATHER_ERROR , RESIVE_WEATHER_RESPONES , SEND_WEATHER_REQUEST } from "./WeatherTypes";

const sendWeatherRequest = ()=>{
    return {
        type:SEND_WEATHER_REQUEST
    }
}

const resiveWeatherResponse = (data)=>{
return{
    type:RESIVE_WEATHER_RESPONES,
    payload:data
}
}

const resiveWeatherError = (data)=>{
    return{
        type:RESIVE_WEATHER_ERROR,
        payload:data
    }
    }


    const getWeatherInfo  = (query)=>{
        return  dispatch =>{
            dispatch (sendWeatherRequest());
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=bcb4a1687c769f02ff80cdf28f48abe8`)
            .then(res=>{
                dispatch(resiveWeatherResponse(res.data))
            }).catch(error=>{
                dispatch(resiveWeatherError(error.message))
            })

        }
    }

    export default getWeatherInfo;