import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .cart-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
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
