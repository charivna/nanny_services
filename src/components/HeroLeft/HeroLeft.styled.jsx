import styled from 'styled-components';

export const Block = styled.div`
  max-width: 595px;
  margin-top: 126px;
`;

export const Tittle = styled.h1`
  font-weight: 600;
  font-size: 80px;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Debths = styled.span`
  color: rgb(84, 190, 150);
`;

export const Text = styled.p`
  max-width: 510px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 40px;
`;

export const StartBtn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 14px 39px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  height: 60px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: rgb(84, 190, 150);
  transition: box-shadow 0.3s ease;
  color: rgb(251, 251, 251);
  cursor: pointer;
  gap: 18px;
  &:hover {
    background-color: rgb(54, 163, 121);
  }
`;
