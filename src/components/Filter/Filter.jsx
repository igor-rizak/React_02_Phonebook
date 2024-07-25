import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled.js';

export const Filter = ({ handleFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={handleFilterChange} name="filter" />
    </FilterContainer>
  );
};
