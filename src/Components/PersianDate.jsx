import {React,useEffect, useState,useContext} from 'react';
import { BgModeContext } from '../Context/BgModeContext';
import "./PersianDate.css";
const PersianDate = ()=>{
    const {bgMode,setBgMode} = useContext(BgModeContext);
    const {hour,setHour} = useState(0);
    const [persianDate,setPersianDate] = useState({});
    function ShowDate() {
        const date = new Date(Date.now());
        const { year, literal, month, day, weekday, hour, minute, second } = Object.fromEntries(
            new Intl.DateTimeFormat("fa", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })
            .formatToParts(date).map(item => [item.type, item.value])
        );
        setPersianDate({year, literal, month, day, weekday, hour, minute, second});
    }
    useEffect(() => {
    setInterval(ShowDate,1000);
    setBgMode(hour<10 ? "BG-Morning" : hour<18 ? "BG-Noon" : "BG-Night")
    }, []);
    if(persianDate){
        return(
            <div className={`date-text ${bgMode}`}>
                <h3 className='dt'>{"امروز : " +persianDate.weekday +"  "+ persianDate.day + " / "+ persianDate.month+ " / " +persianDate.year }</h3>
                <h3 className='dt'>{persianDate.hour+" : " + persianDate.minute+" : " + persianDate.second}</h3>
            </div>
        )
    }
}
export default PersianDate;