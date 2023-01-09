import styled, { css } from "styled-components";

export const List = styled.ul`
  width: 100%;
  padding: 10px;
  list-style-type: none;
`;
export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 20px;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid #eee;
  word-break: break-all;

${({hidden}) =>
        hidden &&
        css`
        display: none;
    `}
`;

export const TaskItem = styled.span`
    padding-left: 10px;

    &:hover{
        background-color: rgb(190, 190, 190);
    }

${function ({ done }) {
        return done &&
            css`
        text-decoration: line-through;
    `;
    }}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #1a7a1d;
  border: none;
  cursor: pointer;
  transition: 1s;

  &:hover{
    background-color: hsl(122, 65%, 34%);
  }

  ${function ({ remove }) {
        return remove &&
            css`
      background: red;
      &:hover {
        background: hsl(0, 100%, 60%);
        transition: 0.3s;
        cursor: pointer;
      }
    `;
    }}
`;