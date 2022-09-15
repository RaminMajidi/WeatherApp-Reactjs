import React,{useRef,useContext} from "react";
import "./Weather.css";
import { useDispatch, useSelector } from "react-redux";
import getWeatherInfo from "../Redux/Weather/WeatherAction";
import { BgModeContext } from "../Context/BgModeContext";

//This function for Convert temperature from Fahrenheit to Celsius
function convertToCel(value) {
    return (value - 273).toFixed(2);
}
//This function for Convert English Description to Persian 
function convertToDesc(value) {
    var persianDesc = value;
    switch (value) {
        case "clear sky":
            persianDesc = "آسمان صاف";
            break;
        case "few clouds":
            persianDesc = "چند ابری";
            break;
        case "mist":
            persianDesc = "غبار آلود";
            break;
        case "broken clouds":
            persianDesc = "ابرهای شکسته";
            break;
        case "overcast clouds":
            persianDesc = "ابرهای ابری";
            break;
        case "moderate rain":
            persianDesc = "باران متوسط";
            break;
        case "scattered clouds":
            persianDesc = "ابرهای پراکنده";
            break;
        case "light intensity shower rain":
            persianDesc = "باران رگباری با شدت کم";
            break;
    }
    return persianDesc;
}


const Weather = ()=>{
const {bgMode,setBgMode} = useContext(BgModeContext);
const {loading,data,error} = useSelector(state=>state);
const dispatch = useDispatch();
const textInput = useRef(null);


async function getData(e){
if(e.key === "Enter"){
    await dispatch(getWeatherInfo(textInput.current.value))
}
}
return(
<div className={`Weather ${bgMode}`}>
    <div>
        <input onKeyDown={getData}ref={textInput} className="input-city" type="text" placeholder={"نام شهر به انگلیسی" || data.name}/>
    </div>
{loading ? (
    <>
    <h3 className="state-title">LOADING...</h3>
    </>

):data.main ?(
    <>
     <div>
           <h3 className="state-title">کشور</h3>
           <p className="state-text"><span>{data.sys.country}</span></p>
           <h3 className="state-title">شهر</h3>
           <p className="state-text"><span>{data.name}</span></p>
           <h3 className="state-title">وضعیت آب و هوا </h3>
           <p className="state-text"><span>{convertToDesc(data.weather[0].description)}</span></p>
           <h3 className="state-title">دمای هوا </h3>
           <p className="state-text"><span>{convertToCel(data.main.temp)}</span><span> °C</span></p>
           <h3 className="state-title">فاصله از سطح دریا</h3>
           <p className="state-text"><span>{data.main.sea_level}</span><span>m</span></p>
    </div>
    </>

): error ?(
    <>
     <div>
           <h3 className="state-title">لطفا نام شهر یا کشور را به درستی وارد کنید</h3>
     </div>
    </>
) :(
    <div>
           <h3 className="state-title">لطفا نام شهر یا کشور را وارد کنید</h3>
    </div>  
)
}
</div>
)
}
export default Weather;