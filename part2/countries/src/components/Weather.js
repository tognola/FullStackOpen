import axios from 'axios';
import React, {useState, useEffect} from 'react'
 

function Weather({country}) {

    const [weather, setWeather] = useState()

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`)
        .then(
            resp => {
                setWeather(resp.data)
            }
        )
    }, [country.name])
    return (
        <div>
            <h4>Weather in {weather?.location?.name} </h4>
            <p><strong>temperature:</strong> {weather?.current?.temperature} Celsius</p>
            <div>
                <img src={weather?.current?.weather_icons[0]} alt="icon" />
            </div>
            <p><strong>wind:</strong> {weather?.current?.wind_speed} mph direction {weather?.current?.wind_dir}</p>

        </div>
    )
}

export default Weather
