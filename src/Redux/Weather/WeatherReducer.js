import { RESIVE_WEATHER_ERROR , RESIVE_WEATHER_RESPONES , SEND_WEATHER_REQUEST } from "./WeatherTypes";

const init = {
    loading:false,
    data:{},
    error:''
}

const weatherReducer = (state=init,action)=>{
    switch (action.type){
        case SEND_WEATHER_REQUEST :
            return{...state , loading:true}
            case RESIVE_WEATHER_RESPONES :
                return {loading: false, data:action.payload , error:''}
                case RESIVE_WEATHER_ERROR :
                    return {loading:false, data:{},error:action.payload}
                    default:
                        return state
    }
}

export default weatherReducer;