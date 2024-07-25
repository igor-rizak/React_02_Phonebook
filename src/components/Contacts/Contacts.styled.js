import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: center;
  color: #333;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 2rem;
  margin: 0;
  max-width: 400px;
  margin:auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const ContactName = styled.span`
  font-weight: 600;
  color: #333;
`;

export const ContactNumber = styled.span`
  color: #666;
`;

export const DeleteButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: #ff4d4d;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;