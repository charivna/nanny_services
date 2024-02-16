import styled from 'styled-components';

export const CardWrap = styled.li`
  display: flex;
  margin: 32px auto;
  box-sizing: border-box;
  max-width: 1184px;
  padding: 24px;
  align-items: center;
  border-radius: 24px;
  background: rgb(251, 251, 251);
`;

export const WrapImg = styled.div`
  padding: 2px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  box-sizing: border-box;
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  align-self: flex-start;
`;

export const Photo = styled.img`
  width: 96px;
  border-radius: 15px;
  height: 96px;
`;

export const FirstLine = styled.div`
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  display: flex;
`;

export const InfoWrap = styled.div``;
export const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PsTittle = styled.p`
  font-weight: 500;
  color: rgb(138, 138, 137);
`;

export const Price = styled.p`
  margin-right: 28px;
`;

export const Rating = styled.p`
  margin-left: 4px;
`;
export const Heart = styled.svg`
  fill: white;
  stroke: black;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const SecondBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const AddingInfo = styled.p`
  border-radius: 24px;
  background: rgb(243, 243, 243);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  box-sizing: border-box;
  font-weight: 500;
  color: rgb(138, 138, 137);
`;

export const Value = styled.span`
  color: rgb(25, 26, 21);
  margin-left: 2px;
`;

export const About = styled.p`
  color: rgba(25, 26, 21, 0.5);
  margin-top: 24px;
  margin-bottom: 14px;
`;
