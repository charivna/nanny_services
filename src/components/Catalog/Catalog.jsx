import React, { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { Card } from 'components/Card/Card';
import { BtnLoadMore, Cap, List } from './Catalog.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { LoaderContainer } from 'components/Loader/Loader.styled';

export const Catalog = ({ filterOption }) => {
  const [psycho, setPsycho] = useState([]);
  const [visiblePsycho, setVisiblePsycho] = useState(3);
  const [dataFound, setDataFound] = useState(true);

  useEffect(() => {
    const fetchPsycho = async () => {
      try {
        const psychosRef = ref(db, '/');
        const snapshot = await get(psychosRef);

        if (snapshot.exists()) {
          const psychoArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id: nanoid(),
              ...data,
            })
          );

          let filteredPsycho = applyFilter(psychoArray, filterOption);

          setPsycho(filteredPsycho.slice(0, visiblePsycho));
          setDataFound(true);
        } else {
          toast.error('No data available');
          setDataFound(false);
        }
      } catch (error) {
        toast.error('Error fetching data:', error);
        setDataFound(false);
      }
    };

    fetchPsycho();
  }, [filterOption, visiblePsycho]);

  const handleLoadMore = () => {
    setVisiblePsycho(prevVisiblePsycho => prevVisiblePsycho + 3);
  };

  const applyFilter = (psychoArray, option) => {
    switch (option) {
      case 'A to Z':
        return psychoArray.sort((a, b) => a.name.localeCompare(b.name));
      case 'Z to A':
        return psychoArray.sort((a, b) => b.name.localeCompare(a.name));
      case 'Less than 10$':
        return psychoArray.filter(person => person.price_per_hour < 10);
      case 'Greater than 10$':
        return psychoArray.filter(person => person.price_per_hour > 10);
      case 'Popular':
        return psychoArray.sort((a, b) => b.rating - a.rating);
      case 'Non popular':
        return psychoArray.sort((a, b) => a.rating - b.rating);
      default:
        return psychoArray;
    }
  };

  return (
    <div>
      {visiblePsycho === 0 && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      {dataFound ? (
        <List>
          {psycho.length > 0 ? (
            psycho.map(person => <Card key={person.id} person={person} />)
          ) : (
            <Cap>No psychologists found for the selected criteria.</Cap>
          )}
        </List>
      ) : (
        <div>No data found for the selected criteria.</div>
      )}
      {psycho.length >= 3 && psycho.length < 32 && (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      )}
    </div>
  );
};
