import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  color: rgb(251, 251, 251);
  justify-content: space-between;
  display: flex;
  padding: 14px 0px 14px 18px;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  border-radius: 14px;
  background: rgb(84, 190, 150);
  cursor: pointer;
  width: 226px;
  height: 48px;
`;

export const DropdownList = styled.ul`
  z-index: 100;
  list-style: none;
  border-radius: 14px;
  color: rgba(25, 26, 21, 0.3);
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  background-color: rgb(255, 255, 255);
  margin-top: 14px;
  margin-bottom: 14px;
  padding-right: 80px;
  padding-left: 10px;
  margin-right: 8px;

  position: absolute;
  top: 100%;
  left: 0;
  max-width: 226px;
  overflow-y: auto;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  margin-bottom: 8px;
  color: rgba(25, 26, 21, 0.3);
  cursor: pointer;

  &:hover {
    color: rgb(25, 26, 21);
  }
`;

export const Down = styled.span`
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Up = styled.span`
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(138, 138, 137);
  margin-top: 64px;
  margin-bottom: 8px;
`;
