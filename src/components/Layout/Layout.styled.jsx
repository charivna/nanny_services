import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding-left: 128px;
  padding-bottom: 140px;
  display: flex;
  flex-wrap: wrap;
  background: radial-gradient(
    circle at 100% 100%,
    rgba(84, 190, 150, 0.6) 0%,
    rgba(84, 190, 150, 0.2) 25%,
    rgba(84, 190, 150, 0) 50%
  );

  @media only screen and (max-width: 768px) {
    background: white;
  }
`;
export const ContainerCatalog = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1440px;
  padding-left: 128px;
  padding-bottom: 140px;
  display: flex;
  flex-wrap: wrap;
`;
