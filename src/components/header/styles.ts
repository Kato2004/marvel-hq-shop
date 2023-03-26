import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const Container = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9f0013;
  width: 100%;
  padding: 0 15px;
  position: sticky;
  top: 0;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.62);
  z-index: 99;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    span {
      margin-top: 5px;
      white-space: nowrap;
    }
  }

  nav {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 5px;
    button {
      position: relative;
      background-color: transparent;
      border: none;
      cursor: pointer;
      svg {
        font-size: 40px;
        color: #fff;
      }
      .cart-icon {
        font-size: 32px;
      }
      .cart-quantity {
        position: absolute;
        top: 20px;
        right: 15px;
        background-color: #fff;
        ${flexCenter}
        font-size: 14px;
        width: 20px;
        height: 20px;
        padding: 5px;
        border-radius: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
    nav {
      margin-bottom: 10px;
    }
  }
`;
