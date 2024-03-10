import styled from 'styled-components';

export const Block = styled.div`
  position: relative;
  max-width: 464px;
  align-self: flex-end;
  margin-top: 78px;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 320px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media only screen and (min-width: 768px) {
    padding-left: 123px;
    padding-right: 128px;
  }
`;

export const Rectangle = styled.div`
  gap: 16px;
  position: absolute;
  bottom: 0;
  bottom: 14%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 311px;
  display: flex;
  height: 118px;
  background-color: rgb(84, 190, 150);
  color: rgb(251, 251, 251);
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    bottom: 14%;
    left: 14%;
  }

  @media only screen and (max-width: 768px) {
    height: 80px;
  }
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
  width: 100%;
  height: auto;
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
  right: 0;
  transform: rotate(-45deg);

  @media only screen and (min-width: 768px) {
    right: 13%;
  }
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
  left: 0;
  transform: rotate(45deg);

  @media only screen and (min-width: 768px) {
    left: 13%;
  }
`;
