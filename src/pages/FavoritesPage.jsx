import React, { useState } from 'react';
import { Favorites } from 'components/Favorites/Favorites';
import Filter from 'components/Filter/Filter';
import { ContainerCatalog } from 'components/Layout/Layout.styled';

const FavoritesPage = () => {
  const [filterOption, setFilterOption] = useState('Show all');

  const handleFilterChange = selectedOption => {
    setFilterOption(selectedOption);
  };

  return (
    <>
      <ContainerCatalog>
        <Filter onFilterChange={handleFilterChange} />
        <Favorites filterOption={filterOption} />
      </ContainerCatalog>
    </>
  );
};

export default FavoritesPage;
