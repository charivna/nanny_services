import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { Card } from 'components/Card/Card';
import { BtnLoadMore } from './Catalog.styled';

export const Catalog = () => {
  const [psycho, setPsycho] = useState([]);
  const [visiblePsycho, setVisiblePsycho] = useState(3);

  useEffect(() => {
    const psychosRef = ref(db, '/');
    get(psychosRef)
      .then(snapshot => {
        console.log('Data:', snapshot.val());
        if (snapshot.exists()) {
          const psychoArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setPsycho(psychoArray.slice(0, visiblePsycho));
        } else {
          console.log('Говно');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [visiblePsycho]);

  const handleLoadMore = () => {
    setVisiblePsycho(prevVisiblePsycho => prevVisiblePsycho + 3);
  };
  return (
    <div>
      <ul>
        {psycho.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </ul>
      <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
    </div>
  );
};
