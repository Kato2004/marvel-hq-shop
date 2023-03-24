import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, body{
        padding: 0;
        margin: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
    }
    button {
        border: none;
        cursor: pointer;
          &:active,
          &:hover {
              filter: brightness(70%)
          }
    }
    ul {
        list-style: none
    }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
