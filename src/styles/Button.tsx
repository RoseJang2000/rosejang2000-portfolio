import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.pointColor};
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
