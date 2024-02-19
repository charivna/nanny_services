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
import { useState } from 'react';
import { ModalAppointment } from 'components/ModalAppointment/ModalAppointment';

export const Card = ({ person }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreInfo, setMoreInfo] = useState(false);
  const [isAppModalOpen, setAppModalOpen] = useState(false);

  const handlerClickAppointment = () => {
    setAppModalOpen(prevIsAppModalOpen => !prevIsAppModalOpen);
  };

  const handlerClickReadMore = () => {
    setMoreInfo(prevIsMoreInfo => !prevIsMoreInfo);
  };

  const handlerClickLike = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
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
            <BtnLike onClick={() => handlerClickLike(person.id)}>
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
