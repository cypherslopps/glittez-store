import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [flags, setFlags] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  const fetchCountries = useCallback(() => {
    (async () => {
      try {
        const [countriesFlags, countriesCurrencies] = await Promise.all([
          axios("https://countriesnow.space/api/v0.1/countries/flag/images"),
          axios("https://countriesnow.space/api/v0.1/countries/currency")
        ]);
        const countriesFlagsResponse = countriesFlags.data.data;
        const countriesCurrenciesResponse = countriesCurrencies.data.data;

        const allCountries = countriesFlagsResponse.map(country => country.name);
        const allCountriesFlags = countriesFlagsResponse.map(country => country.flag);
        let allCurrencies = countriesCurrenciesResponse.map(country => country.currency);
        allCurrencies = allCurrencies.filter((value, index) => allCurrencies.indexOf(value) === index).filter(value => value !== "");
        
        setCountries(prev => ([
          ...prev,
          ...allCountries
        ]));

        setFlags(prev => ([
          ...prev,
          ...allCountriesFlags
        ]));

        setCurrencies(prev => ([
          ...prev,
          ...allCurrencies
        ]));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries])

  return {
    countries,
    flags,
    currencies
  };
}

const useStates = (country) => {
  const [states, setStates] = useState([]);

  const fetchSpecifiedCountryStates = useCallback(() => {
    (async () => {
      if (country) {
        const request = await axios("https://countriesnow.space/api/v0.1/countries/states");
        const response = request.data.data;
        const countryStates = response.filter(data => {
          if (data.name.toLowerCase() === country.toLowerCase()) {
            return data.states;
          }
        });
        const allStates = countryStates.map(country => country.states).flat().map(state => state.name);

        setStates(allStates);
      }
    })();
  }, [country])
  
  useEffect(() => {
    fetchSpecifiedCountryStates();
  }, [fetchSpecifiedCountryStates])

  return states || [];
}

const useCities = (country, state) => {
  const [cities, setCities] = useState([]);

  const fetchSpecifiedCountryStatesCities = useCallback(() => {
    (async () => {
      if (country && state) {
        try {
          const request = await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
            country,
            state
          });
          const cities = request.data.data;
          
          setCities(cities);
        } catch(err) {
          console.log(err);
        }
      }
    })();
  }, [country, state])
  
  useEffect(() => {
    fetchSpecifiedCountryStatesCities();
  }, [fetchSpecifiedCountryStatesCities])

  return cities || [];
}

export { useCountries, useStates, useCities }