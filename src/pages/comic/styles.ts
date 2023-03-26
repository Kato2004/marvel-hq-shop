import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const Top = styled.div`
  max-width: 500px;
  .img-container {
    max-width: 500px;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  header {
    padding: 5px 0;
    span {
      font-size: 14px;
    }
    h1 {
      font-size: 16px;
    }
  }
`;

export const ShoppingArea = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  button,
  span {
    color: #fff;
    background-color: #9f0013;
    height: 50px;
    width: 100%;
    ${flexCenter}
    flex: 1;
    font-size: 26px;
    border-radius: 5px;
  }
  .price {
    margin-bottom: 10px;
    span {
      cursor: default;
      padding: 10px;
    }
    .is-rare {
      margin-bottom: 10px;
      color: #999;
      background-color: #fdff00;
    }
    .price {
      color: #000;
      background-color: #c8c8c8;
    }
  }
  .purchase-shares {
    display: flex;
    gap: 8px;
    button {
      height: 50px;
      width: 100%;
      font-size: 20px;
    }
    .buy {
      flex: 5;
    }
  }
`;

export const AddedCartWarning = styled.div<{
  show: boolean;
}>`
  width: 80vw;
  max-width: 600px;
  position: absolute;
  top: 15vh;
  margin: 0 auto;
  background-color: #bbf3f9;
  color: #437b81;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.5s;
  button {
    color: #437b81;
    background: transparent;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
  max-width: 500px;

  > div {
    h2 {
      margin-bottom: 5px;
    }
    ul {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }

  .images {
    .imgs-row {
      max-width: 800px;
      display: flex;
      gap: 10px;
      overflow: auto;
      padding-bottom: 10px;
      img {
        border-radius: 2px;
        width: 150px;
      }
    }
  }

  @media (min-width: 1080px) {
    padding: 0;
    max-width: 100%;
  }
`;
