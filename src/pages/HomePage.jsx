import React from 'react';
import axios from 'axios';
import { ALL_CONTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFiltredCountries] = React.useState(countries);
  console.log(filteredCountries);
  const handleSearch = (query) => {
    let data = [...countries];
    if (query) {
      data = countries.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase().trim())
      );
      setFiltredCountries(data);
    }
  };
  React.useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_CONTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);
  React.useEffect(() => {
    handleSearch();
    console.log(countries);
  }, [countries]);
  return (
    <>
      <Controls onSearch={handleSearch} />
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
