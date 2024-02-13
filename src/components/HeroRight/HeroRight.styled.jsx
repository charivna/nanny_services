import styled from 'styled-components';

export const Block = styled.div`
  position: relative;
  max-width: 464px;
  align-self: flex-end;
  margin-top: 78px;
  position: relative;
  padding-left: 123px;
  padding-right: 128px;
`;

export const Rectangle = styled.div`
  gap: 16px;
  position: absolute;
  bottom: 14%;
  right: 53%;
  width: 311px;
  display: flex;
  height: 118px;
  background-color: rgb(84, 190, 150);
  color: rgb(251, 251, 251);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: rgb(251, 251, 251);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const Number = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: rgb(251, 251, 251);
`;

export const Image = styled.img`
  border-radius: 15px;
  height: 526px;
`;

export const Orange = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgb(251, 199, 94);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 80%;
  right: 13%;
  transform: rotate(-45deg);
`;

export const Purple = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgb(69, 53, 175);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 60%;
  left: 13%;
  transform: rotate(45deg);
`;
