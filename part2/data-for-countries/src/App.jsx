import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryInfo from './components/CountryInfo';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      })
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  )

  return (
    <div>
      
      <Filter searchCountry={searchCountry} setSearchCountry={setSearchCountry} />

      {filteredCountries.length > 10 ? (
        <p>Too many matches, please make your query more specific.</p>
      ) : (
        filteredCountries.length === 1 ? (
            <CountryInfo country={filteredCountries[0]} />
        ) : (
          filteredCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
            </li>
          ))
        )
      )}
    </div>
  );
};

export default App;
