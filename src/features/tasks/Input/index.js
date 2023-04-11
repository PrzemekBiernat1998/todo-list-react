import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width: 767px) {
    width: 100%;
}
`;