import styled from 'styled-components';

export const ListStyle = styled.li`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

:hover {
  background-color: orange;

}
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;`
