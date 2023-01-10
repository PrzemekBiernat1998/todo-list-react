import styled from "styled-components";

export const MainForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 5px;
    color: black;
    margin: 10px;

  @media (max-width: 767px) {
    width: 100%;
}
`;

export const Button = styled.button`
    padding: 5px 20px;
    background-color: teal;
    color: white;
    margin: 10px;
    cursor: pointer;
    transition: 1s;

  @media (max-width: 767px) {
    width: 100%;
}

&:hover{
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.05);
}
`;      