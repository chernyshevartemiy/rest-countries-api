import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { filterByCode } from '../config';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 440px;
  }
  @media (min-width: 1024px) {
    width: 500px;
  }
`;

const InfoTitle = styled.h1`
  line-height: 1;
  margin: 0 0 1rem 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  @media (min-width: 950px) {
    flex-direction: row;
  }
  & > b {
    font-weight: var(--fw-bold);
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const Info = (props) => {
  const [neighbors, setNeighbors] = React.useState([]);
  const navigate = useNavigate();
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;
  React.useEffect(() => {
    if (borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
    }
  }, [borders]);
  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population: </b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region: </b>
              {region}
            </ListItem>
            <ListItem>
              <b>Sub Region: </b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital: </b>
              {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries: </b>
          {!borders.length ? (
            <span>This country doesn't have borders</span>
          ) : (
            <TagGroup>
              {neighbors.map((n) => (
                <Tag
                  key={n}
                  onClick={() => navigate(`/country/${n.split(' ').join('-')}`)}
                >
                  {n}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
