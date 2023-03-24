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

export const CartCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(200, 200, 200);
  border-radius: 5px;
  gap: 10px;
  .img-container {
    max-width: 80px;
    img {
      width: 100%;
    }
  }
  .comic-info {
    width: 100%;
    padding: 10px;
    h4 {
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .cart-price {
      span {
        font-size: 20px;
        &:nth-child(1) {
          font-size: 20px;
        }
        &:nth-child(2) {
          font-size: 40px;
        }
      }
    }
  }
`;

export const ComicActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  span {
    padding: 10px;
    font-size: 18px;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    background-color: #fff;
  }
  .delete-button {
    padding: 10px 20px;
    border-radius: 5px;
  }
  div {
    button {
      padding: 10px 15px;
      font-size: 18px;
      &:nth-child(1) {
        border-radius: 5px 0 0 5px;
      }
      &:nth-child(3) {
        border-radius: 0 5px 5px 0;
      }
    }
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