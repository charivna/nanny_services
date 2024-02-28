import { Catalog } from 'components/Catalog/Catalog';
import Filter from 'components/Filter/Filter';
import { ContainerCatalog } from 'components/Layout/Layout.styled';
import { useState } from 'react';

const CatalogPage = () => {
  const [filterOption, setFilterOption] = useState('Show all');

  const handleFilterChange = selectedOption => {
    setFilterOption(selectedOption);
  };

  return (
    <ContainerCatalog>
      <Filter onFilterChange={handleFilterChange} />
      <Catalog filterOption={filterOption} />
    </ContainerCatalog>
  );
};

export default CatalogPage;
