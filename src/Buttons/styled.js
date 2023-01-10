import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
`;

export const Button =  styled.button`
    border: none;
    background-color: transparent;
    color: teal;
    margin: 0 0 0 20px;
    transition: color 0.5s;
    @media(max-width: 767px){
        flex-basis:  100%;
        margin: 10px;
      }
    &:hover{
        color: hsl(180, 94%, 25%);
    }

    &:disabled{
        color: #ddd;
    }
`;
