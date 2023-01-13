import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div`
  padding: 1rem 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 2;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Link to={`country/${name.split(' ').join('-')}`}>
        <CardImage src={img} alt={name} />
      </Link>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => {
            return (
              <CardListItem key={el.title}>
                <b>{el.title}: </b> {el.description}
              </CardListItem>
            );
          })}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
