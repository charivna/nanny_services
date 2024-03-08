import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 566px;
  max-height: 100%;
  overflow-y: auto;
  padding: 64px;
  border-radius: 30px;
  background: rgb(251, 251, 251);
`;

export const Tittle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgba(25, 26, 21, 0.5);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 52px;
  margin-bottom: 18px;
  padding: 16px 18px;

  &::placeholder {
    color: rgb(25, 26, 21);
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 16px 194px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 22px;
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

export const Cross = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
`;

export const Eye = styled.button`
  position: absolute;
  bottom: 50%;
  right: 18px;
  background-color: transparent;
`;

export const WrapperEye = styled.div`
  position: relative;
`;

export const Error = styled(ErrorMessage)`
  color: red;
  font-weight: 500;
`;
