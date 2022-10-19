import React, { useState } from 'react'
import axios from 'axios'
import ShowTemp from './ShowTemp'

function App() {
    const [city, setCity] = useState("")
    const [data, setData] = useState({
        description: "",
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })

    const handleClick = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c412e32f8374f6a87ce341d095a159f6`)
            .then((response) => {
             
                let values=response.data;
                console.log(values);
                setData({
              
                  
                    description: values.weather[0].description,
                    temp: values.main.temp,
                    temp_max: values.main.temp_max,
                    temp_min: values.main.temp_min,
                    humidity: values.main.humidity,
                    sunrise: values.sys.sunrise,
                    sunset: values.sys.sunset,
                    country: values.sys.country,

                })
            })
    } 

    return (
        <div style={{backgroundColor:"#1b344b" , height: "820px"} }>
            <div className='container text-center my-2' style={{ width:"60vh"} }>
                <h1 style={{ color:"white" } }>Weather App</h1>
                <input type="text" className='from-control' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                <button className='btn btn-primary mx-2' type='submit' onClick={handleClick}>Search</button>

            </div>

            <ShowTemp text ={data}></ShowTemp>
        </div>
    )
}

export default App
