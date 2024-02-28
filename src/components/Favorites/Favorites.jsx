// Favorites.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { Card } from 'components/Card/Card';
import { onAuthStateChanged } from 'firebase/auth';
import { NoFav } from './Fvorites.styled';
import { HeaderContainer } from 'components/Header/Header.styled';
import { BtnLoadMore } from 'components/Catalog/Catalog.styled';

export const Favorites = ({ filterOption }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [visibleFavoriteCards, setVisibleFavoriteCards] = useState(1);

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

  const applyFilter = (cards, option) => {
    switch (option) {
      case 'A to Z':
        return cards.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'Z to A':
        return cards.sort((a, b) => b.name.localeCompare(a.name));
      case 'Less than 10$':
        return cards.filter(person => person.price_per_hour < 10);
      case 'Greater than 10$':
        return cards.filter(person => person.price_per_hour > 10);
      case 'Popular':
        return cards.filter(person => person.rating > 4);
      case 'Non popular':
        return cards.filter(person => person.rating <= 4);
      default:
        return cards;
    }
  };

  const filteredFavoriteCards = applyFilter(favoriteCards, filterOption);

  const handleLoadMore = () => {
    const remainingCards =
      filteredFavoriteCards.length - visibleFavoriteCards * 3;
    const newVisibleCards = Math.min(3, remainingCards);
    setVisibleFavoriteCards(
      prevVisibleFavoriteCards => prevVisibleFavoriteCards + newVisibleCards
    );
  };

  return (
    <div>
      {filteredFavoriteCards.length === 0 ? (
        <HeaderContainer>
          <NoFav>No favorites yet. You can choose it in catalog.</NoFav>
        </HeaderContainer>
      ) : (
        <div>
          {filteredFavoriteCards
            .slice(0, visibleFavoriteCards * 3)
            .map((favoriteCard, index) => (
              <Card key={index} person={favoriteCard} />
            ))}
          {filteredFavoriteCards.length > visibleFavoriteCards * 3 && (
            <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
          )}
        </div>
      )}
    </div>
  );
};
