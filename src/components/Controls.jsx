import { Search } from './Search';
import React from 'react';

export const Controls = ({onSearch}) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    onSearch(search)
  }, [search])
  return (
    <>
      <Search search={search} setSearch={setSearch} />
    </>
  );
};
