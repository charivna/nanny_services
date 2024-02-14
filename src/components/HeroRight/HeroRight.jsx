import girlImage from '../../common/girl.jpeg';
import {
  Block,
  Check,
  Image,
  Number,
  Orange,
  Purple,
  Rectangle,
  Text,
} from './HeroRight.styled';
import icons from '../../common/sprite.svg';

const HeroRight = () => {
  return (
    <Block>
      <Image src={girlImage} alt="girl" width="464" />

      <Rectangle>
        <Check>
          <svg width={20} height={15}>
            <use href={`${icons}#check`} />
          </svg>
        </Check>
        <Text>
          Experienced psychologists
          <br />
          <Number>15,000</Number>
        </Text>
      </Rectangle>
      <Orange>
        <svg width={20} height={20}>
          <use href={`${icons}#users`} />
        </svg>
      </Orange>
      <Purple>
        <svg width={17} height={13}>
          <use href={`${icons}#question`} />
        </svg>
      </Purple>
    </Block>
  );
};

export default HeroRight;
