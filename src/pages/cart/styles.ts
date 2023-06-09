import styled from "styled-components";

export const ErrorOnAddCoupon = styled.div<{ show: boolean }>`
  border-radius: 5px;
  background-color: #ff6961;
  color: #640000;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  display: ${(props) => (props.show ? "flex" : "none")};
  button {
    color: #640000;
    background-color: transparent;
  }
`;

export const MessageValidCoupon = styled.div<{ show: boolean }>`
  border-radius: 5px;
  background-color: #bdecb6;
  color: #1d5616;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  display: ${(props) => (props.show ? "flex" : "none")};
  button {
    color: #1d5616;
    background-color: transparent;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  gap: 5px;
`;

export const AddCoupon = styled.div`
  width: 100%;
  max-width: 500px;
  h4 {
    margin-bottom: 10px;
  }
  .add-cupom {
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #999;
    }
    > button {
      background-color: #9f0013;
      color: #fff;
      padding: 7px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
`;

export const Subtotal = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #c8c8c8;
  border-radius: 10px;
  padding: 20px;
  gap: 15px;
  div {
    h5 {
      font-size: 16px;
      font-weight: 600;
      color: #222;
    }
    span {
      font-size: 26px;
    }
  }
`;

export const ConfirmPurchase = styled.div`
  width: 100%;
  max-width: 500px;
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
