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
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .menu-icon {
    font-size: 40px;
    color: #fff;
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
