import HeroLeft from 'components/HeroLeft/HeroLeft';
import HeroRight from 'components/HeroRight/HeroRight';
import { Container } from 'components/Layout/Layout.styled';

const HomePage = () => {
  return (
    <Container>
      <HeroLeft />
      <HeroRight />
    </Container>
  );
};

export default HomePage;
