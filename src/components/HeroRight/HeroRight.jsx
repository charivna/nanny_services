import girlImage from '../../common/girl.jpeg';
import { Block } from './HeroRight.styled';

const HeroRight = () => {
  return (
    <Block>
      <img src={girlImage} alt="girl" width="100%" />
    </Block>
  );
};

export default HeroRight;
