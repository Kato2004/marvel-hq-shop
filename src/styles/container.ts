import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .comic-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
  }

  @media (min-width: 1080px) {
    .comic-page {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      gap: 20px;
    }
  }

  @media (min-width: 1400px) {
    .comic-page {
      gap: 40px;
    }
  }
`;
