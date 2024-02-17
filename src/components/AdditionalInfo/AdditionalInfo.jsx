import {
  Comment,
  ImgRev,
  RatingRev,
  RevName,
  ReviewCard,
  WrapRev,
} from './AdditionalInfo.styled';
import icons from '../../common/sprite.svg';
import { useState } from 'react';

export const AdditionalInfo = ({ review, index }) => {
  const firstLetter = review.reviewer.charAt(0).toUpperCase();

  return (
    <ReviewCard key={index}>
      <WrapRev>
        <ImgRev>{firstLetter}</ImgRev>
        <div>
          <RevName>{review.reviewer}</RevName>
          <RatingRev>
            <svg width={17} height={13}>
              <use href={`${icons}#star`} />
            </svg>
            <p>{review.rating}</p>
          </RatingRev>
        </div>
      </WrapRev>
      <Comment>{review.comment}</Comment>
    </ReviewCard>
  );
};
