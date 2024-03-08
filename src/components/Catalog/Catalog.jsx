import React, { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { Card } from 'components/Card/Card';
import { BtnLoadMore, List } from './Catalog.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { LoaderContainer } from 'components/Loader/Loader.styled';

export const Catalog = ({ filterOption }) => {
  const [psycho, setPsycho] = useState([]);
  const [visiblePsycho, setVisiblePsycho] = useState(3);

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
        } else {
          toast.error('No data available');
        }
      } catch (error) {
        toast.error('Error fetching data:', error);
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
        return psychoArray.filter(person => person.rating > 4);
      case 'Non popular':
        return psychoArray.filter(person => person.rating <= 4);
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
      <List>
        {psycho.map(person => (
          <Card key={person.id} person={person} />
        ))}
      </List>
      {psycho.length >= 3 && psycho.length < 32 && (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      )}
    </div>
  );
};
