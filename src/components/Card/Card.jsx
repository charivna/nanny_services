import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import icons from '../../common/sprite.svg';
import {
  About,
  AddingInfo,
  AppointmentBtn,
  BtnLike,
  CardWrap,
  FirstLine,
  InfoWrap,
  Name,
  Photo,
  Price,
  PsTittle,
  Rating,
  ReadMoreBtn,
  RightPart,
  SecondBlock,
  Value,
  WrapImg,
} from './Cart.styled';
import { useEffect, useState } from 'react';
import { ModalAppointment } from 'components/ModalAppointment/ModalAppointment';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const Card = ({ person }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreInfo, setMoreInfo] = useState(false);
  const [isAppModalOpen, setAppModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      const userId = user?.uid;
      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
      setIsLiked(
        storedFavorites.some(fav => fav.avatar_url === person.avatar_url)
      );
    });

    return () => unsubscribe();
  }, [person.avatar_url]);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      try {
        const userPreferences = JSON.parse(localStorage.getItem(userId)) || {};
        userPreferences.favorites = userPreferences.favorites || [];

        if (isLiked) {
          userPreferences.favorites.push(person.avatar_url);
        } else {
          userPreferences.favorites = userPreferences.favorites.filter(
            id => id !== person.avatar_url
          );
        }

        localStorage.setItem(userId, JSON.stringify(userPreferences));
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    }
  }, [isLiked, person.avatar_url]);

  const handlerClickAppointment = () => {
    setAppModalOpen(prevIsAppModalOpen => !prevIsAppModalOpen);
  };

  const handlerClickReadMore = () => {
    setMoreInfo(prevIsMoreInfo => !prevIsMoreInfo);
  };
  const handlerClickLike = () => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      const newIsFavorite = !isLiked;
      setIsLiked(newIsFavorite);

      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];

      if (newIsFavorite) {
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify([...storedFavorites, person])
        );
      } else {
        const updatedFavorites = storedFavorites.filter(
          fav => fav.avatar_url !== person.avatar_url
        );
        localStorage.setItem(
          `favorites-${userId}`,
          JSON.stringify(updatedFavorites)
        );
      }
    } else {
      console.error('Error: User not logged in.');
    }
  };

  const handlerCloseModal = () => {
    setAppModalOpen(false);
  };

  return (
    <CardWrap>
      <WrapImg>
        <Photo src={person.avatar_url} alt="psychologist_photo" />
      </WrapImg>

      <InfoWrap>
        <FirstLine>
          <PsTittle>Psychologist</PsTittle>
          <RightPart>
            <svg width={17} height={13}>
              <use href={`${icons}#star`} />
            </svg>
            <Rating>
              Rating: {person.rating}{' '}
              <span style={{ marginRight: '4px' }}>|</span>
            </Rating>
            <Price>
              {' '}
              Price / 1 hour:{' '}
              <span style={{ color: 'rgb(56, 205, 62)' }}>
                {person.price_per_hour}$
              </span>{' '}
            </Price>
            <BtnLike onClick={handlerClickLike}>
              {isLiked ? (
                <svg
                  width={26}
                  height={26}
                  style={{ fill: 'white', stroke: 'black' }}
                >
                  <use href={`${icons}#choose-heart`} />
                </svg>
              ) : (
                <svg
                  width={26}
                  height={26}
                  style={{ fill: 'white', stroke: 'black' }}
                >
                  <use href={`${icons}#heart`} />
                </svg>
              )}
            </BtnLike>
          </RightPart>
        </FirstLine>

        <Name>{person.name}</Name>
        <SecondBlock>
          <AddingInfo>
            Experience: <Value> {person.experience}</Value>{' '}
          </AddingInfo>
          <AddingInfo>
            License:<Value> {person.license}</Value>{' '}
          </AddingInfo>
          <AddingInfo>
            Specialization:<Value>{person.specialization}</Value>{' '}
          </AddingInfo>
          <AddingInfo>
            Initial_consultation: <Value>{person.initial_consultation}</Value>
          </AddingInfo>
        </SecondBlock>

        <About>{person.about}</About>
        {isMoreInfo ? (
          <>
            <ul>
              {person.reviews.map((review, index) => (
                <AdditionalInfo key={index} review={review} index={index} />
              ))}
            </ul>
            <AppointmentBtn onClick={handlerClickAppointment}>
              Make an appointment
            </AppointmentBtn>
            {isAppModalOpen && (
              <ModalAppointment person={person} onClose={handlerCloseModal} />
            )}
          </>
        ) : (
          <ReadMoreBtn onClick={handlerClickReadMore}>Read more</ReadMoreBtn>
        )}
      </InfoWrap>
    </CardWrap>
  );
};
