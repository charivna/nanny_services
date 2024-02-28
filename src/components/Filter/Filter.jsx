import { useState } from 'react';
import icons from '../../common/sprite.svg';
import {
  Down,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Tittle,
  Up,
} from './Filter.styled';

const options = [
  'A to Z',
  'Z to A',
  'Less than 10$',
  'Greater than 10$',
  'Popular',
  'Non popular',
  'Show all',
];

const Filter = ({ onFilterChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState(options[0]);

  const handleOptionSelect = selectedOption => {
    console.log(selectedOption);
    setOption(selectedOption);
    setDropdownOpen(false);

    onFilterChange(selectedOption);
  };

  return (
    <DropdownContainer>
      <Tittle>Filters</Tittle>
      <DropdownButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {option}{' '}
        {isDropdownOpen ? (
          <Up>
            <svg width={20} height={20}>
              <use href={`${icons}#chevron-up`} />
            </svg>
          </Up>
        ) : (
          <Down>
            <svg width={20} height={20}>
              <use href={`${icons}#chevron-down`} />
            </svg>
          </Down>
        )}
      </DropdownButton>
      <DropdownList $isOpen={isDropdownOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Filter;
