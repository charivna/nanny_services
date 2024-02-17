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

export const AppWindow = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 600px;
  height: 100%;
  max-height: 600px;
  overflow-y: auto;
  padding: 64px;
  border-radius: 30px;
  background: rgb(251, 251, 251);
`;

export const ImagePsycho = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const InfoPsycho = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const Tittle = styled.h1`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgb(138, 138, 137);
  margin-bottom: 40px;
`;

export const YourPs = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: rgb(138, 138, 137);
`;

export const Name = styled.p`
  font-weight: 500;
  color: rgb(25, 26, 21);
  margin-top: 4px;
`;
