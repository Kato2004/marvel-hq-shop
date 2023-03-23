import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9f0013;
  width: 100%;
  padding: 0 15px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
  }
  nav {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 5px;
    button {
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
    }
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
    nav {
      margin-bottom: 10px;
      .menu-icon {
        font-size: 60px;
      }
    }
  }
`;
