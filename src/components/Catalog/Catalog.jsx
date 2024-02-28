import React, { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { Card } from 'components/Card/Card';
import { BtnLoadMore } from './Catalog.styled';
import { nanoid } from 'nanoid';

export const Catalog = ({ filterOption }) => {
  const [psycho, setPsycho] = useState([]);
  const [visiblePsycho, setVisiblePsycho] = useState(3);

  useEffect(() => {
    const fetchPsycho = async () => {
      try {
        const psychosRef = ref(db, '/');
        const snapshot = await get(psychosRef);

        console.log('Data:', snapshot.val());

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
          console.log('Говно');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
      <ul>
        {psycho.map(person => (
          <Card key={person.id} person={person} />
        ))}
      </ul>
      {psycho.length >= 3 && psycho.length < 32 && (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      )}
    </div>
  );
};
