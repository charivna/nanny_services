import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';

export const Catalog = () => {
  const [psycho, setPsycho] = useState([]);

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
          setPsycho(psychoArray);
        } else {
          console.log('Говно');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <div style={{ color: 'red' }}>{psycho[0]?.about}</div>;
};
