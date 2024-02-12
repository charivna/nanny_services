import { Block, Debths, StartBtn, Text, Tittle } from './HeroLeft.styled';
import icons from '../../common/sprite.svg';

const HeroLeft = () => {
  return (
    <Block>
      <Tittle>
        The road to the <Debths>depths</Debths> of the human soul
      </Tittle>
      <Text>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </Text>
      <StartBtn>
        Get started
        <span>
          <svg width={18} height={18}>
            <use href={`${icons}#arrow`} />
          </svg>
        </span>
      </StartBtn>
    </Block>
  );
};

export default HeroLeft;
