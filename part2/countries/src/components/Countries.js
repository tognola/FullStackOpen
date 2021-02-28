import React from 'react'
import Languages from './Languages';
import Weather from './Weather';

function Countries({countries, setFilter}) {

    if(countries.length > 10){
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    }

    const selectCountry = (country) => () => {
        console.log(country.name)
        setFilter(country.name.toLowerCase())
    }

    if(countries.length === 1){
        const country = countries[0];
        console.log(country)
        return (
            <div>
                <h2>{country.name}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population} </p>
                <Languages languages = {country.languages} />
                <img src={country.flag} width="100px" alt="flag"/>
                <Weather country = {country} />
            </div>
        )
    }
    return (
        <div>
            <ul>
                {
                    countries.map(
                        country => 
                        <li key = {country.alpha3Code}>
                            {country.name} <button onClick = {selectCountry(country)}>show</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Countries
