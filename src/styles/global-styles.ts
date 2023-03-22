import { createGlobalStyle } from "styled-components";

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
    .dad {
        width: 100vw
    }
`;
