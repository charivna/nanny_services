import { NavLink } from 'react-router-dom';
import icons from '../../common/sprite.svg';
import {
  About,
  AddingInfo,
  CardWrap,
  FirstLine,
  InfoWrap,
  Name,
  Photo,
  Price,
  PsTittle,
  Rating,
  RightPart,
  SecondBlock,
  Value,
  WrapImg,
} from './Cart.styled';

export const Card = ({ person }) => {
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
            <svg
              width={26}
              height={26}
              style={{ fill: 'white', stroke: 'black' }}
            >
              <use href={`${icons}#heart`} />
            </svg>
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
        <NavLink>Read more</NavLink>
      </InfoWrap>
    </CardWrap>
  );
};
