import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 500;
  margin: 64px auto;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  height: 52px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 1px solid rgba(25, 26, 21, 0.2);
  background-color: rgb(84, 190, 150);
  transition: box-shadow 0.3s ease;
  color: rgb(251, 251, 251);
  cursor: pointer;
  gap: 18px;
  letter-spacing: -0.02em;
  &:hover {
    background-color: rgb(54, 163, 121);
  }
`;
