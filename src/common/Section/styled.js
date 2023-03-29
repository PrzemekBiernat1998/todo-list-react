import styled from "styled-components";

export const MainSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 4px ${({ theme }) => theme.color.alto};
  margin: 10px 0;
  padding: 20px;
`;

export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

