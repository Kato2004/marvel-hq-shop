import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ConfirmPurchase = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    font-size: 24px;
    padding: 15px;
    background-color: #9f0013;
    border-radius: 5px;
    color: #fff;
  }
`;
