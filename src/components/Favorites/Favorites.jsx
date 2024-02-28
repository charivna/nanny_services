import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { Card } from 'components/Card/Card';
import { onAuthStateChanged } from 'firebase/auth';

export const Favorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userId = auth.currentUser?.uid;
        if (userId) {
          const storedFavorites =
            (await JSON.parse(localStorage.getItem(`favorites-${userId}`))) ||
            [];
          setFavoriteCards(storedFavorites);
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        fetchFavorites();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favoriteCards.map((favoriteCard, index) => {
          return <Card key={index} person={favoriteCard} />;
        })}
      </div>
    </div>
  );
};
