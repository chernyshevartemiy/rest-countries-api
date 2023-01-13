import React from 'react';
import axios from 'axios';
import { ALL_CONTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = React.useState(countries);
  const handleSearch = (query) => {
    if (query) {
      setFilteredCountries(
        countries.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    if (!query) {
      setFilteredCountries(countries);
    }
  };
  React.useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_CONTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);

  return (
    <>
      <Controls countries={countries} onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };
          return <Card key={c.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
