import styled from "styled-components";

export const MainSection = styled.section`
  max-width: 750px;
  background-color: white;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px 0px 10px 10px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
`;

export const SectionHeader = styled.div`
  border-bottom: 2px solid #eeeeee;
  padding: 20px;
  margin: 0;
`;
