import axios from 'axios';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { searchByCountry } from '../config';

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = React.useState(null);
  React.useEffect(() => {
    axios.get(searchByCountry(name.replaceAll('-', ' '))).then(({ data }) => {
      setCountry(data[0]);
      console.log(data[0]);
    });
  }, [name]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country}/>}
    </div>
  );
};
