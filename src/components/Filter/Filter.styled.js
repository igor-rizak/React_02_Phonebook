import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  margin: 1rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const FilterLabel = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const FilterInput = styled.input`
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 3px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;