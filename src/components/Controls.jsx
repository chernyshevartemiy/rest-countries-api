import { Search } from './Search';
import React from 'react';

export const Controls = ({ onSearch, countries }) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    onSearch(search);
  }, [search, countries]);
  return (
    <>
      <Search search={search} setSearch={setSearch} />
    </>
  );
};
