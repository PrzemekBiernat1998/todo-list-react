import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }
    &:hover {
        filter: brightness(110%);
    }
    &:disabled{
        filter:brightness(150%);
        color: ${({ theme }) => theme.color.grey};
    }
`;


