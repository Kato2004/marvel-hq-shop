import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const Container = styled.main`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  padding: 5px 0;
  span {
    font-size: 14px;
  }
  h1 {
    font-size: 16px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 500px;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const ShoppingArea = styled.div`
  max-width: 500px;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  button,
  span {
    color: #fff;
    background-color: #9f0013;
    height: 70px;
    width: 100%;
    ${flexCenter}
    flex: 1;
    font-size: 26px;
    border-radius: 5px;
  }
  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    span {
      cursor: default;
      padding: 10px;
    }
    .is-rare {
      color: #999;
      background-color: #fdff00;
    }
    .price {
      color: #000;
      background-color: #c8c8c8;
    }
  }
  .bottom {
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

export const Details = styled.div`
  margin: 20px 0 10px 0;
  padding: 20px 0 10px 0;
  border-top: 1px solid #999;
  h2 {
    margin-bottom: 5px;
  }
  ul {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Authors = styled.div`
  margin: 20px 0 10px 0;
  padding: 20px 0 10px 0;
  border-top: 1px solid #999;
  h2 {
    margin-bottom: 5px;
  }
  ul {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Description = styled.div`
  padding: 20px 0;
  border-top: 1px solid #000;
`;

export const Images = styled.div`
  margin: 20px 0 10px 0;
  padding: 20px 0 10px 0;
  border-top: 1px solid #999;
  h2 {
    margin-bottom: 15px;
  }
  .imgs-row {
    width: calc(100vw - 20px);
    max-width: 800px;
    display: flex;
    gap: 10px;
    overflow: auto;
    padding-bottom: 10px;
    img {
      width: 150px;
    }
  }
`;
