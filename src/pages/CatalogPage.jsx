import { Catalog } from 'components/Catalog/Catalog';
import Filter from 'components/Filter/Filter';
import { ContainerCatalog } from 'components/Layout/Layout.styled';

const CatalogPage = () => {
  return (
    <ContainerCatalog>
      <Filter />
      <Catalog />
    </ContainerCatalog>
  );
};

export default CatalogPage;
