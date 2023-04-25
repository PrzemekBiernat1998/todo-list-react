import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  outline:  none;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const TaskItem = styled.span`
    padding-left: 10px;
    text-decoration: none;
    outline:  none;
    color: ${({ theme }) => theme.color.teal};

    &:hover {
    filter: brightness(110%);
  }
  
${function ({ done }) {
    return done &&
      css`
        text-decoration: line-through;
        outline:  none;
    `;
  }}
`;

export const Button = styled.button`
   border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  transition: background 0.5s;
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
    `}
  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};
    `}
    &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;
export const StyledLink = styled(Link)`
text-decoration:none !important;
color: ${({ theme }) => theme.color.teal};
`