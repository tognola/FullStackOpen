import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
function App() {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(resp => {
        setCountries(resp.data)
      })
  }, [])

  const countriesToShow = countries.filter(
    country => country.name.trim().toLowerCase().includes(filter)
  )

  return (
    <div>
      <Filter filter = {filter} setFilter = {setFilter} />
      <Countries countries = {countriesToShow} setFilter = {setFilter}/>
    </div>
  );
}

export default App;
